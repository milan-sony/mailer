import express from "express";
import { composeMails, sendmails } from "../../controllers/mailControllers.js";

const mailRoutes = express.Router()

// user signup
mailRoutes.post("/composemail", composeMails)

// send mail
mailRoutes.get("/sendmail", sendmails)

export default mailRoutes