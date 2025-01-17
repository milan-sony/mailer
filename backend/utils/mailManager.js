import mailSender from "./mailSender.js"

const mailManager = async (maildatas) => {
    try {
        let maillists = maildatas[0].mails
        console.log("Mail lists: ", maillists)

        let mailSubject = maildatas[0].mailSubject
        console.log("Mail content: ", mailSubject)

        let mailContent = maildatas[0].mailContent
        console.log("Mail content: ", mailContent)

        await mailSender({
            to: maillists,
            subject: mailSubject,
            message: `
                    <p>Hi</p> 
                    <br>
                    <p>${mailContent}</p>
                    `
        })
        console.log("Mail's sent successfully")
    } catch (error) {
        console.error("An error occured at sending OTP via mail: ", error.message)
    }
}

export default mailManager