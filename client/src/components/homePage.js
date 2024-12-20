import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
    return (
     <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h2" component="h1" color="success">
          Welcome to the Clinic Management System
        </Typography>
        <Typography variant="h5" gutterBottom>
          Manage Patients Efficiently
        </Typography>
        <Box mt={4}>
        <Button component={Link} to="/list" color="primary" 
          variant="contained" >
          View Patients
        </Button>
        <Button component={Link} to="/export" color="primary" 
          variant="contained" >
          Download Patients-list
        </Button>
      </Box>
       </Container>
  );
};

export default HomePage;