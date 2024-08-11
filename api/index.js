import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express()
dotenv.config()

const PORT = process.env.PORT || 7000
const MONGOURL = process.env.MONGODB_URL

mongoose.connect(MONGOURL).then(() => {
    console.log("Connected")
    app.listen(PORT, () => {
        console.log(`Running on Port ${PORT}`)
    })
})
.catch((error) => console.log(error))

const AppSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    windows: String,
    macOS: String,
    linux_deb: String,
    linuxtar: String,
    linuxs: String,
    apple_ios: String,
    android: String,
    logo: String,
    downloads: String,
})

const Appsmodel = mongoose.model("Apps", AppSchema)

app.get("/Apps", async (req, res) => {
    try {
        const AppsData = await Appsmodel.find();
        res.json(AppsData);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

