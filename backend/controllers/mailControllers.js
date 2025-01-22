import Mail from "../models/mailModel.js"
import mailManager from "../utils/mailManager.js"

// compose mail
export const sendmails = async (req, res) => {
    try {
        const { mails, mailSubject, mailContent } = req.body

        if (!mails) {
            return res.status(400).json({
                status: 400,
                message: "Maii Id's are required"
            })
        }

        if (!mailSubject) {
            return res.status(400).json({
                status: 400,
                message: "Maii subject is required"
            })
        }

        if (!mailContent) {
            return res.status(400).json({
                status: 400,
                message: "Maii content is required"
            })
        }

        const newMail = new Mail({
            mails: mails,
            mailSubject: mailSubject,
            mailContent: mailContent
        })

        if (newMail) {
            mailManager(newMail)
            return res.status(201).json({
                status: 201,
                mails: newMail.mails,
                mailSubject: newMail.mailSubject,
                mailContent: newMail.mailContent
            })
        } else {
            return res.status(400).json({
                status: 400,
                message: "No mail found!"
            })
        }
    } catch (error) {
        console.error("Error: something went wrong to sent the mail, ", error.message)
        return res.status(500).json({
            status: 500,
            message: "Internal server error",
            error: error.message
        })
    }
}