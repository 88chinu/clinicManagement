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
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-binary', 'Other'],
        required: true
    },
    contact_number: {
        type: String,
        required: true
    },
    admit_Date: {
        type: Date,
        require: true
    },
    medical_history: {
        type: String,
        default: []
    }
});

const Clinic = mongoose.model('Clinic', clinicSchema);
module.exports = Clinic; // Corrected here
