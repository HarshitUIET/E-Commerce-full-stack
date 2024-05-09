import React, { useContext } from 'react';
import { ImCross } from "react-icons/im";
import { ShopContext } from '../context/ShopContext';
import { Footer } from '../components/Footer';

export const Cart = () => {

  const { gettotalCartAmount,all_product, CartItems, RemoveCart } = useContext(ShopContext);


  return (
    <div className=' my-12 mx-24'>
      <div className=' grid grid-cols-6 items-center gap-[75px] py-[20px] text-[18px]'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {
        all_product.map((e) => {
          if (CartItems[e.id] > 0) {
            return (

              <div>
                <div className='h-[2px] bg-gray-600 rounded-lg'></div>
                <div className='grid grid-cols-6 items-center gap-[75px] py-[20px] text-gray-600 text-[18px]'>
                  <img className='h-[80px] w-[90px]' src={e.image} alt='' />
                  <p>{e.name}</p>
                  <p>₹{e.new_price}</p>
                  <button className='h-[50px] w-[50px] border border-gray-700'>{CartItems[e.id]}</button>
                  <p>₹{e.new_price * CartItems[e.id]}</p>
                  <ImCross className=' cursor-pointer' onClick={() => { RemoveCart(e.id) }} />
                </div>
                <div className='h-[2px] bg-gray-600 rounded-lg'></div>
              </div>
            )
          }
          return null;
        })
      }

      <div className='flex justify-around mt-14'>
        <div className=' flex flex-col'>
          <h1 className='text-2xl font-bold'>Cart Totals</h1>
          <div className=' w-[400px] py-8'>
            <div className='py-2 flex justify-between'>
              <p>Subtotal</p>
              <p>₹{gettotalCartAmount()}</p>
            </div>
            <div className=' h-[1px] bg-gray-600'></div>
            <div className=' py-2 flex justify-between'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className=' h-[2px] bg-gray-600'></div>
            <div className=' py-2 flex justify-between font-bold'>
              <p>Total</p>
              <p>₹{gettotalCartAmount()}</p> 
            </div>
            
          </div>
          <button className='h-[60px] w-[230px] text-white bg-red-600 uppercase'>Proceed to checkout</button>
        </div>
        <div>
          <p className=' text-gray-600 py-3'>if you have a promo code.Enter it here</p>
          <input className=' pl-3 h-[40px] w-[230px] bg-slate-300' type='text' placeholder='promo code' />
          <button className='h-[40px] w-[130px] bg-black text-white '>Submit</button>
        </div>
      </div>
       <Footer/>
    </div>
  )
}
