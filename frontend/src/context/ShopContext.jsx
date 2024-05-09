import React, { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";


export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {

   const[all_product,setAllproduct] = useState([]);

   useEffect(()=>{

        fetch("https://e-commerce-full-stack-1-n87b.onrender.com/allproducts")
        .then((res)=>res.json()).then((data)=>setAllproduct(data))

      if(localStorage.getItem('auth-token')) {
         fetch("https://e-commerce-full-stack-1-n87b.onrender.com/getcart",{
            method:"POST",
            headers:{
               Accept:"application/json",
               'auth-token':`${localStorage.getItem('auth-token')}`,
               'Content-Type':'application/json'
            },
            body:""
          }).then((res)=>res.json()).then((data)=>{setCartItems(data)})
      }

   },[])

   const getDefaultCart = () => {
      let cart = {}
      for (let index = 0; index < 300 + 1; index++) {
         cart[index] = 0;
      }
      return cart;
   }



   const [CartItems, setCartItems] = useState(getDefaultCart());

   const gettotalCartAmount = () => {
      let totalAmount = 0;
        for(const item in CartItems) {
           if(CartItems[item] > 0) {
             let product = all_product.find((e)=>e.id === Number(item));
             totalAmount += product.new_price*CartItems[item];
             console.log(totalAmount)
           }
        }
         return totalAmount;
      }
   


   const getTotalCartItems = () => {
      let totalCartItems = 0;
      for (const item in CartItems) {
         if (CartItems[item] > 0) {
            totalCartItems += CartItems[item];
         }
      }
      return totalCartItems;
   }

   const AddToCart = (itemId) => {
      setCartItems(prev => {
         return {
            ...prev,
            [itemId]: prev[itemId] + 1
         }
      })
      toast.success("Items Added to Cart");
       
      if(localStorage.getItem('auth-token')) {
         fetch("https://e-commerce-full-stack-1-n87b.onrender.com/addtocart",{
         method:"POST",
         headers:{
            Accept:"application/json",
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json'
         },
         body:JSON.stringify({"itemid":itemId})
       })
       .then((res)=>res.json())
       .then((data)=>{console.log(data)})
      }
       
   }




   const RemoveCart = (itemId) => {
      setCartItems((prev) => ({
         ...prev,
         [itemId]: prev[itemId] - 1
      }))
      toast.error("Item removed from Cart");
      if(localStorage.getItem('auth-token')) {
         fetch("https://e-commerce-full-stack-1-n87b.onrender.com/removecart",{
         method:"POST",
         headers:{
            Accept:"application/json",
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json'
         },
         body:JSON.stringify({"itemid":itemId})
       })
       .then((res)=>res.json())
       .then((data)=>{console.log(data)})
      }
   }

   const contextvalue = {
      gettotalCartAmount, getTotalCartItems, all_product, CartItems, AddToCart, RemoveCart
   };

   return (
      <ShopContext.Provider value={contextvalue} >
         {props.children}
      </ShopContext.Provider>
   )

}

export default ShopContextProvider;