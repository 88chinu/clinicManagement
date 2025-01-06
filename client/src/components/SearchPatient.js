import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  CircularProgress,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PatientCard from './PatientCard';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL; // Access environment variable

const SearchPatient = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    searchTerm: '',
    searchField: 'Patient_name', // Matches CreatePatient
    sortBy: 'Patient_name', // Matches CreatePatient
    sortOrder: 'asc',
  });

  useEffect(() => {
    axios
      .get(`${URL}/api/clinics`)
      .then((res) => {
        setPatients(res.data);
        setFilteredPatients(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching patients:', err);
        setLoading(false);
      });
  }, []);

  const applyFilters = useCallback(() => {
    let result = [...patients];

    // Search filter
    if (filters.searchTerm) {
      result = result.filter((patient) => {
        const searchValue = patient[filters.searchField]?.toString().toLowerCase();
        return searchValue?.includes(filters.searchTerm.toLowerCase());
      });
    }

    // Sorting
    result.sort((a, b) => {
      let valueA = a[filters.sortBy]?.toString().toLowerCase();
      let valueB = b[filters.sortBy]?.toString().toLowerCase();

      if (valueA < valueB) return filters.sortOrder === 'asc' ? -1 : 1;
      if (valueA > valueB) return filters.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredPatients(result);
  }, [filters, patients]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const resetFilters = () => {
    setFilters({
      searchTerm: '',
      searchField: 'Patient_name',
      sortBy: 'Patient_name',
      sortOrder: 'asc',
    });
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3, mt: 5, bgcolor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Search Patient
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
        Find a patient record from the database
      </Typography>

      {/* Search and Filter Section */}
      <Card sx={{ p: 3, mt: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            {/* Search Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Search"
                value={filters.searchTerm}
                onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
              />
            </Grid>

            {/* Search By Dropdown */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Search By</InputLabel>
                <Select
                  value={filters.searchField}
                  label="Search By"
                  onChange={(e) => setFilters({ ...filters, searchField: e.target.value })}
                >
                  <MenuItem value="Patient_name">Patient Name</MenuItem>
                  <MenuItem value="age">Age</MenuItem>
                  <MenuItem value="gender">Gender</MenuItem>
                  <MenuItem value="contact_number">Contact Number</MenuItem>
                  <MenuItem value="admit_Date">Admit Date</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Sort By Dropdown */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={filters.sortBy}
                  label="Sort By"
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                >
                  <MenuItem value="Patient_name">Patient Name</MenuItem>
                  <MenuItem value="age">Age</MenuItem>
                  <MenuItem value="gender">Gender</MenuItem>
                  <MenuItem value="admit_Date">Admit Date</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Sort Order */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Order</InputLabel>
                <Select
                  value={filters.sortOrder}
                  label="Order"
                  onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
                >
                  <MenuItem value="asc">Ascending</MenuItem>
                  <MenuItem value="desc">Descending</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Reset Filters Button */}
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="outlined"
                  startIcon={<RestartAltIcon />}
                  onClick={resetFilters}
                >
                  Reset Filters
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Typography variant="body2" color="textSecondary" sx={{ mt: 3 }}>
        Found {filteredPatients.length} patients
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {filteredPatients.map((patient) => (
          <Grid item xs={12} sm={6} md={4} key={patient._id}>
            <PatientCard patient={patient} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchPatient;
