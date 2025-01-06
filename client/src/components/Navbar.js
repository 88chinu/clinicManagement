import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
        color: '#fff',
      }}
    >
      <Toolbar>
        {/* Logo or Brand Name */}
        <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 700,
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Clinic Management
        </Typography>

        {/* Menu Icon for Smaller Screens */}
        <Tooltip title="Menu">
          <IconButton onClick={handleMenuOpen} color="inherit">
            <MenuIcon />
          </IconButton>
        </Tooltip>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
          sx={{ mt: 1 }}
        >
          {[
            { label: 'Create', path: '/add' },
            { label: 'Patient List', path: '/list' },
            { label: 'Search Page', path: '/search' },
            { label: 'Download List', path: '/export' },
            { label: 'About', path: '/about' },
          ].map((menuItem) => (
            <MenuItem
              key={menuItem.label}
              component={RouterLink}
              to={menuItem.path}
              onClick={handleMenuClose}
              sx={{
                '&:hover': { backgroundColor: 'rgba(98, 0, 234, 0.2)' },
              }}
            >
              {menuItem.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
