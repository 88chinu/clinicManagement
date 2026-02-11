# Clinic Management System - MERN Stack Project

- A comprehensive CRUD application for managing clinic operations, built with the MERN stack (MongoDB, Express, React, Node.js) and Material UI.

### Here are some of the important links:
- The app - [https://patientmanagement-2eye.onrender.com](https://clinic-management-rphk.vercel.app/)
- The API of the app - [https://patientmanagement-2eye.onrender.com/api/patients](https://clinic-management-rphk.vercel.app/api)
- The documentation for the app - [Clinic Management Documentation](https://docs.google.com/document/d/1z5jlCUQCnseKXfEx0OPbSf-uA9YbQBDXU7vncDMGUE0/edit?tab=t.0#heading=h.kum8f7324oo)
- URL to MongoDB cluster - `mongodb+srv://<username>:<db_password><cluster_name>mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

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
    ```
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
### Step 3: Frontend Setup
  
    # Navigate to client directory
    cd client

    # Install client dependencies
    npm install

    # Start React development server
    npm run dev
  
### Step 4: Running the Application
 - Backend will run on: http://localhost:7000
 - Frontend will run on: http://localhost:3000
 - Access the application through frontend URL
   
## Project Structure
    ```
    clinicmgmt-deploy/
    ├── client/                # React frontend
    │   ├── src/
    │   │   ├── components/    # React components
    │   │   ├── container/     # Theme configuration
    │   │   └── App.js         # Main React app
    ├── config/                # Backend configuration
    ├── models/                # MongoDB models (patients, doctors, etc.)
    ├── routes/                # API routes
    └── server.js              # Express server

## API Endpoints

### Patients API
 - GET /api/patients - Get all patients
 - GET /api/patients/:id - Get single patient details
 - POST /api/patients - Add new patient
 - PUT /api/patients/:id - Update patient information
 - DELETE /api/patients/:id - Delete patient record
   
### Doctors API
 - GET /api/doctors - Get all doctors
 - GET /api/doctors/:id - Get single doctor details
 - POST /api/doctors - Add new doctor
 - PUT /api/doctors/:id - Update doctor information
 - DELETE /api/doctors/:id - Delete doctor record
   
### Deployment
 The application is deployed on Render:

- Frontend: [https://clinicmanagement-hcgs.onrender.com](https://clinicmanagement-hcgs.onrender.com) 
- Backend: [https://clinic-management-rphk.vercel.app/](https://clinic-management-rphk.vercel.app/)
- API Endpoint: [https://clinic-management-rphk.vercel.app/api/patients](https://clinic-management-rphk.vercel.app//api/patients)
  
## Common Issues & Troubleshooting
### MongoDB Connection Issues

 - Check MongoDB URL in config.env
 - Verify IP whitelist in MongoDB Atlas
 - Ensure proper credentials
 ### Port Already in Use

 - Change PORT in config.env
 - Kill process using the port
### Dependencies Issues

 - Delete node_modules folder
 - Run npm install again
 - Clear npm cache if needed
   
### Educational Notes
##### This project helps learn:

- Full-stack development with MERN
- REST API development
- Database operations
- Frontend state management
- Routing in React
- Material UI implementation
- Data export handling
- QR code generation
- Search and filter implementation
- Responsive design principles

## Future Enhancements Possible
- User authentication (Admin, Doctor, Patient roles)
- Appointment scheduling system
- Patient medical records management
- Advanced analytics for clinic performance
- Multi-language support
  
## Contributing
- Feel free to fork the repository and submit pull requests.

## License
- This project is open source and available under the MIT License.

- You can copy this entire content into a `README.md` file in your repository to document the Clinic Management System. Let me know if you need any changes!
