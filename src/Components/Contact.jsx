import React from 'react'
import '../App.css'

function Contact() {
  return (
    <>
    <div className=' md:flex md:justify-center md:items-center px-4'>
        <div className='lg:w-[60%] bg-third md:w-[80%] md:h-full  '>
            <div>
                <div className=' flex flex-col justify-center items-center'>
                <h1 className='cl font-bold text-6xl'>Write Us</h1>
                <div className='w-32 h-1 bg-secondry rounded'></div>

                </div>
                
                <div className='flex flex-col space-y-4 m-6'>
                    <input className='h-10 in '  placeholder="Name" type="text" />
                    <input className='h-10 in'  placeholder="Email" type="email" />
                    <input className='h-10 in'  placeholder="Phone" type="phone" />
                </div>
            </div>
            <div className=' m-6'>
                <textarea className=' my-4 h-32 in  w-[100%] ' placeholder='Message' name="" id="" ></textarea>
                <button className='w-full h-10 bg-secondry mb-14 text-xl cl'>Submit</button>
            </div>
           
           
        </div>
    </div>
    </>
  )
}

export default Contact