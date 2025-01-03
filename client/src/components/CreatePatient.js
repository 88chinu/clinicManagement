import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, MenuItem, Box, Typography, useTheme } from '@mui/material';
import { useSnackbar } from 'notistack';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

const CreatePatient = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [patient, setPatient] = useState({
    Patient_name: '',
    age: '',
    gender: '',
    contact_number: '',
    admit_Date: '',
    previous_admit: '',
  });

  const [contactError, setContactError] = useState(false);

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setPatient({ ...patient, contact_number: value });
    setContactError(value.length < 8 || value.length > 15); // Basic validation for phone length
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (contactError) {
      enqueueSnackbar('Please enter a valid contact number.', { variant: 'error' });
      return;
    }

    axios
      .post("https://patientmanagement-2eye.onrender.com/api/clinics", patient)
      .then(() => {
        setPatient({
          Patient_name: '',
          age: '',
          gender: '',
          contact_number: '',
          admit_Date: '',
          previous_admit: '',
        });
        enqueueSnackbar('Patient added successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        console.error('Error in creating patient:', err);
        enqueueSnackbar('Something went wrong, try again!', { variant: 'error' });
      });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 3,
        mt: 5,
        bgcolor: isDarkMode ? theme.palette.background.paper : '#f9f9f9',
        color: isDarkMode ? theme.palette.text.primary : 'inherit',
        borderRadius: 2,
        boxShadow: isDarkMode ? '0 4px 10px rgba(0, 0, 0, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Add Patient
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
        Create a new patient record
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Link to="/list" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="secondary">
            Show Patient List
          </Button>
        </Link>
      </Box>

      <form noValidate onSubmit={onSubmit}>
        <TextField
          fullWidth
          label="Patient Name"
          name="Patient_name"
          value={patient.Patient_name}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Age"
          name="age"
          value={patient.age}
          onChange={onChange}
          type="number"
          variant="outlined"
          margin="normal"
        />

        <TextField
          select
          fullWidth
          label="Gender"
          name="gender"
          value={patient.gender}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        >
          <MenuItem value="" disabled>
            Select Gender
          </MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" gutterBottom>
            Contact Number
          </Typography>
          <PhoneInput
            country="in" // Default country
            value={patient.contact_number}
            onChange={handlePhoneChange}
            inputStyle={{
              width: '100%',
              padding: '10px',
              borderColor: contactError ? 'red' : '#ced4da',
            }}
            containerStyle={{ marginBottom: '16px' }}
            isValid={!contactError} // Validation for the phone input
          />
          {contactError && (
            <Typography variant="caption" color="error">
              Please enter a valid phone number.
            </Typography>
          )}
        </Box>

        <TextField
          fullWidth
          label="Admit Date"
          name="admit_Date"
          value={patient.admit_Date}
          onChange={onChange}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="normal"
        />

        <TextField
          select
          fullWidth
          label="Previous Admit"
          name="previous_admit"
          value={patient.previous_admit}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        >
          <MenuItem value="" disabled>
            Previous Admit
          </MenuItem>
          <MenuItem value="true">Yes</MenuItem>
          <MenuItem value="false">No</MenuItem>
        </TextField>

        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreatePatient;