const express = require('express');
const connectDB = require('./config/db.js');
const router = require('./routes/clinicRoutes.js'); // Import clinic routes
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');
require("dotenv").config( { path: "./config.env" } )


// Connect to MongoDB
connectDB();

const app = express();


// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Basic route for home page
app.get("/home", (req, res) => {
     res.send("WELL_COME TO MY CLINIC MANAGEMENT PROJECT");
});

// Use clinic routes with prefix '/api'
app.use('/api', router);

const PORT = process.env.PORT || 7000;


// SERVE STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
