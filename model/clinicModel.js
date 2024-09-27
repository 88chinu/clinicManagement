import mongoose, { model } from 'mongoose'

const ClinicSchema = new mongoose.Schema({
      name:{
          type: String,
          required: true,
          unique: true
      },
      place:{
          type: String, //add require to make it a mandatory parameter
          required: true //add unique constrain to prevent duplicates
      }
  })

  const Clinic = mongoose.model('Clinic', ClinicSchema);
  export default Clinic;

// model.exports = Clinic = mongoose.model('clinic', ClinicSchema);