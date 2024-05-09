import React, { useContext } from 'react';
import {ShopContext} from '../context/ShopContext';
import { Items } from '../components/Items';
import dropdown_icon from '../Assets/dropdown_icon.png';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Footer } from '../components/Footer';

export const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext);

  return (
    <div className=''>
      <img src={props.banner} alt='' />
      <div className=' flex mt-4  justify-evenly'>
        <p className=' mt-12'><span className='font-semibold'>Showing 1-12 </span> 
        out of 36 products</p>
       <div className=' ml-96 relative'>
       <button className='h-[50px] w-[180px] rounded-full border pr-2 bg-white border-black text-black mt-8'>
          Sort By <RiArrowDropDownLine className='absolute right-5 bottom-1' size={40} color='black' />
        </button>
       </div>
      </div>
      <div className='grid gap-8 gap-x-7 grid-cols-4 mx-32  mt-12'>
        {
          all_product.map((data,index)=>{
            if(props.category === data.category) {
              return  <Items
              id={data.id}
              key={data.id}
              image={data.image}
              name={data.name}
              old_price={data.old_price}
              new_price={data.new_price}
            />
            }
            else{
              return null;
            }
          })
        }
      </div>
      <Footer/>
    </div>
  );
};