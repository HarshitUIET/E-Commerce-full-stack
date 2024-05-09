import React from 'react'
import shopper_logo from '../Assets/logo.png';
import insta from '../Assets/instagram_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';
import pininterest from '../Assets/pintester_icon.png';

export const Footer = () => {
  return (
   <div>
       <footer className=''>
       <div className='  mt-16 w-screen flex flex-col items-center '>
        <div className=' flex'> 
            <img className='' src={shopper_logo} alt=''/>
            <h1 className=' uppercase font-semibold text-2xl mt-4 '>Shopper</h1>
        </div>
        <div>
            <ul className=' flex my-8 gap-x-12'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
           <ul className=' my-8 flex gap-x-12'>
            <li><img src={insta} alt='' /></li>
            <li><img src={pininterest} alt='' /></li>
            <li><img src={whatsapp} alt='' /></li>
           </ul>
        </div>
        <div className=' w-full '>
            <div className=' ml-4 h-[3px] w-full bg-gray-600'></div>
            <div className='  font-semibold text-center py-8'>
                <p>Copyright @ 2023-All Right Reserved . </p>
            </div>
        </div>
    </div>
       </footer>
   </div>
  )
}
