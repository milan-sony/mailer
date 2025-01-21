import React from 'react'
import { Upload } from 'lucide-react'

function Homepage() {
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
                            <form autoComplete="off" noValidate>
                                <div className="space-y-2 mb-2">
                                    <label className="text-black mb-2 block">To: (Enter the mail id's)</label>
                                    <div className='bg-gray-100 max-h-40 overflow-y-auto rounded-md p-2'>
                                        <div className='flex items-center flex-wrap gap-4'>
                                            <div className='bg-white inline-block rounded-md p-1'>
                                                <span className='mr-2'>milan@gmail.com</span>
                                                <span className='bg-red-500 size-5 text-white rounded-full inline-flex justify-center items-center text-center cursor-pointer text-lg font-semibold'>&times;</span>
                                            </div>
                                            <div className='bg-white inline-block rounded-md p-1'>
                                                <span className='mr-2'>milan@gmail.com</span>
                                                <span className='bg-red-500 size-5 text-white rounded-full inline-flex justify-center items-center text-center cursor-pointer text-lg font-semibold'>&times;</span>
                                            </div>
                                            <div className='bg-white inline-block rounded-md p-1'>
                                                <span className='mr-2'>milan@gmail.com</span>
                                                <span className='bg-red-500 size-5 text-white rounded-full inline-flex justify-center items-center text-center cursor-pointer text-lg font-semibold'>&times;</span>
                                            </div>
                                            <input type="text" placeholder="Enter mail id's" className='outline-none border-none rounded-md bg-white p-1 text-black' />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 mb-2 w-full flex justify-end">
                                    <button type='submit' className='p-2 text-center flex justify-between text-white text-sm bg-gray-600 rounded hover:text-white hover:bg-black capitalize font-medium'><Upload className='size-5 mr-1'/>upload file
                                    </button>
                                </div>

                                <div className="space-y-2 mb-2">
                                    <div>
                                        <label className="text-black mb-2 block">Subject:</label>
                                        <input type="text" name="email" className="block w-full px-4 py-3 outline-none text-black font-normal text-sm rounded-md outline-gray-200" placeholder="Add a subject" />
                                    </div>
                                </div>
                                <div className="space-y-2 mb-2">
                                    <div>
                                        <label className="text-black mb-2 block">Body:</label>
                                        <textarea name="email" className="block w-full px-4 py-3 outline-none text-black font-normal text-sm rounded-md outline-gray-200 min-h-20" placeholder="Type here" />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button type='submit' className='block w-full py-2 text-center text-white bg-gray-600 rounded hover:text-white hover:bg-black uppercase font-medium'>Send mail
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
