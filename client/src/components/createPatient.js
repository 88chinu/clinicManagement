import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Use the API URL from the environment variables
// const API_URL = process.env.REACT_APP_API_URL;

const CreatePatient = (props) => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    Patient_name: '',
    age: '',
    gender: '',
    contact_number: '',
    admit_Date: '',
    previous_admit: '',
  });

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(patient)
    axios
    .post("https://7000-88chinu-clinicmanagemen-wpi7z907wk4.ws-us117.gitpod.io/api/clinics", patient)
      .then((res) => {
        setPatient({
          Patient_name: '',
    age: '',
    gender: '',
    contact_number: '',
    admit_Date: '',
    previous_admit: '',
        });
        toast.success('Patient added successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
          transition: Slide,
        });
        // setTimeout(() => {
        //   navigate('/');
        // }, 5000);
      })
      .catch((err) => {
        console.error('Error in creating patient:', err);
        toast.error('Something went wrong, try again!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
          transition: Slide,
        });
      });
  };

  return (
    <div className="CreatePatient">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Patient List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Patient</h1>
            <p className="lead text-center">Create new patient record</p>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Patient Name"
                  name="Patient_name"
                  className="form-control"
                  value={patient.Patient_name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  className="form-control"
                  value={patient.age}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <select
                  name="gender"
                  className="form-control"
                  value={patient.gender}
                  onChange={onChange}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contact_number"
                  className="form-control"
                  value={patient.contact_number}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="date"
                  placeholder="Admit Date"
                  name="admit_Date"
                  className="form-control"
                  value={patient.admit_Date}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
              <select
                  name="previous_admit"
                  className="form-control"
                  value={patient.previous_admit}
                  onChange={onChange}
                >
                  <option value="" disabled>
                    Previous Admit
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <br />
              <Button
  type="submit"
  variant="outlined"
  color="secondary"
  fullWidth
  sx={{ mt: 4 }}
>
  Submit
</Button>
<button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>
                  Cancel
                </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePatient;
