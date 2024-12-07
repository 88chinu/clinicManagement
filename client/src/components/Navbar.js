// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
// } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import HomeIcon from '@mui/icons-material/Home';
// import MenuBookIcon from '@mui/icons-material/MenuBook'; // Added Notes icon

// const notesPages = [
//   { title: 'Home', path: '/notes/home' },
//   { title: 'Schedule', path: '/notes/schedule' },
// ];

// const Navbar = () => {
//   const [notesAnchorEl, setNotesAnchorEl] = useState(null);

//   const handleNotesClick = (event) => {
//     setNotesAnchorEl(event.currentTarget);
//   };

//   const handleNotesClose = () => {
//     setNotesAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
//           Clinic Management Project
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Button color="primary" component={RouterLink} to="/" startIcon={<HomeIcon />} >
//             Home
//           </Button>
//           <Button color="primary" onClick={handleNotesClick} startIcon={<MenuBookIcon />} >
//             Notes
//           </Button>
//           <Menu
//             anchorEl={notesAnchorEl}
//             open={Boolean(notesAnchorEl)}
//             onClose={handleNotesClose}
//           >
//             {notesPages.map((page) => (
//               <MenuItem 
//                 key={page.path} 
//                 component={RouterLink} 
//                 to={page.path}
//                 onClick={handleNotesClose}
//               >
//                 {page.title}
//               </MenuItem>
//             ))}
//           </Menu>
//            <IconButton
//             color="primary"
//             component="a"
//             href="https://github.com/88chinu/clinicManagement"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub">
//             <GitHubIcon />
//           </IconButton> 
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Added Notes icon

const notesPages = [
  { title: 'Home', path: '/notes/home' },
  { title: 'Schedule', path: '/notes/schedule' },
];

const Navbar = () => {
  const [notesAnchorEl, setNotesAnchorEl] = useState(null);

  const handleNotesClick = (event) => {
    setNotesAnchorEl(event.currentTarget);
  };

  const handleNotesClose = () => {
    setNotesAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'primary.main', width: '100%' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: 'text.primary', fontFamily: 'Roboto Slab, serif' }}
        >
          Clinic Management Project
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
            sx={{
              textTransform: 'none',
              color: 'text.primary',
              fontFamily: 'Lato, sans-serif',
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={handleNotesClick}
            startIcon={<MenuBookIcon />}
            sx={{
              textTransform: 'none',
              color: 'text.primary',
              fontFamily: 'Lato, sans-serif',
            }}
          >
            Notes
          </Button>
          <Menu
            anchorEl={notesAnchorEl}
            open={Boolean(notesAnchorEl)}
            onClose={handleNotesClose}
          >
            {notesPages.map((page) => (
              <MenuItem
                key={page.path}
                component={RouterLink}
                to={page.path}
                onClick={handleNotesClose}
                sx={{ color: 'text.primary', fontFamily: 'Lato, sans-serif' }}
              >
                {page.title}
              </MenuItem>
            ))}
          </Menu>
          <IconButton
            component="a"
            href="https://github.com/88chinu/clinicManagement"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'text.primary',
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
