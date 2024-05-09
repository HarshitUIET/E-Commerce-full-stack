import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

export const Breadcrum = (props) => {

   const product = props.product;

  return (
    <div className='flex py-6'>
        Home <IoIosArrowForward className='mt-1'/> Shop <IoIosArrowForward className='mt-1'/>  {product.category} <IoIosArrowForward className='mt-1'/> {product.name}
    </div>
  )
}
