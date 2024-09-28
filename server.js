const express = require ( "express")
const connectDB = require ("./config/db.js")
const clinicRoutes = require ( "./routes/clinicRoutes.js")

const app = express()
const PORT = process.env.PORT || 7000

connectDB()

app.use(express.json)

app.get("/", (req, res) => {
    res.send("Well-come to my HOME page of Clinic_Management");
});

app.use('/api',clinicRoutes)

app.listen(PORT, () => {
    console.log(`My web process at http://localhost:${PORT}`)
})