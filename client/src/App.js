import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeModeProvider } from './components/ThemeModeProvider';
import { CssBaseline, Box, Container } from '@mui/material';
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider
import clinicLightColors from './container/Theme';

import HomePage from './components/HomePage';
import SearchPage from './components/SearchPatient';
import PatientList from './components/PatientList';
import PatientDetail from './components/DetailsPatient';
import PatientAdd from './components/CreatePatient';
import PatientEdit from './components/UpdatePatient';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExportPage from './components/ExportPage';

const App = () => {
    return (
        <ThemeModeProvider theme={clinicLightColors}>
            <CssBaseline />
            {/* Wrap your application with SnackbarProvider */}
            <SnackbarProvider
                maxSnack={3} // Maximum number of notifications displayed simultaneously
                anchorOrigin={{
                    vertical: 'top', // Notifications will appear at the bottom
                    horizontal: 'left', // Notifications aligned to the left
                }}
            >
                <Router>
                    <Box display="flex" flexDirection="column" minHeight="100vh">
                        <Navbar />
                        <Container component="main" flex="1" className="box-container">
                            <Routes>
                            <Route exact path="/" element={<HomePage />} />
                                <Route path="/list" element={<PatientList />} />
                                <Route path="/add" element={<PatientAdd />} />
                                <Route path="/edit/:id" element={<PatientEdit />} />
                                <Route path="/detail/:id" element={<PatientDetail />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/export" element={<ExportPage />} />
                                <Route path="*" element={<div>404 - Page Not Found</div>} />
                            </Routes>
                        </Container>
                        <Footer />
                    </Box>
                </Router>
            </SnackbarProvider>
        </ThemeModeProvider>
    );
};

export default App;
