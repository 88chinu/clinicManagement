const express = require('express');
const router = express.Router();
const clinicController = require('../controllers/clinicController.js');

// Routes for clinics CRUD operations
router.post('/clinics', clinicController.createAppointment);      // Create a new patientinfo
router.get('/clinics', clinicController.getAllPatient);      // Get all patientinfo
router.get('/clinics/:id', clinicController.getPatientById );  // Get a single patientinfo by ID
router.put('/clinics/:id', clinicController.updatePatient);   // Update a patientinfo by ID
router.delete('/clinics/:id', clinicController.deletePatient);// Delete a patientinfo by ID

module.exports = router;