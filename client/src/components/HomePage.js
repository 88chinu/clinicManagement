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
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
import NoteIcon from '@mui/icons-material/Note';
import QrCodeIcon from '@mui/icons-material/QrCode';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL; // Access environment variable

const PatientHomePage = () => {
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalDoctors: 0,
    recentRegistration: null,
  });
  const [loading, setLoading] = useState(true);
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);

  useEffect(() => {
    // Fetch patient stats
    axios.get(`${URL}/api/clinics`)
      .then(res => {
        const patients = res.data;
        const uniqueDoctors = new Set(patients.map(patient => patient.doctor)).size;
        const recentRegistration = patients.sort((a, b) =>
          new Date(b.registration_date) - new Date(a.registration_date)
        )[0]?.name; // Assuming each patient has a 'name' field

        setStats({
          totalPatients: patients.length,
          totalDoctors: uniqueDoctors,
          recentRegistration: recentRegistration || 'No recent registrations',
        });

        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching patient stats:', err);
        setLoading(false);
      });
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Buttons appear after scrolling 400px down
    if (scrollPosition > 400) {
      setIsButtonsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // Uncomment the line below and provide the path to your image
          backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxVwNJRx68aBZ2rE3Ace4V9k2pPcWdpbb-MA4GK8c218XyGA6)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></Box>

      <Box sx={{ position: 'relative', zIndex: 2, color: 'text.primary' }}>
        <Fade in={true} timeout={800}>
          <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Welcome Section */}
            <Box textAlign="center" mb={6}>
              <Typography variant="h2" component="h1" color="primary" gutterBottom>
                Welcome to the Patient Management System
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Efficiently manage patient records and appointments
              </Typography>
            </Box>

            {/* Stats Cards */}
            <Grid container spacing={4} mb={6}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 2 }}>
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
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 2 }}>
                  <LocalHospitalIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <CardContent sx={{ textAlign: 'center', width: '100%' }}>
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
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 2 }}>
                  <CalendarTodayIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <CardContent sx={{ textAlign: 'center', width: '100%' }}>
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

            {/* Features Section (Appears after scrolling) */}
            <Box
              id="buttonSection"
              sx={{
                display: isButtonsVisible ? 'block' : 'none',
                textAlign: 'center',
                mb: 4,
              }}
            >
              <Typography variant="h5" gutterBottom color="primary">
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
                  sx={{ py: 2, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
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
                  startIcon={<AddCircleOutlineIcon />}
                  fullWidth
                  sx={{ py: 2, bgcolor: 'secondary.main', '&:hover': { bgcolor: 'secondary.dark' } }}
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
                  startIcon={<ChatIcon />}
                  fullWidth
                  sx={{ py: 2, bgcolor: 'info.main', '&:hover': { bgcolor: 'info.dark' } }}
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
                  startIcon={<FileCopyIcon />}
                  fullWidth
                  sx={{ py: 2, bgcolor: 'success.main', '&:hover': { bgcolor: 'success.dark' } }}
                >
                  Download Patients List
                </Button>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Button
                  component={Link}
                  to="/scan"
                  variant="contained"
                  size="large"
                  startIcon={<QrCodeIcon />}
                  fullWidth
                  sx={{ py: 2, bgcolor: 'warning.main', '&:hover': { bgcolor: 'warning.dark' } }}
                >
                  QRCode Page
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
                  sx={{ py: 2, bgcolor: 'info.main', '&:hover': { bgcolor: 'info.dark' } }}
                >
                  GitHub
                </Button>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Button
                  component="a"
                  href="https://docs.google.com/document/d/1z5jlCUQCnseKXfEx0OPbSf-uA9YbQBDXU7vncDMGUE0/edit?tab=t.0#heading=h.kum8f7324oo"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  startIcon={<NoteIcon />}
                  fullWidth
                  sx={{ py: 2, bgcolor: 'secondary.main', '&:hover': { bgcolor: 'secondary.dark' } }}
                >
                  Documentation
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
