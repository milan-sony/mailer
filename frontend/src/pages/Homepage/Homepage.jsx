import React, { useEffect, useState } from 'react'
import { Upload } from 'lucide-react'
import toast from 'react-hot-toast'
import { mailControllerStore } from '../../store/mailControllerStore'

function Homepage() {

    const { isMailSendSuccessfully, sendMail } = mailControllerStore()

    const [mails, setMails] = useState([])
    console.log("Mails:", mails)

    const [files, setFiles] = useState([])
    console.log("files:", files)

    const [formData, setFormData] = useState({
        mails: [],
        mailSubject: "",
        mailContent: "",
        attachments: []
    })

    // files.forEach((files) => {
    //     setFormData((prevFiles) => ({ ...prevFiles, attachments: files }))
    // })

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles); // Set files as an array
        console.log("selected files", selectedFiles);
    };

    // Sync formData.mailIds with mails state
    // The formData state stores the email IDs (mailIds), subject, and body, but the state for mailIds is not updated when the mails array changes. So we need to update formData.mailIds whenever mails changes to keep everything in sync.
    useEffect(() => {
        setFormData((prevFormData) => ({ ...prevFormData, mails: mails, attachments: files }));
    }, [mails, files]);

    // Email validation regex pattern
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Handle email input validation
    const handleEmail = (e) => {
        if (e.key !== 'Enter') return

        const value = e.target.value

        // Check empty field
        if (!value.trim()) {
            return toast.error("Please enter mail id's")
        }

        // Check if email matches the regex pattern
        if (!emailRegex.test(value)) {
            return toast.error("Please enter a valid email address");
        }

        // Check duplicate email ids
        if (mails.includes(value.trim())) {
            return toast.error("This email ID is already added");
        }

        setMails([...mails, value])
        e.target.value = ""
    }

    // Remove mail id's
    const removeMail = (index) => {
        setMails(mails.filter((el, i) => i !== index))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        const { mails, mailSubject, mailContent } = formData // destructure formdata

        // Check for empty fields
        if (!mails[0]) {
            return toast.error("Please enter mail id's")
        }
        if (!mailSubject) {
            return toast.error("Please add a subject")
        }
        if (!mailContent) {
            return toast.error("Please enter the body content")
        }
        return true
    }

    // Form submit
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const isFormValidate = validateForm()
        if (isFormValidate === true) {
            console.log("Form data:", formData)
            sendMail(formData)
            setMails([]) // Reset mails after submission
            setFiles([]) // Reset files after submission
            setFormData({
                mails: [],
                mailSubject: "",
                mailContent: "",
                attachments: []
            });  // Reset form data
        }
    }

    return (
        <div className="w-full h-screen">
            <div className="bg-slate-100">
                <div className='w-full h-screen'>
                    <div className="contain pt-10">
                        <div className="bg-white max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                            <h2 className="text-2xl uppercase font-black mb-1 font-Open-Sans text-black">Mailer</h2>
                            <p className="text-gray-600 mb-6 text-sm font-Open-Sans">Compose your mail !</p>
                            <p className="text-black mb-4 text-sm font-Open-Sans"><b>From: uniwaretechnologies@gmail.com</b></p>
                            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
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
                                            <input type="text" placeholder="Enter mail id's" className='outline-none border-none rounded-md bg-white p-1 text-black' onKeyDown={handleEmail} />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 mb-2 w-full flex justify-end">
                                    <button type='submit' className='p-2 text-center flex justify-between text-white text-sm bg-gray-600 rounded hover:text-white hover:bg-black capitalize font-medium'><Upload className='size-5 mr-1' />upload file
                                    </button>
                                </div>

                                <div className="space-y-2 mb-2">
                                    <div>
                                        <label className="text-black mb-2 block">Subject</label>
                                        <input type="text" name="mailSubject" className="block w-full px-4 py-3 outline-none text-black font-normal text-sm rounded-md outline-gray-200" placeholder="Add a subject" value={formData.mailSubject} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="space-y-2 mb-2">
                                    <div>
                                        <label className="text-black mb-2 block">Body</label>
                                        <textarea name="mailContent" className="block w-full px-4 py-3 outline-none text-black font-normal text-sm rounded-md outline-gray-200 min-h-20" placeholder="Type here" value={formData.mailContent} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="space-y-2 mb-2">
                                    <div>
                                        <label className="text-black mb-2 block">Attachment</label>
                                        <input type="file" className="block w-full px-4 py-3 outline-none text-black font-normal text-sm rounded-md outline-gray-200" multiple onChange={handleFileChange} />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button type='submit' className='block w-full py-2 text-center text-white bg-gray-600 rounded hover:text-white hover:bg-black uppercase font-medium' disabled={isMailSendSuccessfully}>
                                        {/* toggle the btn based on status */}
                                        {
                                            isMailSendSuccessfully ? (
                                                <span className='animate-pulse'>Sending mail...</span>
                                            ) : (
                                                "Send mail"
                                            )
                                        }
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
