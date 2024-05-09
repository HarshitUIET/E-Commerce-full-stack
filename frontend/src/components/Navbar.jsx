import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png';
import { BsCart } from "react-icons/bs";
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

export const Navbar = () => {
   
      const auth = localStorage.getItem("auth-token");

     const [menu,setmenu] = useState("shop");
     const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className=' border border-gray-200 flex flex-row justify-evenly py-2'>
       <div className=' flex gap-x-3 '>
       <Link to="/">
            <img src={logo}  alt='Logoimage' />
        </Link>
        <h1 className=' uppercase text-2xl font-bold  mt-5'>Shopper</h1>
       </div>
       <div>
        <ul className=' text-gray-700 text-xl flex mt-5 justify-evenly  cursor-pointer gap-x-12'>
            <li>
                <Link to='/' onClick={()=>{setmenu("shop")}}>Shop</Link>
              {menu === "shop" ? (<div className='h-[3px] mt-1 w-full bg-red-600'></div>): ""}  
            </li>
            <li><Link onClick={()=>{setmenu("men")}} to='/men'>Men</Link>
            {menu === "men" ? (<div className='h-[3px] mt-1 w-full bg-red-600'></div>): ""}
            </li>
            <li><Link onClick={()=>{setmenu("women")}} to='/women'>Women</Link>
            {menu === "women" ? (<div className='h-[3px] mt-1 w-full bg-red-600'></div>): ""}
            </li>
            <li><Link onClick={()=>{setmenu("kids")}} to='/kids'>Kids</Link>
            {menu === "kids" ? (<div className='h-[3px] mt-1 w-full bg-red-600'></div>): ""}
            </li>
        </ul>
       </div>
       <div className=' flex  justify-between gap-x-8'>


        {
          auth ? <button onClick={()=>{  localStorage.removeItem('auth-token');toast.error("logged out");window.location.replace('/')}} className=' hover:text-white hover:bg-gray-700 hover:border-black w-[105px] h-[37px] rounded-3xl mt-3 border border-gray-600 '>Logout</button> : <Link to='/login'><button className=' hover:text-white hover:bg-gray-700 hover:border-black w-[105px] h-[37px] rounded-3xl mt-3 border border-gray-600 '>Login</button></Link>
        }
       <div className='relative mt-3'>
      <Link to='/cart' > <BsCart size={30}/></Link>
       <div className=' text-center border rounded-full h-[24px] text-white bg-red-600 absolute bottom-10 left-5 animate-bounce w-[18px] '>
         {getTotalCartItems()}
       </div>
       </div>
       </div>
    </div>
  )
}
