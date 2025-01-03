import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeModeProvider } from './components/ThemeModeProvider';
import { CssBaseline, Box, Container } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import HomePage from './components/HomePage';
import SearchPage from './components/SearchPatient';
import PatientList from './components/PatientList';
import PatientDetail from './components/DetailsPatient';
import PatientAdd from './components/CreatePatient';
import PatientEdit from './components/UpdatePatient';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExportPage from './components/ExportPage';
import ThemeSwitcher from './components/ThemeSwitcher';

const AppContent = () => (
    <>
        <CssBaseline />
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Router>
                <Box display="flex" flexDirection="column" minHeight="100vh">
                    <Navbar />
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        px={2}
                        py={1}
                    >
                        <h1 style={{ margin: 0 }}>Patient Management</h1>
                        <ThemeSwitcher />
                    </Box>
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
    </>
);

const App = () => (
    <ThemeModeProvider>
        <AppContent />
    </ThemeModeProvider>
);

export default App;
