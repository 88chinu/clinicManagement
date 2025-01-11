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
  Button,
  Box,
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
        background: 'linear-gradient(90deg, #047a9e, #04a9e6)',
        color: '#fff',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar>
        {/* Logo and Brand Name */}
        <Box display="flex" alignItems="center">
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT96IuJzpcwrZ6swgbVUYB-HNs8id8HCh5lrI_Vi07t9ZDrc-wB"
              alt="Logo"
              style={{
                width: 40,
                height: 40,
                marginRight: '1rem',
                borderRadius: '50%',
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: '#fff',
                fontWeight: 700,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Curesync.org
            </Typography>
          </Box>
        </Box>

        {/* Spacer to push content to the right */}
        <Box flexGrow={1} />

        {/* Login Button */}
        <Button
          component={RouterLink}
          to="/login"
          variant="outlined"
          sx={{
            marginLeft: 2,
            borderColor: '#fff',
            color: '#fff',
            '&:hover': {
              borderColor: '#04a9e6',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          Login
        </Button>

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
                '&:hover': { backgroundColor: 'rgba(4, 122, 158, 0.2)' },
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
