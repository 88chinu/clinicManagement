const ClinicModel = require('../model/clinicModel.js');  // Import Room model

// Create a new Room
exports.createAppointment = async (req, res) => {
    try {
        let newClinic = new ClinicModel({
            Patient_name: req.body.name, age: req.body.age, admit_Date: req.body.admit_Date
        });
        newClinic = await newClinic.save(); // Save the new room to the database
        res.send(newClinic); // Send the saved room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Get all rooms
exports.getAllPatient = async (req, res) => {
    try {
        const allPatient = await ClinicModel.find(); // Get all rooms from the database
        res.send(allPatient); // Send all rooms as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something  wrong
    }
};

// Get a room by ID
exports.getPatientById = async (req, res) => {
    try {
        const patientById = await ClinicModel.findById(req.params.id); // Find room by ID
        if (!patientById) return res.status(404).send('Patient not found in database'); // If room is not found, return 404
        res.send(patientById); // Send the room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Update a room by ID
exports.updatePatient = async (req, res) => {
    try {
        const updatedPatient = await ClinicModel.findByIdAndUpdate(req.params.id, {
            Patient_name: req.body.name, age: req.body.age, admit_Date: req.body.admit_Date
        }, { new: true }); // Return the updated room

        if (!updatedPatient) return res.status(404).send('Patient not found in database'); // If room is not found, return 404
        res.send(updatedPatient); // Send the updated room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Delete a room by ID
exports.deletePatient = async (req, res) => {
    try {
        const patientById = await ClinicModel.findByIdAndDelete(req.params.id); // Find room by ID and delete it
        if (!patientById) return res.status(404).send('Patient not found in database'); // If room is not found, return 404
        res.send("Patient deleted successfully"); // Send success message
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};