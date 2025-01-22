import express from "express";
import { sendmails } from "../../controllers/mailControllers.js";

const mailRoutes = express.Router()

// send mail
mailRoutes.post("/sendmail", sendmails)

export default mailRoutes