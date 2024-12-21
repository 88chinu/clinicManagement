import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h2" component="h1" color="success" gutterBottom>
        Welcome to the Clinic Management System
      </Typography>
      <Typography variant="h5" gutterBottom>
        Manage Patients Efficiently
      </Typography>
      
      <Box mt={4}>
        <Grid container spacing={4} justifyContent="center">
          {/* View Patients Button */}
          <Grid item xs={12} sm={6} md={3}>
            <Button 
              component={Link} 
              to="/list" 
              color="primary" 
              variant="contained" 
              fullWidth
            >
              View Patients
            </Button>
          </Grid>

          {/* Download Patients List Button */}
          <Grid item xs={12} sm={6} md={3}>
            <Button 
              component={Link} 
              to="/export" 
              color="primary" 
              variant="contained" 
              fullWidth
            >
              Download Patients List
            </Button>
          </Grid>

          {/* GitHub Button */}
          <Grid item xs={12} sm={6} md={3}>
            <Button
              component="a"
              href="https://github.com/88chinu/clinicManagement"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              fullWidth
            >
              GitHub
            </Button>
          </Grid>

          {/* Resume Button */}
          <Grid item xs={12} sm={6} md={3}>
            <Button
              component="a"
              href="https://docs.google.com/document/d/1951CLEB80bJ5kHb3fJa355BsURLlvO9wbkWmdBRDtbk/edit?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<MenuBookIcon />}
              size="large"
              fullWidth
            >
              Resume
            </Button>
          </Grid>

          {/* Search Patients Button */}
          <Grid item xs={12} sm={6} md={3}>
            <Button
              component={Link}
              to="/search"
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
              fullWidth
            >
              Search Patients
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;