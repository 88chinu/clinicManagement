// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Typography, Grid, Button, Container, CircularProgress, Box } from '@mui/material';
// import Notification from './Notification';

// import BookCard from './BookCard';

// const API_URL = process.env.REACT_APP_API_URL;
// console.log(API_URL)


// const PatientDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [patient, setPatient] = useState(null);
//   const [showNotification, setShowNotification] = useState(null);


//   useEffect(() => {
//     const fetchPatient = async () => {
//       try {
//         console.log('Fetching patient data...');
//         const response = await axios.get(`${API_URL}/${id}`);
//         console.log('Patient data:', response.data);
//         setPatient(response.data);
//       } catch (error) {
//         console.error('Error fetching patient:', error.response || error.message);
//         setShowNotification({ type: 'error', text: 'Error loading patient details.' });
//       }
//     };
//     fetchPatient();
//     // axios
//     // .get(`/api/clinics`)
//     // .then((res) => {
//     //   setData(res.data)
//     //   setLoading(false)
//     // })
//     // .catch((err) => {
//     //   console.log('Error from ShowBookList ->', err);
//     //   setLoading(false); // Set loading to false even on error
//     // });
//   }, []);

//   const deletePatient = async () => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       setShowNotification({ type: 'success', text: 'Patient deleted successfully!' });
//       setTimeout(() => navigate('/'), 1000); // Navigate after showing notification for 3 seconds
//     } catch (error) {
//       console.error('Error deleting patient:', error);
//       setShowNotification({ type: 'error', text: 'Error deleting patient.' });
//     }
//   };

//   const handleCloseNotification = () => {
//     setShowNotification(null);
//   };

//   if (!patient && !showNotification) {
//     return <div className="box-container">Loading...</div>;
//   }

//   if (!patient && showNotification) {
//     return <div className="box-container">Error loading patient details.</div>;
//   }

//    return (
//     <div className="box-container"><h2>Name: {patient.Patient_name}</h2>

//       <div className="patient-info"><p>Age: {patient.age}</p>

//       <div className="patient-info"><p>Gender: {patient.gender}</p></div> </div>

//       <div className="patient-info"><p>Contact info: {patient.contact_number}</p></div>

//       <div className="patient-info"><p>Admit Date: {patient.admit_date}</p></div>

//       <div className="patient-info"><p>Previous Admit: {patient.previous_admit}</p></div>

//       <div className="patient-actions">
//         <Link to={`/edit/${patient.id}`} className="btn btn-update">Edit</Link>

//         <button onClick={deletePatient} className="btn btn-delete">Delete</button>

//         <Link to="/list" className="btn btn-back">Back to Home</Link>
//       </div>
//       {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
//     </div>
// //     <Container maxWidth= "lg" sx= {{ py : 1}}>

// //       <Typography variant='h3' component="h1" color= "primary" gutterBottom>
// //         PatientList
// //       </Typography>

// //       <Button
// //         component={Link}
// //         to="/add"
// //         color="primary"
// //         variant="contained"
// //         sx={{ mb: 4 }}
// //       >
// //         Add New Patient
// //       </Button>

// //       {loading ? (
// //         // Show a loading spinner while data is being fetched
// //         <Box display="flex" justifyContent="center" mt={4}>
// //           <CircularProgress />
// //         </Box>
        
// //       ) : (
// //         <Grid container spacing={3}>
// //           {patients.length === 0 ? (
// //             <Grid item xs={12}>
// //               <Typography variant="h6" color="text.secondary">
// //                 No patients found!
// //               </Typography>
// //             </Grid>
// //           ) : (
// //             patients.map((patient, index) => (
// //               <Grid item xs={12} sm={6} md={4} key={index}>
// //                 <BookCard patient={patient} />
// //               </Grid>
// //             ))
// //           )}
// //         </Grid>
// //       )}
// //     </Container>
//     );

//  };

// export default PatientDetail;