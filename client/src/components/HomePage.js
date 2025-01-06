// src/components/PatientHomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Fade,
  CircularProgress,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';

const PatientHomePage = () => {
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalDoctors: 0,
    recentRegistration: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://patientmanagement-2eye.onrender.com/api/clinics")
      .then(res => {
        const patients = res.data;
        
        // Calculate unique doctors
        const uniqueDoctors = new Set(patients.map(patient => patient.doctor)).size;
  
        // Find the most recent registration
        const recentRegistration = patients.sort((a, b) =>
          new Date(b.registration_date) - new Date(a.registration_date)
        )[0]?.name; // Assuming each patient has a 'name' field
  
        setStats({
          totalPatients: patients.length,
          totalDoctors: uniqueDoctors,
          recentRegistration: recentRegistration || 'No recent registrations'
        });
  
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching patient stats:', err);
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        // backgroundImage: 'url(https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=1024x1024&w=gi&k=20&c=2nU8Ac2_g9NiiRTgZXfBqSRx50tR4x8R7io7X1OCUFg=)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
        // filter: 'brightness(50%)',
      }}
    >
      {/* Overlay to ensure text readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
          zIndex: 1,
        }}
      ></Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          color: '#fff', // White text for better contrast
        }}
      >
        <Fade in={true} timeout={800}>
          <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Welcome Section */}
            <Box textAlign="center" mb={6}>
              <Typography variant="h2" component="h1" color="primary.light" gutterBottom>
                Welcome to the Patient Management System
              </Typography>
              <Typography variant="h6" color="primary.light" gutterBottom>
                Efficiently manage patient records and appointments
              </Typography>
            </Box>

            {/* Stats Cards */}
            <Grid container spacing={4} mb={6}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                  <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                    <GroupIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                    <Typography variant="h4" gutterBottom>
                      {stats.totalPatients}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Total Patients
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                  <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                    <MedicalServicesIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                    <Typography variant="h4" gutterBottom>
                      {stats.totalDoctors}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Total Doctors
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                  <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                    <CalendarTodayIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                    <Typography variant="h4" gutterBottom>
                      Latest Registration
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {stats.recentRegistration || 'No recent registrations'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Features Section */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h5" gutterBottom color="primary.light">
                Available Features
              </Typography>
            </Box>

            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  component={Link}
                  to="/list"
                  variant="contained"
                  size="large"
                  startIcon={<GroupIcon />}
                  fullWidth
                  sx={{ py: 2 }}
                >
                  View Patients
                </Button>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Button
                  component={Link}
                  to="/add"
                  variant="contained"
                  size="large"
                  startIcon={<AddIcon />}
                  fullWidth
                  sx={{ py: 2 }}
                >
                  Add New Patient
                </Button>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Button
                  component={Link}
                  to="search"
                  variant="contained"
                  size="large"
                  startIcon={<SearchIcon />}
                  fullWidth
                  sx={{ py: 2 }}
                >
                  Search Patients
                </Button>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Button
                  component={Link}
                  to="/export"
                  variant="contained"
                  size="large"
                  startIcon={<GroupIcon />}
                  fullWidth
                  sx={{ py: 2 }}
                >
                  Download Patients List
                </Button>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Button
                  component="a"
                  href="https://github.com/88chinu/clinicManagement"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  startIcon={<GitHubIcon />}
                  fullWidth
                  sx={{ py: 2 }}
                >
                  GitHub
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Fade>
      </Box>
    </Box>
  );
};

export default PatientHomePage;
