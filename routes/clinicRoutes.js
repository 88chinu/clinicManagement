const express = require('express');
const router = express.Router();
const clinicController = require('../controllers/clinicController.js');

// Routes for Room CRUD operations
router.post('/clinics', clinicController.createAppointment);      // Create a new room
router.get('/clinics', clinicController.getAllPatient);      // Get all rooms
router.get('/clinics/:id', clinicController.getPatientById );  // Get a single room by ID
router.put('/clinics/:id', clinicController.updatePatient);   // Update a room by ID
router.delete('/clinics/:id', clinicController.deletePatient);// Delete a room by ID

module.exports = router;