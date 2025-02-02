// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { CssBaseline, Box, Container } from '@mui/material';

import { createThemeByMode } from './container/Theme';
import { ThemeProvider } from '@mui/material/styles';

import HomePage from './components/HomePage';
import SearchPage from './components/SearchPatient';
import PatientList from './components/PatientList';
import PatientDetail from './components/DetailsPatient';
import PatientAdd from './components/CreatePatient';
import PatientEdit from './components/UpdatePatient';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExportPage from './components/ExportPage';
import QRCodePage from './components/QRcode';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
  const theme = createThemeByMode('noctis-lilac');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Router>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Navbar />
            <Container
              component="main"
              // Remove any custom classes if they are interfering
              // and use sx for styling to align content at the top
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                flexGrow: 1,
                paddingTop: '1rem', // optional: add padding if needed
              }}
            >
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/list" element={<PatientList />} />
                <Route path="/add" element={<PatientAdd />} />
                <Route path="/edit/:id" element={<PatientEdit />} />
                <Route path="/detail/:id" element={<PatientDetail />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/export" element={<ExportPage />} />
                <Route path="/scan" element={<QRCodePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<div>404 - Page Not Found</div>} />
              </Routes>
            </Container>
            <Footer />
          </Box>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
