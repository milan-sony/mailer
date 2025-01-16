import express from "express"
import dotenv from "dotenv"

// config dot env
dotenv.config()

// creates an app express app
const app = express()

app.listen((process.env.PORT || 5000), () => {
    console.log(`\n🚀 Server listening on port: ${process.env.PORT || 5000}`)
})