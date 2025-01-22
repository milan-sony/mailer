import { create } from 'zustand'
import { axiosInstance } from '../lib/Axios'
import toast from 'react-hot-toast'

export const mailControllerStore = create((set) => ({
    isMailSendSuccessfully: false,

    sendMail: async (data) => {
        try {
            set({ isMailSendSuccessfully: true })
            const res = await axiosInstance.post("/mail/sendmail", data)
            if (res) {
                return toast.success("Mail sent successfully")
            }
        } catch (error) {
            console.error("Error sending the mail, ", error.response.data.message)
            return toast.error("Error sending the mail")
        } finally {
            set({ isMailSendSuccessfully: false })
        }
    }
}))