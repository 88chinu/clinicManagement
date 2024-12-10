import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Typography, Grid, Button, Container, CircularProgress, Box } from '@mui/material';

import BookCard from './BookCard';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

function PatientDetail (){
  const[patients, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
    .get(`/api/clinics`)
    .then((res) => {
      setData(res.data)
      setLoading(false)
    })
    .catch((err) => {
      console.log('Error from ShowBookList ->', err);
      setLoading(false); // Set loading to false even on error
    });
  }, []);

   return (
    <Container maxWidth= "lg" sx= {{ py : 1}}>

      <Typography variant='h3' component="h1" color= "primary" gutterBottom>
        PatientList
      </Typography>

      <Button
        component={Link}
        to="/add"
        color="primary"
        variant="contained"
        sx={{ mb: 4 }}
      >
        Add New Patient
      </Button>

      {loading ? (
        // Show a loading spinner while data is being fetched
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
        
      ) : (
        <Grid container spacing={3}>
          {patients.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" color="text.secondary">
                No patients found!
              </Typography>
            </Grid>
          ) : (
            patients.map((patient, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <BookCard patient={patient} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
   );

};

export default PatientDetail;