const mongoose = require ('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://clinic_admin:clinic_admin@cluster0.5l48z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB
