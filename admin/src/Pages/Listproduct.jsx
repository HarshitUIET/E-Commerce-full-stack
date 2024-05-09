import React, { useEffect, useState } from 'react';
import cross_icon from '../Assets/cross_icon.png';
import axios from 'axios';

export const Listproduct = () => {

  const [allProduct,setAllproduct] = useState([]);

  const fetcInfo = async () => {
      const res = await axios.get("http://localhost:4000/allproducts");
      setAllproduct(res.data);
  }

  const removeHandler = async (id) => {
       const res = await fetch("http://localhost:4000/removeproduct",{
        method:"POST",
        headers:{
          Accept:"application/json",
          'Content-type':'application/json'
        },
        body:JSON.stringify({id:id})
       })
       await fetcInfo();
  }

  useEffect(()=>{
     fetcInfo()
  },[])


  return (
    <div className=' flex flex-col items-center mt-6 ml-5 shadow-md shadow-slate-400 bg-white w-[1200px] '>
      <h1 className=' text-3xl py-12  font-semibold'>All Products List</h1>
      <div className=' w-full grid grid-cols-6 px-10 font-semibold '>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className=' ml-4 mt-6' >
        <hr/>
        {allProduct.map((product,index)=>{
           return <div className=' ml-4 gap-x-4 grid grid-cols-6 py-5' key={index}>
               <img className='h-[60px] ' src={product.image} alt=''/>
               <p>{product.name}</p>
               <p>{product.old_price}</p>
               <p>{product.new_price}</p>
               <p>{product.category}</p>
               <img className=' cursor-pointer' onClick={()=>{removeHandler(product.id)}} src={cross_icon} alt='' />
             </div>
        })}
      </div>
    </div>
  )
}
