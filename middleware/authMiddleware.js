// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

        if (!token) return res.status(401).json({ message: 'Not authorized, no token' });

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add decoded token data to request

        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

module.exports = { protect };
