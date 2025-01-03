// Theme.js
import { createTheme } from '@mui/material/styles';

// Define colors for each theme
const noctisHibernusColors = {
    base: '#1b1d1e',
    surface: '#282a36',
    overlay: '#3c3f4c',
    muted: '#6c7078',
    subtle: '#474a52',
    text: '#f8f8f2',
    primaryMain: '#f07178',
    secondaryMain: '#82aaff',
    error: '#ff5370',
    warning: '#ffcb6b',
    info: '#89ddff',
    success: '#c3e88d',
};

const noctisObscuroColors = {
    base: '#191919',
    surface: '#212121',
    overlay: '#2c2c2c',
    muted: '#707070',
    subtle: '#373737',
    text: '#e8e8e8',
    primaryMain: '#c792ea',
    secondaryMain: '#ffcb6b',
    error: '#ff5370',
    warning: '#f78c6c',
    info: '#89ddff',
    success: '#c3e88d',
};

// Function to return the corresponding color palette based on the selected mode
const getThemeColors = (mode) => {
    switch (mode) {
        case 'hibernus':
            return noctisHibernusColors;
        case 'obscuro':
            return noctisObscuroColors;
        default:
            return noctisHibernusColors; // Default to Hibernus if no mode is specified
    }
};

// Function to create a theme based on the selected mode
export const createThemeByMode = (mode) => {
    const themeColors = getThemeColors(mode);

    return createTheme({
        palette: {
            mode: 'dark', // Both themes are dark
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
            fontFamily:
                mode === 'hibernus'
                    ? '"JetBrains Mono", "Roboto Mono", monospace'
                    : '"Fira Code", "Courier New", monospace',
            h1: { fontWeight: 700, fontSize: '2.5rem' },
            h2: { fontWeight: 600, fontSize: '2rem' },
            h3: { fontWeight: 500, fontSize: '1.75rem' },
            h4: { fontWeight: 500, fontSize: '1.5rem' },
            h5: { fontWeight: 400, fontSize: '1.25rem' },
            h6: { fontWeight: 400, fontSize: '1rem' },
            body1: { fontWeight: 400, fontSize: '1rem' },
            body2: { fontWeight: 400, fontSize: '0.875rem' },
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
                        borderRadius: '12px',
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
