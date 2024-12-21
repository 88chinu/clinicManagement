import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      {/* Heading */}
      <Typography variant="h2" component="h1" color="primary" gutterBottom sx={{ fontWeight: 700, fontSize: '3rem' }}>
        Welcome to the Clinic Management System
      </Typography>

      {/* Subheading */}
      <Typography variant="h5" sx={{ marginBottom: 4, fontStyle: 'italic' }}>
        Manage Patients Efficiently
      </Typography>
      
      {/* Button Grid */}
      <Box mt={4}>
        <Grid container spacing={3} justifyContent="center">
          {/* View Patients Button */}
          <Grid item xs={12} sm={6} md={3}>
            <Button 
              component={Link} 
              to="/list" 
              color="primary" 
              variant="contained" 
              fullWidth
              sx={{
                padding: '16px',
                borderRadius: '8px',
                boxShadow: 2,
                '&:hover': { boxShadow: 6 },
              }}
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
              sx={{
                padding: '16px',
                borderRadius: '8px',
                boxShadow: 2,
                '&:hover': { boxShadow: 6 },
              }}
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
              sx={{
                padding: '16px',
                borderRadius: '8px',
                boxShadow: 2,
                '&:hover': { boxShadow: 6 },
              }}
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
              sx={{
                padding: '16px',
                borderRadius: '8px',
                boxShadow: 2,
                '&:hover': { boxShadow: 6 },
              }}
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
              sx={{
                padding: '16px',
                borderRadius: '8px',
                boxShadow: 2,
                '&:hover': { boxShadow: 6 },
              }}
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
