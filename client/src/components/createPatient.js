import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notification from './Notification';

const API_URL = process.env.REACT_APP_API_URL

const PatientAdd = ({ onPatientAdd = () => { } }) => {
    const [Patient_name,setName] = useState('')
    const [age,setAge] = useState('')
    const [gender,setGender] = useState('')
    const [contact_number,setNumber] = useState('')
    const [admit_Date,setDate] = useState('')
    const [previous_admit,setAdmit] = useState('')
    const navigate = useNavigate()
    const [showNotification,setShowNotification] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!Patient_name || !age || !contact_number || !gender || !admit_Date || !previous_admit) return

        try {
            const response = await axios.post(API_URL, { Patient_name, age, gender, contact_number, admit_Date, previous_admit });
            const newPatientId = response.data.id;
            
            // Clear form fields
            setName('');
            setAge('');
            setGender('');
            setNumber('');
            setDate('');
            setAdmit('');
      
            // Show success notification
            setShowNotification({ type: 'success', text: `Patient "${response.data.name}" added successfully!` });
      
            // Navigate to the new person's detail page
            setTimeout(() => navigate(`/detail/${newPatientId}`), 1000); // Wait for 1 seconds before navigating
          } catch (error) {
            console.error('Error adding the patient:', error);
            setShowNotification({ type: 'error', text: 'Failed to add the patient. Please try again.' });
          }
        };
      
        const handleCloseNotification = () => {
          setShowNotification(null);
        };
      
      
        return (
          <div className="box-container">
            <h2>Add Patient</h2>
            <form onSubmit={handleSubmit} className="form-container">

              <input type="text" placeholder="Name"  value={Patient_name} onChange={(e) => setName(e.target.value)} required className="input-field"/>

              <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required className="input-field" />

              <select value={gender} onChange={(e) => setGender(e.target.value)} required className='input-field'>
            <option value="" disabled>Select Gender</option> {/* Prompt option */}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option> </select>

            <input type="number" placeholder="contact-number" value={contact_number} onChange={(e) => setNumber(e.target.value)} required className="input-field" />

            <input type="date" placeholder="enter admit date" value={admit_Date} onChange={(e) => setDate(e.target.value)} required className="input-field" />

            <select value={previous_admit} onChange={(e) => setAdmit(e.target.value)} required className='input-field'>
            <option value="" disabled>Select previous_admit or not</option> {/* Prompt option */}
            <option value="true">Yes</option>
            <option value="false">Never</option></select>

              <div className="button-group">
                <button type="submit" className="btn btn-add">Add Patient</button>
                <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>Cancel</button>
              </div>
            </form>
            {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
          </div>
        );
      };
      
      export default PatientAdd;