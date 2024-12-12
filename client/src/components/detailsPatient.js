import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const DetailsPatient = () => {
  const [patient, setPatient] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`/api/Patients/${id}`)
      .then((res) => {
        setPatient(res.data);
      })
      .catch((err) => {
        console.log('Error from PatientsDetails');
      });  
  }, [id]);
  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`/api/Patients/${id}`)
      .then((res) => {
        navigate('/list');
      })
      .catch((err) => {
        console.log('Error from PatientsDetails_deleteClick');
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
                image="https://images.app.goo.gl/eGZAJFou3cjHfYCR7"
                alt={patient.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {patient.id}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              by {patient.name}
            </Typography>
            <Divider sx={{ my: 2 }} />
            
            {/* Display book details one after another */}
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" paragraph>
                {patient.description}
              </Typography>
              <Typography variant="body1">ID: {patient._id}</Typography>
              <Typography variant="body1">Name: {patient.name}</Typography>
              <Typography variant="body1">Age: {patient.age}</Typography>
              <Typography variant="body1">Gender: {patient.gender}</Typography>
              <Typography variant="body1">Contact_number: {patient.co_number}</Typography>
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
            Back to person List
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
              Edit Book
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Book
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      {/* Keep the dialog unchanged */}
      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this book? This action cannot be undone.
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

export default  DetailsPatient