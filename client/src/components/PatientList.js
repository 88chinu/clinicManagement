import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Typography, Grid, Button, Container, CircularProgress, Box } from '@mui/material';

import PatientCard from './PatientCard';

const URL = process.env.REACT_APP_API_URL; // Access environment variable

// console.log(process.env.REACT_APP_API_URL)

function PatientList (){
  const[patients, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${URL}/api/clinics`)
      .then((res) => {
        console.log("Fetched patients:", res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching patients:", err);
        setLoading(false);
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
                <PatientCard patient={patient} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
   );

};

export default PatientList;