import React from 'react'
import { Link } from 'react-router-dom'
import add_product_icon from '../Assets/Product_Cart.svg'
import list_product from '../Assets/Product_list_icon.svg'

export const Sidebar = () => {
    return (
        <div className=' flex flex-col items-center w-[250px] bg-white shadow-lg shadow-slate-200'>
          <div className=' mt-5'>
          <Link to={'/addproduct'} >
                <div className=' flex py-3 px-4 w-[190px] rounded-md my-3 bg-slate-500'>
                    <img src={add_product_icon} />
                    <p className=' ml-3 text-white'>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} >
                <div className=' mt-5 flex py-3 px-4 w-[190px] rounded-md my-3 bg-slate-500'>
                    <img src={list_product} />
                    <p className=' ml-3 text-white'>List Product</p>
                </div>
            </Link>
          </div>
        </div>
    )
}
