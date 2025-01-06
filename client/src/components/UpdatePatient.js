import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack"; // Import the useSnackbar hook

const URL = process.env.REACT_APP_API_URL; // Access environment variable

function UpdatePatient() {
  const [patient, setPatient] = useState({
    Patient_name: "",
    age: "",
    gender: "",
    contact_number: "",
    admit_Date: "",
    previous_admit: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); // Initialize the notification hook


  useEffect(() => {
    axios
      .get(`${URL}/api/clinics/${id}`)
      .then((res) => {
        setPatient(res.data);
      })
      .catch((err) => {
        console.error("Error from UpdatePatient GET request", err);
        enqueueSnackbar("Failed to fetch patient details.", { variant: "error" });
      });
  }, [id, enqueueSnackbar]); // Remove 'URL' from the dependency array because it is a stable constant.
  // React expects 'URL' to be in the dependency array, but since it doesn't change, it can be safely excluded.

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${URL}/api/clinics/${id}`, patient)
      .then(() => {
        enqueueSnackbar("Patient updated successfully!", { variant: "success" });
        navigate(`/detail/${id}`);
      })
      .catch((err) => {
        console.error("Error in UpdatePatient PUT request", err);
        enqueueSnackbar("Failed to update patient details. Please try again.", { variant: "error" });
      });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={2}>
        <Typography variant="h4" align="center" gutterBottom>
          Edit Patient
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Update Patient's Information
        </Typography>
      </Box>

      <Box mb={2}>
        <Button
          component={Link}
          to="/list"
          variant="outlined"
          color="secondary"
          fullWidth
        >
          Show Patients List
        </Button>
      </Box>

      <form noValidate onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Patient Name"
              name="Patient_name"
              value={patient.Patient_name}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Age"
              type="number"
              name="age"
              value={patient.age}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Gender"
              name="gender"
              value={patient.gender}
              onChange={onChange}
              variant="outlined"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contact Number"
              name="contact_number"
              value={patient.contact_number}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Admit Date"
              type="date"
              name="admit_Date"
              value={patient.admit_Date}
              onChange={onChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Previous Admit"
              name="previous_admit"
              value={patient.previous_admit}
              onChange={onChange}
              variant="outlined"
            >
              <MenuItem value="true">Yes</MenuItem>
              <MenuItem value="false">No</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Update Patient
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default UpdatePatient;
