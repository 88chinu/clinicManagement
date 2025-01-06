import React from 'react';
import { Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const PatientCard = ({ patient }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        borderRadius: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker background
        boxShadow: 3,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
        color: '#fff', // White text for better contrast
      }}
    >
      <Link to={`/detail/${patient._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="200"
          image={
            patient.imageUrl ||
            'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg'
          }
          alt={patient.Patient_name || 'Default Patient'}
          sx={{ objectFit: 'cover', width: '100%' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="div" gutterBottom>
            Name: {patient.Patient_name || 'Unknown'}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Age: {patient.age || 'N/A'}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            Gender: {patient.gender || 'N/A'}
          </Typography>
        </CardContent>
      </Link>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          component={Link}
          to={`/detail/${patient._id}`}
          variant="contained"
          color="primary"
          size="small"
          fullWidth
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default PatientCard;
