import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar, Alert, Button, TextField, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const URL = process.env.REACT_APP_API_URL; // Access environment variable

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
    const theme = useTheme();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${URL}/api/auth/login`, { email, password });
            localStorage.setItem('token', data.token); // Save token in localStorage
            setNotification({ open: true, message: 'Login successful', severity: 'success' });
        } catch (error) {
            setNotification({ open: true, message: error.response?.data?.message || 'Login failed', severity: 'error' });
        }
    };

    const handleClose = () => {
        setNotification({ ...notification, open: false });
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    maxWidth: '400px',
                    margin: 'auto',
                    padding: 2,
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: '12px',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                }}
            >
                <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                    sx={{ input: { color: theme.palette.text.primary } }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                    sx={{ input: { color: theme.palette.text.primary } }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{
                        padding: '10px 20px',
                        textTransform: 'none',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    Login
                </Button>
                <Typography
                    variant="body1"
                    align="center"
                    sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 500,
                    }}
                >
                    or
                </Typography>
                <Button
                    component={RouterLink}
                    to="/register"
                    variant="outlined"
                    color="secondary"
                    sx={{
                        padding: '10px 20px',
                        textTransform: 'none',
                        borderColor: theme.palette.secondary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover,
                        },
                    }}
                >
                    Register
                </Button>
            </Box>
            <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={notification.severity} sx={{ width: '100%' }}>
                    {notification.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default Login;
