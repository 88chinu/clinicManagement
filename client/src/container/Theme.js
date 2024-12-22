import { createTheme } from '@mui/material/styles';

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

const getAyuColors = (mode) => {
    switch (mode) {
        case 'light':
            return ayuLightColors;
        case 'dark':
            return ayuDarkColors;
        case 'mirage':
            return ayuMirageColors;
        default:
            return ayuLightColors;
    }
};

const createAyuTheme = (mode) => {
    const themeColors = getAyuColors(mode);

    return createTheme({
        palette: {
            mode: mode === 'mirage' ? 'dark' : mode,
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
        },
    });
};

export default createAyuTheme;
