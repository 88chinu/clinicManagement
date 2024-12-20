import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, MenuItem, Box, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const CreatePatient = (props) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [patient, setPatient] = useState({
    Patient_name: '',
    age: '',
    gender: '',
    contact_number: '',
    admit_Date: '',
    previous_admit: '',
  });

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3, mt: 5, bgcolor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Add Patient
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
        Create a new patient record
      </Typography>
      <div className="col-md-8 m-auto">
             <br />
             <Link to="/list" className="btn btn-outline-warning float-left">
               Show Patient List
             </Link>
           </div>


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

        <TextField
          fullWidth
          label="Contact Number"
          name="contact_number"
          value={patient.contact_number}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        />

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