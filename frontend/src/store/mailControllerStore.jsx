import { create } from 'zustand'
import { axiosInstance } from '../lib/Axios'

export const mailControllerStore = create((set) => ({
    isMailComposed: false,
    isMailSendSuccessfully: false,

    composeMail: async (data) => {
        try {
            const res = await axiosInstance.post("/mail/composemail", data)
            set({ isMailComposed: true })
            console.log("Res data: ", res.data)
            return toast.success("Mail composed successfully")
        } catch (error) {
            console.error("Error composing the mail, ", error.response.data.message)
            return toast.error("Error composing the mail")
        } finally {
            set({ isMailComposed: false })
        }
    },

    sendMail: async () => {
        try {
            await axiosInstance.get("/mail/sendmail")
            set({ isMailSendSuccessfully: true })
            return toast.success("Mail sent successfully")
        } catch (error) {
            console.error("Error sending the mail, ", error.response.data.message)
            return toast.error("Error sending the mail")
        }
    }
}))