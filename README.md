# Clinic Management System - MERN Stack Project

A comprehensive CRUD application for managing clinic operations, built with the MERN stack (MongoDB, Express, React, Node.js) and Material UI.

### Here are some of the important links:
- The app - [https://patientmanagement-2eye.onrender.com/api/patients](https://patientmanagement-2eye.onrender.com/api/patients)
- The API of the app - [https://patientmanagement-2eye.onrender.com/api(https://patientmanagement-2eye.onrender.com/api)
- The documentation for the app - [Clinic Management Documentation](https://docs.google.com/document/d/1sK7eQYVud7zc9XjCN0HwRn2SzcduuLZqFnDJKwuBko0/edit?usp=sharing)
- URL to MongoDB cluster - `mongodb+srv://<username>:<password>@cluster0.<clusterName>.mongodb.net/<DBname>?retryWrites=true&w=majority&appName=Cluster0`

## Features

### Core Features
1. **Basic CRUD Operations**
   - Add new patients
   - View patient details
   - Update patient information
   - Delete patient records
   - List all patients in a grid view

### Additional Features
1. **Export Options** (Multiple formats available)
   - PDF Export
   - Excel Export
   - CSV Export
   - Text Export

2. **QR Code Generation**
   - Generate QR codes for each patient
   - QR codes link to patient details page
   - Download individual QR codes
   - Scan to view patient details

3. **Advanced Search & Filter**
   - Search by name, ID, diagnosis, doctor assigned
   - Sort by multiple fields
   - Filter by doctor, diagnosis, or appointment date
   - Reset filter options
   - Real-time search results

4. **Dashboard Statistics**
   - Total patients count
   - Unique doctors count
   - Latest patient added
   - Quick access to all features

5. **Notes System**
   - View and manage patient notes
   - Markdown support
   - Organized documentation for treatments and progress

## Tech Stack

- **Frontend:**
  - React.js
  - Material UI
  - React Router
  - Axios

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Setup Instructions

### Prerequisites
1. Node.js installed
2. MongoDB Atlas account
3. Git installed
4. Code editor (VS Code recommended)

### Step 1: Database Setup
1. Create MongoDB Atlas account
2. Create new cluster
3. Create database user
4. Get connection string
5. Whitelist IP address

### Step 2: Backend Setup
```bash
# Clone repository
git clone https://github.com/your-repository/clinicmgmt-deploy.git
cd clinicmgmt-deploy

# Install server dependencies
npm install

# Create config.env file in the root directory and add:
ATLAS_URL=your_mongodb_connection_string
PORT=5000

# Start server
npm run server
