import { create } from 'zustand'
import { axiosInstance } from '../lib/Axios'
import toast from 'react-hot-toast'

export const mailControllerStore = create((set) => ({
    isMailSendSuccessfully: false,
    isStorageClearedSuccessfully: false,

    sendMail: async (data) => {
        set({ isMailSendSuccessfully: true })
        try {
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
    },

    clearStorage: async () => {
        set({ isStorageClearedSuccessfully: true })

        try {
            const res = await axiosInstance.get("/mail/clearstorage")
            if (res) {
                console.log("Res", res)
                return toast.success("Files deleted successfully")
            }
        } catch (error) {
            console.error("Error deleting the files, ", error.response.data.message)
            return toast.error("Error deleting the files")
        } finally {
            set({ isStorageClearedSuccessfully: false })
        }

    }
}))