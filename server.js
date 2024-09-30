const express = require('express');
const connectDB = require('./config/db.js');
const router = require('./routes/clinicRoutes.js'); // Import clinic routes

const app = express();
const PORT = process.env.PORT || 7000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for home page
app.get("/", (req, res) => {
    res.send("WELL_COME TO MY CLINIC MANAGEMENT PROJECT");
});

// Use clinic routes with prefix '/api'
app.use('/api', router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});