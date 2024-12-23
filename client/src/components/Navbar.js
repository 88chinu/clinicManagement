import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeModeContext } from './ThemeModeProvider'; // Ensure correct path

const Navbar = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const { mode, toggleTheme } = useContext(ThemeModeContext);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'primary.main', width: '100%' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            color: 'text.primary',
            textDecoration: 'none',
            fontFamily: 'Roboto Slab, serif',
          }}
        >
          Clinic Management
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={RouterLink}
              to="/add"
              onClick={handleMenuClose}
              sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
            >
              Create
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/list"
              onClick={handleMenuClose}
              sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
            >
              PatientList
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/search"
              onClick={handleMenuClose}
              sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
            >
              SearchPage
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/export"
              onClick={handleMenuClose}
              sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
            >
              Download List
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/About"
              onClick={handleMenuClose}
              sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
            >
              About
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
