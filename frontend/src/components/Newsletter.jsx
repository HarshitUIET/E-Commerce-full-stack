import React from 'react'

export const Newsletter = () => {
  return (
    <div className=' mb-12  flex flex-col items-center  h-[300px] bg-red-400 mt-24 mx-24'>
        <h1 className=' mt-10 text-4xl font-semibold '>Get Exclusive Offers on Your Email</h1>
        <p className=' py-8'>Subscribe to our newsletter and stay updated</p>
        <div className='relative'>
        <input className='  rounded-3xl h-[40px] px-2 border border-black w-[380px] text-start py-5' type='email' placeholder='Your Email id'  />
        <button className=' h-[40px] absolute right-0 top-[1px] w-[130px] rounded-3xl text-white bg-black'>Subscribe</button>
        </div>
    </div>
  )
}
