// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeModeContext } from './ThemeModeProvider';

const Navbar = () => {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const { mode, toggleTheme } = useContext(ThemeModeContext);

    const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
    const handleMenuClose = () => setMenuAnchorEl(null);

    return (
        <AppBar position="static" elevation={1}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'none',
                        color: 'text.primary',
                        fontFamily: 'Roboto Slab, serif',
                    }}
                >
                    Clinic Management
                </Typography>
                <Tooltip title="Toggle Theme">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={toggleTheme}
                        startIcon={
                            mode === 'light' ? (
                                <Brightness4Icon />
                            ) : mode === 'dark' ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon style={{ transform: 'rotate(45deg)' }} />
                            )
                        }
                        sx={{ marginRight: 2 }}
                    >
                        {mode === 'light' ? 'Light Mode' : mode === 'dark' ? 'Dark Mode' : 'Custom'}
                    </Button>
                </Tooltip>
                <IconButton onClick={handleMenuOpen} color="inherit">
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem component={RouterLink} to="/add" onClick={handleMenuClose}>
                        Create
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/list" onClick={handleMenuClose}>
                        Patient List
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/search" onClick={handleMenuClose}>
                        Search Page
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/export" onClick={handleMenuClose}>
                        Download List
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/about" onClick={handleMenuClose}>
                        About
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
