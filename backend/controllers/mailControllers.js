import Mail from "../models/mailModel.js"

export const composeMails = async (req, res) => {
    try {
        const { mails } = req.body

        if (!mails) {
            return res.status(400).json({
                status: 400,
                message: "MaiiId are required"
            })
        }

        const newMail = new Mail({
            mails: mails
        })

        if (newMail) {
            await newMail.save()
            return res.status(201).json({
                status: 201,
                mails: newMail.mails
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