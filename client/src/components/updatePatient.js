import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdatePatient(props) {
  const [patient, setPatient] = useState({
    Patient_name: '',
    age: '',
    gender: '',
    contact_number: '',
    admit_Date: '',
    previous_admit: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/patients/${id}`)
      .then((res) => {
        setPatient({
          Patient_name: res.data.Patient_name,
          age: res.data.age,
          gender: res.data.gender,
          contact_number: res.data.contact_number,
          admit_Date: res.data.admit_Date,
          previous_admit: res.data.previous_admit,
        });
      })
      .catch((err) => {
        console.log('Error from UpdatePatient GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      Patient_name: patient.Patient_name,
    age: patient.age,
    gender: patient.gender,
    contact_number: patient.contact_number,
    admit_Date: patient.admit_Date,
    previous_admit: patient.previous_admit
    };

    axios
      .put(`/patients/${id}`, data)
      .then((res) => {
        navigate(`/edit/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdatePatient PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className='UpdatePatient'>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Patients List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Patient</h1>
            <p className='lead text-center'>Update Patient's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
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
                  <option value="True">Yes</option>
                  <option value="False">No</option>
                </select>
              </div>
              <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update patient
            </button>
            <br /> <br />
          </form>
        </div>
      </div>

    </div>
  );
}

export default UpdatePatient;