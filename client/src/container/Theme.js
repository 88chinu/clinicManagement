import { createTheme } from '@mui/material/styles';

const clinicThemeColors = {
    base: '#ffffff',
    surface: '#f9f9f9',
    overlay: '#e0e0e0',
    muted: '#9e9e9e',
    subtle: '#bdbdbd',
    text: '#333333',
    primaryMain: '#00796b', // Calming teal
    secondaryMain: '#0288d1', // Trustworthy blue
    error: '#d32f2f', // Alert red
    warning: '#f9a825', // Attention yellow
    info: '#0288d1', // Consistent blue
    success: '#388e3c', // Positive green
    highlightLow: '#f5f5f5',
    highlightMed: '#eeeeee',
    highlightHigh: '#e0e0e0',
};

const clinicManagementTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: clinicThemeColors.base,
            paper: clinicThemeColors.surface,
        },
        primary: {
            main: clinicThemeColors.primaryMain,
        },
        secondary: {
            main: clinicThemeColors.secondaryMain,
        },
        error: {
            main: clinicThemeColors.error,
        },
        warning: {
            main: clinicThemeColors.warning,
        },
        info: {
            main: clinicThemeColors.info,
        },
        success: {
            main: clinicThemeColors.success,
        },
        text: {
            primary: clinicThemeColors.text,
            secondary: clinicThemeColors.muted,
        },
    },
    typography: {
        fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Roboto Slab", serif',
        },
        h2: {
            fontFamily: '"Roboto Slab", serif',
        },
        h3: {
            fontFamily: '"Roboto Slab", serif',
        },
        h4: {
            fontFamily: '"Roboto Slab", serif',
        },
        h5: {
            fontFamily: '"Roboto Slab", serif',
        },
        h6: {
            fontFamily: '"Roboto Slab", serif',
        },
        body1: {
            fontFamily: '"Lato", sans-serif',
        },
        body2: {
            fontFamily: '"Lato", sans-serif',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: clinicThemeColors.primaryMain,
                    color: clinicThemeColors.text, // Ensures the text is visible on the AppBar
                },
            },
        },        
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto+Slab:wght@400;700&display=swap');
            `,
        },
    },
});

export default clinicManagementTheme;
