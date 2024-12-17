const express = require('express');
const connectDB = require('./config/db.js');
const router = require('./routes/clinicRoutes.js'); // Import clinic routes
const cors = require('cors');
const bodyParser = require("body-parser");
require("dotenv").config( { path: "./config.env" } )

const app = express();


// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Basic route for home page
app.get("/", (req, res) => {
    res.send("WELL_COME TO MY CLINIC MANAGEMENT PROJECT");
});

// Use clinic routes with prefix '/api'
app.use('/api', router);

const PORT = process.env.PORT || 7000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// Connect to MongoDB
connectDB();