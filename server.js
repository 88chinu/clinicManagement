const express = require('express');
const connectDB = require('./config/db');
const clinicRoutes = require('./routes/clinicRoutes'); // Import patientinfo routes

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for home page
app.get("/", (req, res) => {
    res.send("Well-come to my HOME page of Clinic_Management");
});

// Use patientinfo routes with prefix '/api'
app.use('/api', clinicRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});