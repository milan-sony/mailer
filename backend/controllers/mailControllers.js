import Mail from "../models/mailModel.js"
import mailManager from "../utils/mailManager.js"

// compose mail
export const sendmails = async (req, res) => {
    try {
        const { mails, mailSubject, mailContent } = req.body

        if (!mails) {
            return res.status(400).json({
                status: 400,
                message: "MaiiId are required"
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
                message: "mail id's not saved"
            })
        }
    } catch (error) {
        console.error("Error saving the mail id's, ", error.message)
        return res.status(500).json({
            status: 500,
            message: "Internal server error",
            error: error.message
        })
    }
}