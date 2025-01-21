import mailSender from "./mailSender.js"

const mailManager = async (maildatas) => {
    try {
        let maillists = maildatas[0].mails
        let mailSubject = maildatas[0].mailSubject
        let mailContent = maildatas[0].mailContent

        await mailSender({
            to: maillists,
            subject: mailSubject,
            message: `
                    <p><b>Hi</b></p>
                    <br>
                    <p>${mailContent}</p>
                    <br>
                    <p><b>With regard's<b></p>
                    <p><b>Phone: XXXXXXXXXX</b></p>
                    <P><b>Address</b></p>
                    `
        })
        console.log("Mail's sent successfully")
    } catch (error) {
        console.error("An error occured at sending OTP via mail: ", error.message)
    }
}

export default mailManager