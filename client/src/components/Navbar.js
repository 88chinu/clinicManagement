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
        backgroundColor: '#047a9e',
        color: '#fff',
        boxShadow: '2px 4px 15px rgba(1, 1, 1, 1.2)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo and Brand Name */}
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
              width: 45,
              height: 45,
              marginRight: '1rem',
              borderRadius: '50%',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <Typography
            variant="h5"
            sx={{
              color: '#FFD700',
              fontWeight: 800,
              fontFamily: '"Roboto Slab", serif',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
              letterSpacing: '1.5px',
              '&:hover': {
                color: '#FFF',
              },
            }}
          >
            Curesync.org
          </Typography>
        </Box>

        {/* Menu for Smaller Screens */}
        <Tooltip title="Menu">
          <IconButton onClick={handleMenuOpen} color="inherit" sx={{ p: 1 }}>
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Tooltip>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
          sx={{
            mt: 1,
            '& .MuiPaper-root': {
              backgroundColor: '#005f73',
              color: '#ffffff',
            },
          }}
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
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                padding: '12px 24px',
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
