import { createTheme } from '@mui/material/styles';

const lightThemeColors = {
    base: '#ffffff',
    surface: '#f9f9f9',
    overlay: '#e0e0e0',
    muted: '#9e9e9e',
    subtle: '#bdbdbd',
    text: '#333333',
    primaryMain: '#00796b',
    secondaryMain: '#0288d1',
    error: '#d32f2f',
    warning: '#f9a825',
    info: '#0288d1',
    success: '#388e3c',
};

const darkThemeColors = {
    base: '#121212',
    surface: '#1e1e1e',
    overlay: '#2e2e2e',
    muted: '#8c8c8c',
    subtle: '#6d6d6d',
    text: '#ffffff',
    primaryMain: '#80cbc4',
    secondaryMain: '#81d4fa',
    error: '#ef9a9a',
    warning: '#ffcc80',
    info: '#81d4fa',
    success: '#a5d6a7',
};

const getThemeColors = (mode) => (mode === 'light' ? lightThemeColors : darkThemeColors);

const createClinicManagementTheme = (mode) => {
    const themeColors = getThemeColors(mode);

    return createTheme({
        palette: {
            mode,
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
            fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
            h1: { fontFamily: '"Roboto Slab", serif' },
            h2: { fontFamily: '"Roboto Slab", serif' },
            h3: { fontFamily: '"Roboto Slab", serif' },
            h4: { fontFamily: '"Roboto Slab", serif' },
            h5: { fontFamily: '"Roboto Slab", serif' },
            h6: { fontFamily: '"Roboto Slab", serif' },
            body1: { fontFamily: '"Lato", sans-serif' },
            body2: { fontFamily: '"Lato", sans-serif' },
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
            MuiCssBaseline: {
                styleOverrides: `
                    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto+Slab:wght@400;700&display=swap');
                `,
            },
        },
    });
};

export default createClinicManagementTheme;
