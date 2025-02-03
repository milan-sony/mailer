import React from 'react'
import { Link } from 'react-router'
import mail from '../../../public/mailer.svg'


function Indexpage() {
    return (
        <div className='bg-white dark:bg-black w-full h-dvh flex flex-col justify-center items-center'>
            <h1 className='text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-black font-Open-Sans text-black dark:text-white uppercase'>Mailer</h1>
            <img src={mail} alt="image" className='size-60 sm:size-60 md:size-60 lg:size-80' />
            <Link to={"/homepage"} className='bg-gray-400 w-40 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 dark:bg-slate-600 dark:hover:bg-slate-400 capitalize flex justify-center items-center'>📧 Compose Mail</Link>
        </div>
    )
}

export default Indexpage
