import React from 'react'
import handicon from '../Assets/hand_icon.png';
import arrowicon from '../Assets/arrow.png'
import heroimg from '../Assets/hero_image.png'
import { FaArrowRight } from "react-icons/fa";


export const Hero = () => {
  return (
    <div className='flex justify-evenly bg-red-400'>
      <div className=' mt-36'>
        <p className=' uppercase font-semibold py-4'>New arrivals only</p>
        <div className=' flex'>
          <p className='font-bold text-7xl mr-3'> new</p>
          <img height={120} width={90} src={handicon} />
        </div>
        <p className='font-bold text-7xl mr-3'>collections</p>
        <p className='font-bold text-7xl mr-3'>for everyone</p>
        <div className='  mt-24'>
          <div className=' relative text-center border rounded-full bg-red-600 py-7 pr-6 text-4xl h-[100px] w-[370px]   text-white '>
            Latest Collection <FaArrowRight className=' absolute right-8 bottom-8' size={30} color='white' />
          </div>
        </div>
      </div>
      <div>
        <img src={heroimg} />
      </div>
    </div>
  )
}
