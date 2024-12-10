import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Use the API URL from the environment variables
const API_URL = process.env.REACT_APP_API_URL;

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
    setPatient({ ...patient, [e.target.Patient_name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // POST request to the API with the patient data
      const response = await axios.post(`${API_URL}/patients`, {
        Patient_name: patient.Patient_name,
        age: patient.age,
        gender: patient.gender,
        contact_number: patient.contact_number,
        admit_Date: patient.admit_Date,
        previous_admit: patient.previous_admit,
      });

      const newPatientId = response.data.id;

      // Clear the form
      setPatient({
        Patient_name: '',
        age: '',
        gender: '',
        contact_number: '',
        admit_Date: '',
        previous_admit: '',
      });

      // Show success toast notification
      toast.success('Patient added successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Slide,
      });

      // Navigate to the patient's detail page
      setTimeout(() => {
        navigate(`/detail/${newPatientId}`);
      }, 5000);
    } catch (error) {
      console.error('Error adding the patient:', error);
      toast.error('Failed to add the patient. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Slide,
      });
    }
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
                <input
                  type="text"
                  placeholder="Previous Admit"
                  name="previous_admit"
                  className="form-control"
                  value={patient.previous_admit}
                  onChange={onChange}
                />
              </div>
              <br />

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePatient;
