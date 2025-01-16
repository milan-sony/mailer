import express from "express"
import dotenv from "dotenv"
import routes from "./routes/index.js"
import connectDB from "./configs/db.js"

// config dot env
dotenv.config()

// creates an app express app
const app = express()

// connect with DB
connectDB()

// base URL
app.use("/", routes)

app.listen((process.env.PORT || 5000), () => {
    console.log(`\n🚀 Server listening on port: ${process.env.PORT || 5000}`)
})