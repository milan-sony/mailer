import React from 'react'
import { Link } from 'react-router'


function Indexpage() {
    return (
        <div className='h-dvh flex justify-center items-center'>
            <Link to={"/homepage"} className='bg-black w-32 h-10 text-white font-sans font-medium rounded-md capitalize flex justify-center items-center hover:bg-slate-500'>Compose Mail</Link>
        </div>
    )
}

export default Indexpage
