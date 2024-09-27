import express from 'express';

const router = express.Router();

import clinics from '../model/clinicModel.js'

// GET clinic/test
// tests clinic route
router.get('/test', (req, res) => res.send('Clinic routes testing!'));

// GET /clinic
// Get all books
router.get('/clinic', (req, res) => {
    clinics.find()
      .then((books) => res.json(clinics))
      .catch((err) => res.status(404).json({ nobedfound: 'No space is available' }));
  });


// GET clinic/:id
// Get single book by id
router.get('/clinic/:id', (req, res) => {
    clinics.findById(req.params.id)
      .then((clinic) => res.json(clinic))
      .catch((err) => res.status(404).json({ nobedfound: 'No space available' }));
  });

// GET /clinic
// add/save book
router.post('/clinic', (req, res) => {
  clinics.create(req.body)
    .then((clinic) => res.json({ msg: 'patient added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add patient' }));
});


// //POST /
// router.post('/', (req, res) => {
//     const user = req.body;

//     users.push({ ...user, id: uuidv4() });

//     res.send(`${user.first_name} has been added to the Database`)
// })  

// //PATCH /:id
// router.patch('/:id', (req, res) => {
//     const { id } = req.params;
  
//     const { first_name, last_name, email} = req.body;
  
//     const user = users.find((user) => user.id === id)
  
//     if(first_name) user.first_name = first_name;
//     if(last_name) user.last_name = last_name;
//     if(email) user.email = email;
  
//     res.send(`User with the ${id} has been updated`)
  
//   });
  
// //DELET /:id
// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
  
//     users = users.filter((user) => user.id !== id)
  
//     res.send(`${id} deleted successfully from database`);
//   });

export default router