// src/components/ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeModeProvider';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const ThemeSwitcher = () => {
    const { currentTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <FormControl variant="outlined" size="small" style={{ marginLeft: 'auto' }}>
            <InputLabel>Theme</InputLabel>
            <Select
                value={currentTheme}
                onChange={(e) => toggleTheme(e.target.value)}
                label="Theme"
            >
                <MenuItem value="nightOwlBlack">Night Owl Black</MenuItem>
                <MenuItem value="matrix">Matrix</MenuItem>
                <MenuItem value="cyberpunk">Cyberpunk</MenuItem>
                <MenuItem value="amethystLight">Amethyst Light</MenuItem>
            </Select>
        </FormControl>
    );
};

export default ThemeSwitcher;
