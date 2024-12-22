import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeModeProvider } from './components/ThemeModeProvider';
import { CssBaseline, Box, Container } from '@mui/material';
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider
import createAyuTheme from './container/Theme';

import PatientList from './components/PatientList';
import PatientDetail from './components/detailsPatient';
import PatientAdd from './components/createPatient';
import PatientEdit from './components/updatePatient';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import HomePage from './components/homePage';
import ExportPage from './components/ExportPage';

const App = () => {
    return (
        <ThemeModeProvider theme={createAyuTheme}>
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
                                <Route path="/list" element={<PatientList />} />
                                <Route path="/add" element={<PatientAdd />} />
                                <Route path="/edit/:id" element={<PatientEdit />} />
                                <Route path="/detail/:id" element={<PatientDetail />} />
                                <Route exact path="/" element={<HomePage />} />
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
