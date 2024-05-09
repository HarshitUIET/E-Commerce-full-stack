import React, { useState,useEffect } from 'react'
import { Items } from './Items';

export const NewCollection = () => {
 
  const [new_collection,setnewcollection] = useState([]);

  useEffect(()=>{
    fetch("https://e-commerce-full-stack-1-n87b.onrender.com/newcollection")
    .then((res)=>res.json()).then((data)=>setnewcollection(data))
  },[])

  return (
    <div className=' flex mt-12 flex-col items-center '>
     <div >
       <div className=' w-full'>
       <p className=' font-bold text-3xl uppercase '>New Collection</p>
        <div className=' h-[6px] mt-3 ml-12 w-[180px] rounded-3xl bg-gray-800'></div>
       </div>
     </div>
     <div className='grid grid-cols-4 mx-32 gap-x-5 gap-y-12 mt-12'>
     {
        new_collection.map((data)=>{
           return <Items id={data.id} key={data.id} image={data.image} name={data.name} old_price = {data.old_price}
           new_price = {data.new_price}
           />
        })
      }
     </div>
    </div>
  )
}
