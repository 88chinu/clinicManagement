// src/components/ThemeModeProvider.js
import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createThemeByMode } from '../container/Theme';

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleTheme = () => {
        const nextMode = mode === 'light' ? 'dark' : mode === 'dark' ? 'mirage' : 'light';
        setMode(nextMode);
    };

    const theme = useMemo(() => createThemeByMode(mode), [mode]);

    return (
        <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
};
