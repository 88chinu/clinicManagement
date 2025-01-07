// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { CssBaseline, Box, Container } from '@mui/material';

import { createThemeByMode } from './container/Theme'; // Import theme creation
import { ThemeProvider } from '@mui/material/styles'; // Wrap app with theme provider

// Existing components
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

// New authentication components
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
    const theme = createThemeByMode('noctis-lilac'); // Default to noctis-lilac

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
                        <Container component="main" flex="1" className="box-container">
                            <Routes>
                                {/* Existing routes */}
                                <Route exact path="/" element={<HomePage />} />
                                <Route path="/list" element={<PatientList />} />
                                <Route path="/add" element={<PatientAdd />} />
                                <Route path="/edit/:id" element={<PatientEdit />} />
                                <Route path="/detail/:id" element={<PatientDetail />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/export" element={<ExportPage />} />
                                <Route path="/scan" element={<QRCodePage />} />

                                {/* New authentication routes */}
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />

                                {/* Fallback for undefined routes */}
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
