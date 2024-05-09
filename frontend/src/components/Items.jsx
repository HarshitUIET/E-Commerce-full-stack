import React from 'react'
import { Link } from 'react-router-dom'

export const Items = (props) => {
  return (
    <div className=' flex-wrap hover:shadow-lg hover:shadow-slate-100 bg-white hover:scale-110  transition duration-300 ease-in '>
        <div>
        <Link to={`/product/${props.id}`} > <img className=' ' onClick={()=>{window.scrollTo(0,0)}} src={props.image} alt=''/></Link>
         <p className=' my-2'>{props.name}</p>
        </div>
        <div className=' flex gap-x-3'>
            <div className=' font-bold'>
            ₹{props.new_price} 
            </div> 
            <div className=' line-through'>
            ₹{props.old_price}
            </div>
        </div>
    </div>
  )
}
