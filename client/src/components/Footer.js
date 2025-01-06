// src/components/PatientHomePage.js (Updated Footer Section with Text Links)
import React from 'react';
import { Box, Typography, Grid, Divider, Link, Container } from '@mui/material';
import { GitHub, LinkedIn, Instagram, Facebook } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        pt: 4,
        pb: 2,
        mt: 6,
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="inherit">
              Email: support@clinic.com
            </Typography>
            <Typography variant="body2" color="inherit">
              Phone: +1 234 567 890
            </Typography>
            <Typography variant="body2" color="inherit">
              Address: 1234 Health St, Wellness City, 56789
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Quick Links
            </Typography>
            <Link
              component="a"
              href="/list"
              variant="body2"
              color="inherit"
              sx={{
                display: 'block',
                '&:hover': {
                  color: 'primary.light',
                },
                mb: 1,
              }}
            >
              View Patients
            </Link>
            <Link
              component="a"
              href="/add"
              variant="body2"
              color="inherit"
              sx={{
                display: 'block',
                '&:hover': {
                  color: 'primary.light',
                },
                mb: 1,
              }}
            >
              Add New Patient
            </Link>
            <Link
              component="a"
              href="/export"
              variant="body2"
              color="inherit"
              sx={{
                display: 'block',
                '&:hover': {
                  color: 'primary.light',
                },
                mb: 1,
              }}
            >
              Download Patients List
            </Link>
            <Link
              component="a"
              href="/scan"
              variant="body2"
              color="inherit"
              sx={{
                display: 'block',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              QR Code Page
            </Link>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" justifyContent="center" gap={2}>
              <Link
                component="a"
                href="https://github.com/88chinu/clinicManagement"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <GitHub />
              </Link>
              <Link
                component="a"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <LinkedIn />
              </Link>
              <Link
                component="a"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <Instagram />
              </Link>
              <Link
                component="a"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <Facebook />
              </Link>
            </Box>
          </Grid>

          {/* About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="inherit">
              We provide a seamless platform to manage your health records, doctor's appointments, and much more.
            </Typography>
            <Typography variant="body2" color="inherit" mt={2}>
              <b>Our Mission:</b> To empower healthcare providers with technology that makes patient management easier and more efficient.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'primary.light' }} />

        {/* Copyright */}
        <Typography variant="body2" color="inherit" sx={{ mb: 2 }}>
          © 2025 Patient Management System | All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
