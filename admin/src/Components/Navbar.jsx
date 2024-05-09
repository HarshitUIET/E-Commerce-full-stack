import React from 'react';
import navlogo from '../Assets/nav-logo.svg';
import navprofile from '../Assets/nav-profile.svg';

export const Navbar = () => {
  return (
    <div>
     <div className=' flex justify-between py-4 px-12 shadow-lg bg-white shadow-slate-200'>
      <img src={navlogo} alt=''/>
      <img src={navprofile} alt=''/>
     </div>
    </div>
  )
}
