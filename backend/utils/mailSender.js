import nodemailer from "nodemailer"

const mailSender = async (options) => {
    try {
        // Create a transporter to send emails
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_MAIL,
                pass: process.env.SMTP_APP_PASSWORD
            }
        })

        // send emails to the users
        const mail = {
            from: process.env.SMTP_MAIL,
            to: options.to,
            subject: options.subject,
            html: options.message
        }
        console.log("\n✔️  Mail generated")
        await transporter.sendMail(mail)
        console.log(`\n✔️  Mail send to: ${options.to}`)

    } catch (error) {
        console.error("Error sending mail", error.message)
    }
}

export default mailSender