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
        transition: 'transform 0.3s, box-shadow 0.3s',
        borderRadius: 2,
        backgroundColor: '#047a9e', // Primary theme color
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.3)',
        },
        color: '#fff', // White text for contrast
      }}
    >
      <Link
        to={`/detail/${patient._id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={
            patient.imageUrl ||
            'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg'
          }
          alt={patient.Patient_name || 'Default Patient'}
          sx={{
            objectFit: 'cover',
            width: '100%',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="div" gutterBottom>
            Name: {patient.Patient_name || 'Unknown'}
          </Typography>
          <Typography variant="subtitle1" color="#e0e0e0">
            Age: {patient.age || 'N/A'}
          </Typography>
          <Typography
            variant="body2"
            color="#e0e0e0"
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
          sx={{
            backgroundColor: '#f73079',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#e0296e',
            },
          }}
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
