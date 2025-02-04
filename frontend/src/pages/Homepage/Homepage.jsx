import React, { useEffect, useState } from 'react'
import { Upload } from 'lucide-react'
import toast from 'react-hot-toast'
import { mailControllerStore } from '../../store/mailControllerStore'

function Homepage() {
    const { isMailSendSuccessfully, sendMail } = mailControllerStore()

    const [mails, setMails] = useState([])
    const [files, setFiles] = useState([])
    const [formValueData, setFormValueData] = useState({
        mails: [],
        mailSubject: "",
        mailContent: ""
    })

    // Sync form value data with mails and files state
    useEffect(() => {
        setFormValueData(prevFormData => ({
            ...prevFormData,
            mails: mails,
            attachments: files
        }))
    }, [mails, files])

    const handleChange = (e) => {
        setFormValueData({ ...formValueData, [e.target.name]: e.target.value })
    }

    // Handle file change
    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files))
    }

    // // Email validation regex pattern
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    // Handle email input validation
    const handleEmail = (e) => {
        if (e.key !== 'Enter')
            return

        const value = e.target.value.trim()

        // Check empty field
        if (!value)
            return toast.error("Please enter mail id's")

        // Check if email matches the regex pattern
        if (!emailRegex.test(value))
            return toast.error("Please enter a valid email address")

        // Check duplicate email ids
        if (mails.includes(value))
            return toast.error("This email ID is already added")

        setMails([...mails, value])
        e.target.value = ""
    }

    // Remove mail id's
    const removeMail = (index) => {
        setMails(mails.filter((el, i) => i !== index))
    }

    // Form validation
    const validateForm = () => {
        const { mails, mailSubject, mailContent } = formValueData

        if (!mails.length)
            return toast.error("Please enter mail id's")

        if (!mailSubject)
            return toast.error("Please add a subject")

        if (!mailContent)
            return toast.error("Please enter the body content")

        return true
    }

    // Handle form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const isFormValid = validateForm()
        if (!isFormValid) return

        const formDataObj = new FormData()

        for (let file of files) {
            formDataObj.append('attachments', file)
        }

        formDataObj.append('mails', formValueData.mails)
        formDataObj.append('mailSubject', formValueData.mailSubject)
        formDataObj.append('mailContent', formValueData.mailContent)

        // Send the mail
        await sendMail(formDataObj)

        // Reset states after submission
        setMails([])
        setFiles([])
        setFormValueData({
            mails: [],
            mailSubject: "",
            mailContent: "",
        })
    }

    return (
        <div className="w-full h-screen">
            <div className="bg-slate-100">
                <div className='w-full h-screen'>
                    <div className="contain pt-10">
                        <div className="bg-white max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                            <h2 className="text-2xl uppercase font-black mb-1 font-Open-Sans text-black">Mailer</h2>
                            <p className="text-gray-600 mb-6 text-sm font-Open-Sans">Compose your mail !</p>
                            <p className="text-black mb-4 text-sm font-Open-Sans"><b>From: {import.meta.env.VITE_MAIL_ID}</b></p>
                            <form autoComplete="off" noValidate onSubmit={handleFormSubmit} encType="multipart/form-data">
                                <div className="space-y-2 mb-2">
                                    <label className="text-black mb-2 block">To: (Enter the mail id's)</label>
                                    <div className='bg-gray-100 max-h-40 overflow-y-auto rounded-md p-2'>
                                        <div className='flex items-center flex-wrap gap-4'>
                                            {
                                                mails.map((mailId, index) => (
                                                    <div className='bg-white inline-block rounded-md p-1' key={index}>
                                                        <span className='mr-2'>{mailId}</span>
                                                        <span className='bg-red-500 size-5 text-white rounded-full inline-flex justify-center items-center text-center cursor-pointer text-lg font-semibold' onClick={() => removeMail(index)}>&times;</span>
                                                    </div>
                                                ))
                                            }
                                            <input
                                                type="text"
                                                placeholder="Enter mail id's"
                                                className='outline-none border-none rounded-md bg-white p-1 text-black'
                                                onKeyDown={handleEmail}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 mb-2 w-full flex justify-end">
                                    <button type='submit' className='p-2 text-center flex justify-between text-white text-sm bg-gray-600 rounded hover:text-white hover:bg-black capitalize font-medium cursor-not-allowed' disabled>
                                        <Upload className='size-5 mr-1' />upload file
                                    </button>
                                </div>

                                <div className="space-y-2 mb-2">
                                    <div>
                                        <label className="text-black mb-2 block">Subject</label>
                                        <input
                                            type="text"
                                            name="mailSubject"
                                            className="block w-full px-4 py-3 outline-none text-black font-normal text-sm rounded-md outline-gray-200"
                                            placeholder="Add a subject"
                                            value={formValueData.mailSubject}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 mb-2">
                                    <div>
                                        <label className="text-black mb-2 block">Body</label>
                                        <textarea
                                            name="mailContent"
                                            className="block w-full px-4 py-3 outline-none text-black font-normal text-sm rounded-md outline-gray-200 min-h-20"
                                            placeholder="Type here"
                                            value={formValueData.mailContent}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 mb-2">
                                    <div>
                                        <label className="text-black mb-2 block">Attachment</label>
                                        <input
                                            type="file"
                                            className="block w-full px-4 py-3 outline-none text-black font-normal text-sm rounded-md outline-gray-200"
                                            multiple
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button type='submit' className='block w-full py-2 text-center text-white bg-gray-600 rounded hover:text-white hover:bg-black uppercase font-medium' disabled={isMailSendSuccessfully}>
                                        {isMailSendSuccessfully ? (
                                            <span className='animate-pulse'>Sending mail...</span>
                                        ) : (
                                            "Send mail"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage