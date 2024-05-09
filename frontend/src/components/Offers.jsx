import React from 'react'
import exclusive_img from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className=' mb-8 flex bg-red-400 justify-between  mx-40 mt-32'>
        <div className=' mx-16 mt-28'>
            <p className=' py-3 font-semibold text-6xl '>Exclusive</p>
            <p className=' py-3 font-semibold text-6xl' >Offers For You</p>
            <p className=' font-semibold uppercase text-xl'>Only on best sellers products</p>
            <button className=' h-[50px] w-[180px] rounded-full border bg-red-600 text-white mt-8'>Check Now</button>
        </div>
        <div className=''>
            <img src={exclusive_img} alt=''/>
        </div> 
    </div>
  )
}
