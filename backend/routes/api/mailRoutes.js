import express from "express";
import { sendmails, clearstorage } from "../../controllers/mailControllers.js";

const mailRoutes = express.Router()

// send mail
mailRoutes.post("/sendmail", sendmails)

// Delete mail attachments saved in the storage folder
mailRoutes.get("/clearstorage", clearstorage)

export default mailRoutes