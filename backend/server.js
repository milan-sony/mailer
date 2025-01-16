import express from "express"
import dotenv from "dotenv"
import routes from "./routes/index.js"
import connectDB from "./configs/db.js"
import bodyParser from "body-parser"

// config dot env
dotenv.config()

// creates an app express app
const app = express()

// body parser
app.use(bodyParser.json());

// connect with DB
connectDB()

// base URL
app.use("/", routes)

app.listen((process.env.PORT || 5000), () => {
    console.log(`\n🚀 Server listening on port: ${process.env.PORT || 5000}`)
})