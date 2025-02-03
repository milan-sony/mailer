import React from 'react'
import { Link } from 'react-router'
import mail from '../../../public/mailer.svg'


function Indexpage() {
    return (
        // <div className='grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-black p-20 h-dvh'>
        //     <div className="flex flex-col justify-center">
        //         <h1 className='text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-black font-Open-Sans text-black dark:text-white mb-5'>Mailer</h1>
        //         <p className='text-sm sm:text-base md:text-lg lg:text-xl font-Open-Sans font-medium text-gray-400 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, fugiat.</p>
        //         <div className='flex flex-col items-center sm:flex-row sm:items-start'>
        //             <Link to={"/homepage"} className='bg-gray-400 w-32 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 dark:bg-slate-600 dark:hover:bg-slate-400 sm:mr-4 capitalize flex justify-center items-center'>Learn more</Link>
        //         </div>
        //     </div>
        //     <div className="flex justify-center items-center"><img src={mail} alt="image" className='size-60 sm:size-60 md:size-60 lg:size-96' /></div>
        // </div>

        <div className='bg-white dark:bg-black w-full h-dvh flex flex-col justify-center items-center'>
                <h1 className='text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-black font-Open-Sans text-black dark:text-white'>Mailer</h1>
                <img src={mail} alt="image" className='size-60 sm:size-60 md:size-60 lg:size-80' />
                <Link to={"/homepage"} className='bg-gray-400 w-40 h-10 text-white font-Open-Sans font-medium rounded-md hover:bg-gray-600 dark:bg-slate-600 dark:hover:bg-slate-400 capitalize flex justify-center items-center'>Compose Mail</Link>
        </div>
    )
}

export default Indexpage
