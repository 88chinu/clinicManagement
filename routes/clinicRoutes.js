const express = require('express');
const router = express.Router();
const clinicController = require('../controllers/clinicController'); // Ensure this path is correct

// Define the routes
router.post('/clinics', clinicController.createClinic);
router.get('/clinics', clinicController.getAllPasentes);
router.get('/clinics/:id', clinicController.getPasentById);
// router.put('/clinics/:id', clinicController.updateBook);
// router.delete('/clinics/:id', clinicController.deleteBook);

module.exports = router; // Use router instead of clinicRoutes
