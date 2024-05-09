import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { Description } from './Description';
import { Footer } from './Footer';
import { RelatedProduct } from './RelatedProduct';
import { ShopContext } from '../context/ShopContext';

export const ProductDisplay = (props) => {
  const product = props.product;
   const {AddToCart} = useContext(ShopContext);
  return (
    <div className=' flex flex-col'>
      <div className=' flex items-center justify-evenly max-w-screen'>
        <div className=' flex  justify-between mb-36 '>
          <div className=' mt-2'>
            <img className='h-[140px] py-2 mb-4' src={product.image} alt='' />
            <img className='h-[140px] py-2 mb-4' src={product.image} alt='' />
            <img className='h-[140px] py-2 mb-4' src={product.image} alt='' />
            <img className='h-[140px] py-2 mb-4' src={product.image} alt='' />
          </div>
          <div className=' ml-5 py-4'>
            <img className=' w-[600px] h-[600px]' src={product.image} alt='' />
          </div>
        </div>
        <div className=' mb-24 max-w-4xl ml-28'>
          <div className=' py-4'>
            <h1 className='font-semibold text-2xl text-gray-600'>{product.name.substr(0, 30)}</h1>
            <h1 className='font-semibold text-2xl text-gray-600'>{product.name.substr(30, 100)}</h1>
          </div>
          <div className=' flex mb-4 '>
            <img className='mr-2' src={star_icon} alt='' />
            <img className='mr-2' src={star_icon} alt='' />
            <img className='mr-2' src={star_icon} alt='' />
            <img className='mr-2' src={star_icon} alt='' />
            <img className='mr-2' src={star_dull_icon} alt='' />
            <p>(122)</p>
          </div>
          <div className=''>
            <span className=' text-gray-700 line-through'>₹{product.old_price}</span>
            <span className=' text-red-500 ml-5'>₹{product.new_price}</span>
          </div>

          <p className=' text-gray-700 py-8'>A lightweight usually knitted pullover shirt,close-fitting and with a round neckline and short sleeves,worn as an undershirt or outer garment </p>
          <h1 className=' font-semibold text-1xl text-gray-500 py-2'>Select Size</h1>
          <div className=' cursor-pointer flex py-4'>
            <div className='px-4 bg-gray-100 py-1 h-[35px] w-[45px] border border-gray-400 mr-3'>S</div>
            <div className='px-4 bg-gray-100 py-1 h-[35px] w-[45px] border border-gray-400 mr-3'>M</div>
            <div className='px-4 bg-gray-100 py-1 h-[35px] w-[45px] border border-gray-400 mr-3'>L</div>
            <div className='px-3 bg-gray-100 py-1 h-[35px] w-[45px] border border-gray-400 mr-3'>XL</div>
            <div className='px-3 bg-gray-100 py-1 h-[35px] w-[50px] border border-gray-400 mr-3'>XXL</div>
          </div>
          <button onClick={()=>{AddToCart(product.id)}} className=' text-white mt-6 bg-red-600 h-[50px] w-[230px]'>ADD To CART</button>
          <div className=' mt-8 py-4 flex flex-col'>
            <div className=' flex mb-2'>
              <h1 className=' font-semibold'>Category :</h1>Women,T-shirt,Crop Top
            </div>
            <div className='flex mb-2'>
              <h1 className=' font-semibold'>Tag :</h1> Modern,Latest
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct/>
      <Description/>
      <Footer/>
    </div>
  )
}
