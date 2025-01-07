// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Routes for authentication
router.post('/register', authController.registerUser); // Register a new user
router.post('/login', authController.loginUser); // Login an existing user
router.get('/profile', authController.getUserProfile); // Get user profile (protected route)

module.exports = router;
