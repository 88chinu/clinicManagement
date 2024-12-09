import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const BookCard = ({ patient }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <img
        src= 'https://images.app.goo.gl/eGZAJFou3cjHfYCR7'
        alt='Books'
        style={{ height: 200, objectFit: 'cover', width: '100%' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" color="primary" gutterBottom>
          <Link to={`/detail/${patient._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {patient.Patient_name}
          </Link>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {patient.age}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}>
          {patient.contact_number}
        </Typography>
      </CardContent>
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

export default BookCard;