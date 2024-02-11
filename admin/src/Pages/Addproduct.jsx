import React, { useState } from 'react'
import upload_area from '../Assets/upload_area.svg'
import axios from 'axios';

export const Addproduct = () => {

    const [image,setimage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        old_price:"",
        new_price:"",
        category:"",
        image:"" 
    })

    const onChangeHandler = (e) =>{
        setProductDetails((prev)=>{
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }

    const imageHandler = (e) =>{
        console.log(e.target.files[0]);
        setimage(e.target.files[0]);
    }

    const AddHandler = async () => {
        try {
            console.log(productDetails);
            let product = { ...productDetails };
    
            let formData = new FormData();
            formData.append('products', image);
    
            const response = await fetch("http://localhost:4000/upload", {
                method: "POST",
                Accept:"application/json",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("Error uploading image");
            }
    
            const responseData = await response.json();
    
            if (responseData.success) {
                product.image = responseData.image_url;
                console.log(product);
                 
               const anotherRes = await axios.post("http://localhost:4000/addproduct",product)

                 console.log(anotherRes.data);

                 if(anotherRes.data.success) {
                    alert("product added")
                 }
                 else{
                    alert("Fail to add product ")
                 }

            } else {
                console.error("Error in API response:", responseData.message);
            }
        } catch (error) {
            console.error("Error in API fetch:", error);
        }
    };
    

        

  return (
    <div className=' flex flex-col items-start bg-white shadow-md shadow-slate-500 w-[900px]  mt-5 mx-5 '>
       <div className='ml-12 mt-12 '>
       <div className='py-4'>
            <p className=' py-3 text-gray-400'>Product title</p>
            <input value={productDetails.name} onChange={onChangeHandler} className='w-[600px] h-[40px] px-3 border border-gray-400' type='text' name='name' placeholder='Type here' />
        </div>
        <div className=' flex py-8 gap-x-12'>
            <div>
                <p className='mb-4 text-gray-400 '>Price</p>
                <input value={productDetails.old_price} onChange={onChangeHandler}  className='w-[300px] h-[40px] px-3 border border-gray-400' type="text" name="old_price" placeholder='Type here' />
            </div>
            <div>
                <p className=' mb-4 text-gray-400 '>Offer Price</p>
                <input value={productDetails.new_price} onChange={onChangeHandler}  className='w-[300px] h-[40px] px-3 border border-gray-400' type="text" name="new_price" placeholder='Type here' />
            </div>
        </div>
        <div>
            <p className=' text-gray-400'>Product Category</p>
            <select value={productDetails.category} onChange={onChangeHandler}  className=' text-gray-400 my-5 border border-gray-400 h-[40px] w-[120px] px-4' name='category'>
                <option value="men" >Men</option>
                <option value="women" >Women</option>
                <option value="kid" >Kid</option>
            </select>
        </div>
        <div className='w-[120px]'>
            <label htmlFor='file-input'>
                <img className=' h-[90px] w-[120px]' src={image? URL.createObjectURL(image):upload_area} alt=''/>
            </label>
            <input value={productDetails.image}   onChange={imageHandler} type='file' name='image' id='file-input'
             hidden/>
        </div>
        <button onClick={AddHandler}  className=' mt-4 mb-5 h-[40px] w-[120px] bg-blue-500 rounded-md text-white'>ADD</button>
       </div>
    </div>
  )
}
