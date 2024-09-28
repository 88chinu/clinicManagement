const ClinicModel = require('../model/clinicModel');

exports.createClinic = async(req,res) => {
    try {
        let singleClinic = new clickModel({ name: req.body.name, 
            age: req.body.age, admit_Date: req.body.admit_Date });

        singleClinic = await singleClinic.save();
        res.send(singleClinic);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

exports.getAllPasentes = async (req, res) => {
    try {
        const allPasentes = await ClinicModel.find();
        res.send(allPasentes);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

exports.getPasentById = async (req, res) => {
    try {
        const PasentById = await ClinicModel.findById(req.params.id);
        if (!pasentById) return res.status(404).send('No Pasent found in database');
        res.send(pasentById);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

// exports.updateBook = async (req, res) => {
//     try {
//         const bookById = await BookModel.findByIdAndUpdate(req.params.id, { title: req.body.title, author: req.body.author }, { new: true });
//         if (!bookById) return res.status(404).send('Book not found in database');
//         res.send(bookById);
//         console.log("Book updated successfully");
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// }

// exports.deleteBook = async (req, res) => {
//     try {
//         const bookById = await BookModel.findByIdAndDelete(req.params.id);
//         if (!bookById) return res.status(404).send('Book not found in database');
//         res.status(204).send();
//         res.send("Book deleted successfully");
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// }