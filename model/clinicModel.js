const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
        // unique: true // Uncomment if you want to enforce uniqueness on age
    },
    admit_Date: {
        type: Date,
        required: true
    }
});

const Clinic = mongoose.model('Clinic', clinicSchema);
module.exports = Clinic; // Corrected here
