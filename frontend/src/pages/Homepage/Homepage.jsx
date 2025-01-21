import React, { useEffect, useState } from 'react'
import { Upload } from 'lucide-react'
import toast from 'react-hot-toast'
import React from 'react'
import { mailControllerStore } from '../../store/mailControllerStore'

function Homepage() {

    const { isMailComposed, isMailSendSuccessfully } = mailControllerStore()

    const [mails, setMails] = useState([])

    const [formData, setFormData] = useState({
        mailIds: [],
        mailSubject: "",
        mailBody: ""
    })

    // Sync formData.mailIds with mails state
    // The formData state stores the email IDs (mailIds), subject, and body, but the state for mailIds is not updated when the mails array changes. You need to update formData.mailIds whenever mails changes to keep everything in sync.
    useEffect(() => {
        setFormData((prevFormData) => ({ ...prevFormData, mailIds: mails }));
    }, [mails]);

    // gets mail id's
    const handleEmail = (e) => {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) {
            return toast.error("Please enter mail id's")
        }
        // check duplicate email ids
        if (mails.includes(value.trim())) {
            return toast.error("This email ID is already added");
        }
        setMails([...mails, value])
        e.target.value = ""
    }

    // remove mail id's
    const removeMail = (index) => {
        setMails(mails.filter((el, i) => i !== index))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        const { mailIds, mailSubject, mailBody } = formData // destructure formdata

        // check for empty fields
        if (!mailIds[0]) {
            return toast.error("Please enter mail id's")
        }
        if (!mailSubject) {
            return toast.error("Please add a subject")
        }
        if (!mailBody) {
            return toast.error("Please enter the body content")
        }
        return true
    }

    // form submit
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const isFormValidate = validateForm()
        if (isFormValidate === true) {
            console.log("Form values: ", formData)
            setMails([]);  // Reset mails after submission
            setFormData({
                mailIds: [],
                mailSubject: "",
                mailBody: ""
            });  // Reset form data
        }
    }

    return (
        <div className="w-full h-screen">
            {/* mail form */}
            <div className="bg-slate-100">
                <div className='w-full h-screen'>
                    <div className="contain pt-10">
                        <div className="bg-white max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                            <h2 className="text-2xl uppercase font-black mb-1 font-Open-Sans text-black">Mailer</h2>
                            <p className="text-gray-600 mb-6 text-sm font-Open-Sans">Compose your mail !</p>
                            <p className="text-black mb-4 text-sm font-Open-Sans"><b>From: name@domain.com</b></p>
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
                                        <textarea name="mailBody" className="block w-full px-4 py-3 outline-none text-black font-normal text-sm rounded-md outline-gray-200 min-h-20" placeholder="Type here" value={formData.mailBody} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button type='submit' className='block w-full py-2 text-center text-white bg-gray-600 rounded hover:text-white hover:bg-black uppercase font-medium' disabled={isMailComposed}>
                                        {/* toggle btn based on status */}
                                        {
                                            isMailComposed ? (
                                                <span className='animate-pulse'>Composing mail...</span>
                                            ) : (
                                                "Compose mail"
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
