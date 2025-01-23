import mailSender from "./mailSender.js"

const mailManager = async (maildatas, res) => {
    try {
        let maillists = maildatas.mails
        let mailSubject = maildatas.mailSubject
        let mailContent = maildatas.mailContent

        await mailSender({
            to: maillists,
            subject: mailSubject,
            message: `
                    <p><b>Hi</b></p>
                    <br>
                    <p>${mailContent}</p>
                    <br>
                    <p><b>With regard's<b></p>
                    <p><b>Uniware Technologies</b></p>
                    <p><b>10th Cross, Margosa Road, Malleswaram, Bengaluru, Karnataka 560003, India<b></p>
                    <p><b>Phone: XXXXXXXXXX</b></p>
                    `
        }, res)
    } catch (error) {
        console.error("An error occured at composing mail: ", error.message)
        return res.status(500).json({
            status: 500,
            message: "An error occured at composing mail",
            error: error.message
        })
    }
}

export default mailManager