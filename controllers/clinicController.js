const ClinicModel = require('../model/clinicModel.js');  // Import clinic model

// Create a new patientinfo
exports.createAppointment = async (req, res) => {
    try {
        let newClinic = new ClinicModel({
            Patient_name: req.body.name, age: req.body.age, gender:req.body.gender, 
            contact_number:req.body.contact_number, admit_Date: req.body.admit_Date,
            medical_history:req.body.medical_history
        });
        newClinic = await newClinic.save(); // Save the new patientinfo to the database
        res.send(newClinic); // Send the saved patientinfo as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Get all patientinfo
exports.getAllPatient = async (req, res) => {
    try {
        const allPatient = await ClinicModel.find(); // Get all patientinfo from the database
        res.send(allPatient); // Send all patientinfo as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something  wrong
    }
};

// Get a patientinfo by ID
exports.getPatientById = async (req, res) => {
    try {
        const patientById = await ClinicModel.findById(req.params.id); // Find room by ID
        if (!patientById) return res.status(404).send('Patient not found in database'); // If patientinfo is not found, return 404
        res.send(patientById); // Send the patientinfo as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Update a patientinfo by ID
exports.updatePatient = async (req, res) => {
    try {
        const updatedPatient = await ClinicModel.findByIdAndUpdate(req.params.id, {
            Patient_name: req.body.name, age: req.body.age, gender:req.body.gender, 
            contact_number:req.body.contact_number, admit_Date: req.body.admit_Date,
            medical_history:req.body.medical_history
        }, { new: true }); // Return the updated patientinfo

        if (!updatedPatient) return res.status(404).send('Patient not found in database'); // If patientinfo is not found, return 404
        res.send(updatedPatient); // Send the updated patientinfo as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Delete a patientinfo by ID
exports.deletePatient = async (req, res) => {
    try {
        const patientById = await ClinicModel.findByIdAndDelete(req.params.id); // Find patientinfo by ID and delete it
        if (!patientById) return res.status(404).send('Patient not found in database'); // If patientinfo is not found, return 404
        res.send("Patient deleted successfully"); // Send success message
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};