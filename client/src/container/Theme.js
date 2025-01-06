// src/container/Theme.js
import { createTheme } from '@mui/material/styles';

// Define colors for the updated vibrant theme
const vibrantColors = {
    base: '#1a1b27', // Dark background base
    surface: '#232536', // Slightly lighter surface
    overlay: 'rgba(255, 255, 255, 0.1)', // Transparent overlay
    muted: '#a0a3b1', // Muted text for low emphasis
    subtle: '#6c6f8c', // Subtle text for secondary information
    text: '#e4e6f0', // Primary text color
    primaryMain: '#7c4dff', // Bright violet primary color
    primaryGradient: 'linear-gradient(90deg, #7c4dff, #cbbcff)', // Primary gradient
    secondaryMain: '#1de9b6', // Vibrant teal secondary color
    secondaryGradient: 'linear-gradient(90deg, #1de9b6, #64ffda)', // Secondary gradient
    error: '#ff5252', // Bright red for errors
    warning: '#ffab40', // Orange for warnings
    info: '#40c4ff', // Sky blue for informational messages
    success: '#69f0ae', // Bright green for success
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
            mode: 'dark',
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
                        color: themeColors.text,
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
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                        borderRadius: '12px',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        background: themeColors.surface,
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                        borderRadius: '12px',
                    },
                },
            },
        },
    });
};
