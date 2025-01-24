import nodemailer from "nodemailer"
import path from 'path';
import { fileURLToPath } from 'url';

const mailSender = async (options, res) => {
    // Get the current directory of the module
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)

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

        // add an image in the body a embedded image (logo)
        const embeddedImage = {
            filename: 'uniware_logo.png',
            path: path.join(__dirname, '/../assets/images/uniware_logo.png'),
            cid: 'logo'
        }

        // Send emails to the users
        const mail = {
            from: process.env.SMTP_MAIL,
            to: options.to,
            subject: options.subject,
            html: options.message,
            attachments: [{
                filename: 'uniware_logo.png',
                path: path.join(__dirname, '/../assets/images/uniware_logo.png'),
                cid: 'logo'
            }]
        }

        if (mail) {
            console.log("\n✔️  Mail generated")
            await transporter.sendMail(mail)
            console.log(`\n✔️  Mail send to: ${options.to}`)
            return res.status(200).json({
                status: 200,
                message: "Message generated and send successfully"
            })
        }

    } catch (error) {
        console.error("Error sending mail", error.message)
        return res.status(500).json({
            status: 500,
            message: "Error sending mail",
            error: error.message
        })
    }
}

export default mailSender