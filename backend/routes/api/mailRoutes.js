import express from "express";
import { composeMails } from "../../controllers/mailControllers.js";

const mailRoutes = express.Router()

// user signup
mailRoutes.post("/composemail", composeMails)

// send mail
// mailRoutes.post("/sendmail")

export default mailRoutes