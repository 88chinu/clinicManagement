import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

const PatientEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({Patient_name: '', age: '' ,gender:'', contact_number:'',admit_Date:'', previous_admit:''});

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient:', error);
      }
    };
    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    const { Patient_name, value } = e.target;
    setPatient({ ...patient, [Patient_name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${id}`, patient);
      navigate(`/detail/${id}`); // Redirect to person details page after update
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  const handleCancel = () => {
    navigate(`/detail/${id}`); // Navigate back to the person details page
  };

  const handleHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="box-container">
      <h1>Update Patient</h1>
      <form onSubmit={handleUpdate} className="form-container">
        <input type="text" name="Patient_name" placeholder="Name" value={patient.Patient_namename} onChange={handleChange}
          required className="input-field"/>

        <input type="number" name="age" placeholder="Age" value={patient.age} onChange={handleChange}
          required className="input-field"/>
        
        <select type='select' placeholder="Select Gender" value={patient.gender} onChange={handleChange} required className='input-field'>
            <option value="" disabled>Select Gender</option> {/* Prompt option */}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option> </select>

            <input type="number" placeholder="contact-number" value={patient.contact_number} onChange={handleChange} required className="input-field" />

            <input type="date" placeholder="admit date" value={patient.admit_Date} onChange={handleChange} required className="input-field" />

            <select type='select' placeholder="Select Gender" value={patient.previous_admit} onChange={handleChange} required className='input-field'>
            <option value="" disabled>Select Previously Admit</option> {/* Prompt option */}
            <option value="true">Yes</option>
            <option value="false">Never</option> </select>


        <div className="person-actions">
          <button type="submit" className="btn btn-update">Update</button>
          <button type="button" className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
          <button type="button" className="btn btn-back" onClick={handleHome}>Back to Home</button>
        </div>
      </form>
    </div>
  );
};

export default PatientEdit;