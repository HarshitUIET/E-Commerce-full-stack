import React, { useEffect, useState } from 'react'
import { Items } from './Items';

export const Popular = () => {

   const [popular_product,setpopularproduct] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:4000/popularinwomen")
      .then((res)=>res.json()).then((data)=>setpopularproduct(data));
    },[])  
                

  return (
    <div className=' flex mt-12 flex-col items-center '>
     <div >
       <div className=' w-full'>
       <p className=' font-bold text-3xl uppercase '>popular in women</p>
        <div className=' h-[6px] mt-3 ml-12 w-[180px] rounded-3xl bg-gray-800'></div>
       </div>
     </div>
     <div className='grid grid-cols-4 mx-32 gap-x-5 mt-12'>
     {
       popular_product.map((data)=>{
           return <Items id={data.id} key={data.id} image={data.image} name={data.name} old_price = {data.old_price}
           new_price = {data.new_price}
           />
        })
      }
     </div>
    </div>
  )
}
