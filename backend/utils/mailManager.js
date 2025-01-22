import mailSender from "./mailSender.js"

const mailManager = async (maildatas) => {
    try {
        console.log("maildatas", maildatas)
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
                    <p><b>Phone: XXXXXXXXXX</b></p>
                    <P><b>Address</b></p>
                    `
        })
        console.log("Mail's sent successfully")
    } catch (error) {
        console.error("An error occured at sending mail: ", error.message)
    }
}

export default mailManager