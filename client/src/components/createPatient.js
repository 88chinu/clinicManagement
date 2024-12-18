// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';
// import { Slide, ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// // Use the API URL from the environment variables
// // const API_URL = process.env.REACT_APP_API_URL;

// const CreatePatient = (props) => {
//   const navigate = useNavigate();
//   const [patient, setPatient] = useState({
//     Patient_name: '',
//     age: '',
//     gender: '',
//     contact_number: '',
//     admit_Date: '',
//     previous_admit: '',
//   });

//   const onChange = (e) => {
//     setPatient({ ...patient, [e.target.name]: e.target.value });
//   };
  

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(patient)
//     axios
//     .post("https://7000-88chinu-clinicmanagemen-wpi7z907wk4.ws-us117.gitpod.io/api/clinics", patient)
//       .then((res) => {
//         setPatient({
//           Patient_name: '',
//     age: '',
//     gender: '',
//     contact_number: '',
//     admit_Date: '',
//     previous_admit: '',
//         });
//         toast.success('Patient added successfully!', {
//           position: 'top-right',
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: 'dark',
//           transition: Slide,
//         });
//         // setTimeout(() => {
//         //   navigate('/');
//         // }, 5000);
//       })
//       .catch((err) => {
//         console.error('Error in creating patient:', err);
//         toast.error('Something went wrong, try again!', {
//           position: 'top-right',
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: 'dark',
//           transition: Slide,
//         });
//       });
//   };

//   return (
//     <div className="CreatePatient">
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//         transition={Slide}
//       />

//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 m-auto">
//             <br />
//             <Link to="/list" className="btn btn-outline-warning float-left">
//               Show Patient List
//             </Link>
//           </div>
//           <div className="col-md-8 m-auto">
//             <h1 className="display-4 text-center">Add Patient</h1>
//             <p className="lead text-center">Create new patient record</p>

//             <form noValidate onSubmit={onSubmit}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="Patient Name"
//                   name="Patient_name"
//                   className="form-control"
//                   value={patient.Patient_name}
//                   onChange={onChange}
//                 />
//               </div>
//               <br />

//               <div className="form-group">
//                 <input
//                   type="number"
//                   placeholder="Age"
//                   name="age"
//                   className="form-control"
//                   value={patient.age}
//                   onChange={onChange}
//                 />
//               </div>
//               <br />

//               <div className="form-group">
//                 <select
//                   name="gender"
//                   className="form-control"
//                   value={patient.gender}
//                   onChange={onChange}
//                 >
//                   <option value="" disabled>
//                     Select Gender
//                   </option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               <br />

//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="Contact Number"
//                   name="contact_number"
//                   className="form-control"
//                   value={patient.contact_number}
//                   onChange={onChange}
//                 />
//               </div>
//               <br />

//               <div className="form-group">
//                 <input
//                   type="date"
//                   placeholder="Admit Date"
//                   name="admit_Date"
//                   className="form-control"
//                   value={patient.admit_Date}
//                   onChange={onChange}
//                 />
//               </div>
//               <br />

//               <div className="form-group">
//               <select
//                   name="previous_admit"
//                   className="form-control"
//                   value={patient.previous_admit}
//                   onChange={onChange}
//                 >
//                   <option value="" disabled>
//                     Previous Admit
//                   </option>
//                   <option value="true">Yes</option>
//                   <option value="false">No</option>
//                 </select>
//               </div>
//               <br />
//               <Button
//   type="submit"
//   variant="outlined"
//   color="secondary"
//   fullWidth
//   sx={{ mt: 4 }}
// >
//   Submit
// </Button>
// <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>
//                   Cancel
//                 </button>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePatient;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, MenuItem, Box, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const CreatePatient = (props) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [patient, setPatient] = useState({
    Patient_name: '',
    age: '',
    gender: '',
    contact_number: '',
    admit_Date: '',
    previous_admit: '',
  });

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://7000-88chinu-clinicmanagemen-wpi7z907wk4.ws-us117.gitpod.io/api/clinics", patient)
      .then(() => {
        setPatient({
          Patient_name: '',
          age: '',
          gender: '',
          contact_number: '',
          admit_Date: '',
          previous_admit: '',
        });
        enqueueSnackbar('Patient added successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        console.error('Error in creating patient:', err);
        enqueueSnackbar('Something went wrong, try again!', { variant: 'error' });
      });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3, mt: 5, bgcolor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Add Patient
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
        Create a new patient record
      </Typography>

      <form noValidate onSubmit={onSubmit}>
        <TextField
          fullWidth
          label="Patient Name"
          name="Patient_name"
          value={patient.Patient_name}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Age"
          name="age"
          value={patient.age}
          onChange={onChange}
          type="number"
          variant="outlined"
          margin="normal"
        />

        <TextField
          select
          fullWidth
          label="Gender"
          name="gender"
          value={patient.gender}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        >
          <MenuItem value="" disabled>
            Select Gender
          </MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Contact Number"
          name="contact_number"
          value={patient.contact_number}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Admit Date"
          name="admit_Date"
          value={patient.admit_Date}
          onChange={onChange}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="normal"
        />

        <TextField
          select
          fullWidth
          label="Previous Admit"
          name="previous_admit"
          value={patient.previous_admit}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        >
          <MenuItem value="" disabled>
            Previous Admit
          </MenuItem>
          <MenuItem value="true">Yes</MenuItem>
          <MenuItem value="false">No</MenuItem>
        </TextField>

        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => navigate('/list')}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreatePatient;