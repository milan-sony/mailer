import React from 'react'
import { Link } from 'react-router'
import { mailControllerStore } from '../../store/mailControllerStore'

function Sendmailpage() {
    const { isMailSendSuccessfully, sendMail } = mailControllerStore()

    console.log("Sendpage - isMailSendSuccessfully", isMailSendSuccessfully)

    return (
        <div className='h-dvh flex justify-center items-center'>
            <Link to={"/sendmail"} className='bg-black w-32 h-10 text-white font-sans font-medium rounded-md capitalize flex justify-center items-center hover:bg-slate-500' onClick={sendMail}>{
                isMailSendSuccessfully ? (
                    <span className='animate-pulse'>Sending mail...</span>
                ) : (
                    "Send mail"
                )
            }</Link>
        </div>
    )
}

export default Sendmailpage
