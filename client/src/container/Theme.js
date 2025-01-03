// src/container/Theme.js
import { createTheme } from '@mui/material/styles';

// Define colors for each theme
const noctisObscuroColors = {
    base: '#121212',
    surface: '#1f1f1f',
    overlay: '#2c2c2c',
    muted: '#6c757d',
    subtle: '#404040',
    text: '#ffffff',
    primaryMain: '#ff6200',
    secondaryMain: '#7d4b93',
    error: '#ff3333',
    warning: '#ffcc00',
    info: '#00bcd4',
    success: '#4caf50',
};

const noctisHibernusColors = {
    base: '#fafafa', // Light off-white base background
    surface: '#ffffff', // White surface for cards and containers
    overlay: '#f0f0f0', // Light gray overlay
    muted: '#8a8a8a', // Muted text color
    subtle: '#c0c0c0', // Soft secondary text color
    text: '#333333', // Dark text for readability
    primaryMain: '#1e90ff', // Blue primary color
    secondaryMain: '#f2945e', // Coral/orange secondary color
    error: '#f44336', // Red for errors
    warning: '#ff9800', // Orange for warnings
    info: '#2196f3', // Blue for info
    success: '#4caf50', // Green for success
};

// Function to return the corresponding color palette based on the selected mode
const getNoctisColors = (mode) => {
    switch (mode) {
        case 'noctis-obscuro':
            return noctisObscuroColors;
        case 'noctis-hibernus':
            return noctisHibernusColors;
        default:
            return noctisHibernusColors;
    }
};

// Function to create a theme based on the selected mode
export const createThemeByMode = (mode) => {
    const themeColors = getNoctisColors(mode);

    return createTheme({
        palette: {
            mode: mode === 'noctis-obscuro' ? 'dark' : 'light',
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
            fontFamily: mode === 'noctis-obscuro' ? '"Orbitron", "Roboto", sans-serif' : '"Poppins", "Roboto", sans-serif',
            h1: { fontFamily: '"Orbitron", sans-serif', fontWeight: 600, fontSize: '2.5rem' },
            h2: { fontFamily: '"Orbitron", sans-serif', fontWeight: 500, fontSize: '2rem' },
            h3: { fontFamily: '"Orbitron", sans-serif', fontWeight: 500, fontSize: '1.75rem' },
            h4: { fontFamily: '"Orbitron", sans-serif', fontWeight: 500, fontSize: '1.5rem' },
            h5: { fontFamily: '"Orbitron", sans-serif', fontWeight: 400, fontSize: '1.25rem' },
            h6: { fontFamily: '"Orbitron", sans-serif', fontWeight: 400, fontSize: '1rem' },
            body1: { fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '1rem' },
            body2: { fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '0.875rem' },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: themeColors.primaryMain,
                        color: themeColors.text,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: '8px',
                    },
                    contained: {
                        backgroundColor: themeColors.primaryMain,
                        color: themeColors.text,
                        '&:hover': {
                            backgroundColor: themeColors.secondaryMain,
                        },
                    },
                    outlined: {
                        borderColor: themeColors.primaryMain,
                        color: themeColors.primaryMain,
                        '&:hover': {
                            borderColor: themeColors.secondaryMain,
                            color: themeColors.secondaryMain,
                        },
                    },
                    text: {
                        color: themeColors.primaryMain,
                        '&:hover': {
                            backgroundColor: themeColors.overlay,
                        },
                    },
                },
            },
        },
    });
};
