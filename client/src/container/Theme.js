// src/container/Theme.js
import { createTheme } from '@mui/material/styles';

// Define colors for the updated eye-catching theme
const vibrantColors = {
    base: '#ffffff', // Light background base
    surface: '#f3f4f6', // Light surface color
    overlay: 'rgba(0, 0, 0, 0.05)', // Subtle overlay
    muted: '#707070', // Muted text for low emphasis
    subtle: '#505050', // Subtle text for secondary information
    text: '#333333', // Primary text color
    primaryMain: '#047a9e', // Eye-catching teal blue
    primaryGradient: 'linear-gradient(90deg, #047a9e, #04a9e6)', // Vibrant gradient
    secondaryMain: '#f73079', // Bright pink
    secondaryGradient: 'linear-gradient(90deg, #f73079, #ff85a2)', // Secondary gradient
    error: '#ff4c4c', // Bright red for errors
    warning: '#ffac33', // Orange for warnings
    info: '#04a9e6', // Sky blue for informational messages
    success: '#33cc99', // Bright green for success
};

// Function to return the vibrant palette
const getVibrantColors = (mode) => {
    switch (mode) {
        case 'vibrant':
            return vibrantColors;
        default:
            return vibrantColors; // Default to vibrant theme if no match
    }
};

// Function to create a theme based on the selected mode
export const createThemeByMode = (mode) => {
    const themeColors = getVibrantColors(mode);

    return createTheme({
        palette: {
            mode: 'light',
            background: {
                default: themeColors.base,
                paper: themeColors.surface,
            },
            primary: {
                main: themeColors.primaryMain,
            },
            secondary: {
                main: themeColors.secondaryMain,
            },
            error: {
                main: themeColors.error,
            },
            warning: {
                main: themeColors.warning,
            },
            info: {
                main: themeColors.info,
            },
            success: {
                main: themeColors.success,
            },
            text: {
                primary: themeColors.text,
                secondary: themeColors.muted,
            },
        },
        typography: {
            fontFamily: '"Poppins", "Roboto", sans-serif',
            h1: { fontWeight: 700, fontSize: '3rem', color: themeColors.primaryMain },
            h2: { fontWeight: 600, fontSize: '2.5rem', color: themeColors.secondaryMain },
            h3: { fontWeight: 600, fontSize: '2rem' },
            h4: { fontWeight: 500, fontSize: '1.75rem' },
            h5: { fontWeight: 500, fontSize: '1.5rem' },
            h6: { fontWeight: 400, fontSize: '1.25rem' },
            body1: { fontWeight: 400, fontSize: '1rem', color: themeColors.subtle },
            body2: { fontWeight: 400, fontSize: '0.9rem', color: themeColors.muted },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundImage: themeColors.primaryGradient,
                        color: themeColors.text,
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: '12px',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                    },
                    contained: {
                        backgroundImage: themeColors.primaryGradient,
                        color: '#fff',
                        '&:hover': {
                            backgroundImage: themeColors.secondaryGradient,
                            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
                        },
                    },
                    outlined: {
                        borderColor: themeColors.primaryMain,
                        color: themeColors.primaryMain,
                        '&:hover': {
                            borderColor: themeColors.secondaryMain,
                            color: themeColors.secondaryMain,
                            backgroundColor: themeColors.overlay,
                        },
                    },
                    text: {
                        color: themeColors.primaryMain,
                        '&:hover': {
                            backgroundColor: themeColors.overlay,
                            color: themeColors.secondaryMain,
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        background: themeColors.surface,
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                        borderRadius: '12px',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        background: themeColors.surface,
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                        borderRadius: '12px',
                    },
                },
            },
        },
    });
};
