// Theme.js
import { createTheme } from '@mui/material/styles';

// Define colors for each theme
const ayuLightColors = {
    base: '#f8f8f2',
    surface: '#fcfcfa',
    overlay: '#e8e8e3',
    muted: '#a1a1a1',
    subtle: '#cfcfc9',
    text: '#575f66',
    primaryMain: '#55b4d4',
    secondaryMain: '#f2945e',
    error: '#f51818',
    warning: '#ffcb6b',
    info: '#73d0ff',
    success: '#91b859',
};

const ayuDarkColors = {
    base: '#0f1419',
    surface: '#1e272e',
    overlay: '#2c3a41',
    muted: '#5c6773',
    subtle: '#3e4b59',
    text: '#d9d7ce',
    primaryMain: '#39bae6',
    secondaryMain: '#f29718',
    error: '#ef5350',
    warning: '#ffa726',
    info: '#5cb3fa',
    success: '#7fb069',
};

const ayuMirageColors = {
    base: '#1f2430',
    surface: '#242936',
    overlay: '#303744',
    muted: '#676e95',
    subtle: '#3e4b59',
    text: '#c7c9cb',
    primaryMain: '#59c2ff',
    secondaryMain: '#e6b673',
    error: '#ff776e',
    warning: '#ffcb6b',
    info: '#73d0ff',
    success: '#99c794',
};

const ayuNightColors = {
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

// Function to return the corresponding color palette based on the selected mode
const getAyuColors = (mode) => {
    switch (mode) {
        case 'light':
            return ayuLightColors;
        case 'dark':
            return ayuDarkColors;
        case 'mirage':
            return ayuMirageColors;
        case 'night':
            return ayuNightColors; // Added the 'night' mode
        default:
            return ayuLightColors;
    }
};

// Function to create a theme based on the selected mode
export const createThemeByMode = (mode) => {
    const themeColors = getAyuColors(mode);

    return createTheme({
        palette: {
            mode: mode === 'mirage' || mode === 'night' ? 'dark' : mode, // Set to dark mode for 'mirage' and 'night'
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
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif', // Updated font family
            h1: { fontFamily: '"Poppins", sans-serif', fontWeight: 600, fontSize: '2.5rem' },
            h2: { fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '2rem' },
            h3: { fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '1.75rem' },
            h4: { fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '1.5rem' },
            h5: { fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '1.25rem' },
            h6: { fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '1rem' },
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
