import mailManager from "../utils/mailManager.js"
import multer from 'multer'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Setup multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => { // `cb` stands for callback
        cb(null, 'storage/') // where to store the files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)) // gives the file a unique name
    }
})

const upload = multer({ storage: storage })

// Compose mail
export const sendmails = async (req, res) => {
    // Handle file upload before continuing with the rest of the logic
    upload.array('attachments')(req, res, async (error) => {  // upload.array('attachments'): This line tells multer to handle multiple file uploads with the field name attachments from the form data. It is called with the req (request) and res (response) objects, and any errors that occur during the file upload process will be passed to the callback function
        if (error) {
            return res.status(400).json({
                status: 400,
                message: "Error uploading files",
                error: error.message
            })
        }

        try {
            const { mails, mailSubject, mailContent } = req.body

            // Validate required fields
            if (!mails) {
                return res.status(400).json({
                    status: 400,
                    message: "Mail Id's are required"
                })
            }

            if (!mailSubject) {
                return res.status(400).json({
                    status: 400,
                    message: "Mail subject is required"
                })
            }

            if (!mailContent) {
                return res.status(400).json({
                    status: 400,
                    message: "Mail content is required"
                })
            }

            const newMail = {
                "mails": mails,
                "mailSubject": mailSubject,
                "mailContent": mailContent,
                "attachments": req.files
            }

            if (newMail) {
                mailManager(newMail, res)
            } else {
                return res.status(400).json({
                    status: 400,
                    message: "No mail found!"
                })
            }

        } catch (error) {
            console.error("Error: something went wrong while sending the mail,", error.message)
            return res.status(500).json({
                status: 500,
                message: "Internal server error",
                error: error.message
            })
        }
    })
}

// Delete all the files saved in the storage folder
export const clearstorage = async (req, res) => {
    try {
        const directory = path.join(__dirname, "../storage")

        // Read the contents of the directory
        const files = await fs.readdir(directory)

        // Loop through the files and delete them
        for (const file of files) {

            if (file === ".gitkeep") {
                continue // Continue, skips to the next iteration
            }

            await fs.unlink(path.join(directory, file))
        }

        return res.status(200).json({
            status: 200,
            message: "Files deleted successfully"
        })

    } catch (error) {
        console.error("Error deleting files: ", error.message)
        return res.status(500).json({
            status: 500,
            message: "Internal server error",
            error: error.message
        })
    }
}
