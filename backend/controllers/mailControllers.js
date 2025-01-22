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
            console.log("New mail", newMail)
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

// send mail
// export const sendmails = async (req, res) => {
//     try {
//         const mailDatas = await Mail.find({}).select('-_id -__v')
//         console.log("Mail data's: ", mailDatas)

//         if (mailDatas) {
//             mailManager(mailDatas)
//             return res.status(200).json({
//                 status: 200,
//                 mailDatas: mailDatas
//             })
//         } else {
//             console.log("Something went wrong setting the mail data's")
//         }

//     } catch (error) {
//         console.log("Error getting all mail data's, ", error.message)
//         return res.status(500).json({
//             status: 500,
//             message: "Error getting all mail data's",
//             error: error.message
//         })
//     }
// }