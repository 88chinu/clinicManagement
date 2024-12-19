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

  useEffect(() => {
    axios
      .get(
        `https://7000-88chinu-clinicmanagemen-wpi7z907wk4.ws-us117.gitpod.io/api/clinics/${id}`
      )
      .then((res) => {
        setPatient(res.data);
      })
      .catch((err) => {
        console.error("Error from UpdatePatient GET request", err);
      });
  }, [id]);

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://7000-88chinu-clinicmanagemen-wpi7z907wk4.ws-us117.gitpod.io/api/clinics/${id}`,
        patient
      )
      .then(() => {
        // Navigate to the details page after a successful update
        navigate(`/detail/${id}`);
      })
      .catch((err) => {
        console.error("Error in UpdatePatient PUT request", err);
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
