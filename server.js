import express from "express"
import connectDB from "./config/db.js"
import router from "./routes/clinicRoutes.js"

const app = express()
const PORT = process.env.PORT || 7000

connectDB()

app.use(express.json)

app.get("/", (req, res) => {
    res.send("Well-come to my HOME page of Clinic_Management");
});

app.use('/api',router)

app.listen(PORT, () => {
    console.log(`My web process at http://localhost:${PORT}`)
})