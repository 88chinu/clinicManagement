import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const URL = process.env.REACT_APP_API_URL; // Access environment variable

const PatientDetails = () => {
  const [patient, setPatient] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`${URL}/api/clinics/${id}`)
      .then((res) => {
        setPatient(res.data);
      })
      .catch((err) => {
        console.error('Error fetching patient details:', err.response || err.message || err);
        enqueueSnackbar('Error fetching patient details!', { variant: 'error' });
      });
  }, [id, enqueueSnackbar]);

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`${URL}/api/clinics/${id}`)
      .then(() => {
        enqueueSnackbar('Patient deleted successfully!', { variant: 'success' });
        navigate('/list');
      })
      .catch((err) => {
        console.error('Error deleting patient:', err);
        enqueueSnackbar('Failed to delete the patient. Please try again.', { variant: 'error' });
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={
                  patient.imageUrl ||
                  'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg'
                }
                alt={patient.Patient_name || 'Default Patient Image'}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {patient.Patient_name || 'Unknown Patient'}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" flexDirection="column">
              {/* <Typography variant="body1" paragraph>
                {patient.description || 'No description provided.'}
              </Typography> */}
              <Typography variant="body1">ID: {patient._id}</Typography>
              <Typography variant="body1">Name: {patient.Patient_name}</Typography>
              <Typography variant="body1">Age: {patient.age}</Typography>
              <Typography variant="body1">Gender: {patient.gender}</Typography>
              <Typography variant="body1">Contact: {patient.contact_number}</Typography>
              <Typography variant="body1">
                 Date: {patient.admit_Date ? new Date(patient.admit_Date).toLocaleDateString() : 'N/A'}
              </Typography>
              <Typography variant="body1">
                 Previous Admit: {patient.previous_admit === true ? 'Yes' : patient.previous_admit === false ? 'No' : 'N/A'}
              </Typography>

            </Box>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/list"
            variant="outlined"
          >
            Back to Patients List
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit/${patient._id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Edit Patient
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Patient
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this patient data? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PatientDetails;