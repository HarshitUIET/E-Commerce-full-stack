import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export const LoginSignup = () => {

     const navigate = useNavigate();

    const [state,setState] = useState("Login");
    const [formData,setformData] = useState({
      name:"",
      password:"",
      email:""
    })

    const ChangeHandler = (e) =>{
         setformData((prev)=>{
             return {
                ...prev,
                [e.target.name] : e.target.value
             }
         })
    }

   
    const login = async () =>  {

        let responseData;
        await fetch("http://localhost:4000/login",{
              method:"POST",
              headers:{
                Accept:"application/json",
                'Content-type':'application/json'
              },
              body:JSON.stringify(formData)
        }).then((res)=>res.json()).then((data)=>responseData=data)

        console.log(responseData);

        if(responseData.success) {
          localStorage.setItem("auth-token",responseData.token);
          toast.success("Login Successfull");
          window.location.replace("/");
        }
        else{
          alert(responseData.errors);
        }
    }

    const Signup = async () => {
      console.log("in Signup page",formData);
      let responseData;
        await fetch("http://localhost:4000/signup",{
              method:"POST",
              headers:{
                Accept:"application/json",
                'Content-type':'application/json'
              },
              body:JSON.stringify(formData)
        }).then((res)=>res.json()).then((data)=>responseData=data)

        console.log(responseData);

        if(responseData.success) {
          console.log("inside too much");
          localStorage.setItem("auth-token",responseData.token);
          toast.success("Signup Successfull");  
         window.location.replace("/");
        }
        else{
          alert(responseData.errors)
        }
    }

  return (
    <div className=' bg-pink-100 h-screen w-screen flex items-center justify-center'>
      <div className='min-h-60vh min-w-80vh bg-white'>
        <div className=' h-[480px] flex flex-col mx-12 mt-10 '>
          <div className='font-bold text-2xl py-4 '>
           {state}
          </div>

          <form>
          <div className=' flex flex-col py-5'> 
          {
            state === "Sign Up" ? <input required value={formData.name} onChange={ChangeHandler} className=' px-2 border border-gray-500 py-2 mb-5' type='text' placeholder='Your Name' name='name' />: <></>
          }
            
            <input value={formData.email} required onChange={ChangeHandler} className=' px-2 border border-gray-500 py-2 mb-5' type='email' placeholder='Email Address' name='email' />

            <input value={formData.password} required onChange={ChangeHandler} className=' px-2 border border-gray-500 py-2 mb-5' name='password' type='password' placeholder='Password' />
          </div>

          </form>
          <div>
            <button  onClick={()=>{state==="Login" ? login():Signup()}} className='w-full bg-red-600 h-[50px] mb-5 text-white'>
              Continue
            </button>
          </div>
          <div className='mb-6'>
           {
             state === "Sign Up" ? <p>Already have an account ? <Link to='/login'><span onClick={()=>{setState("Login")}} className=' text-red-700'>Login here</span></Link></p> :
             <p>Create an account ? <Link to='/login'><span onClick={()=>{setState("Sign Up")}} className=' text-red-700'>Create Account</span></Link></p>  
           }
          </div>
          <div>
            <input className='mr-2' type='checkbox' id='privacy' />
            <label htmlFor='privacy'>By continuing I agree to the terms of user & privacy policy .</label>
          </div>
        </div>
      </div>
    </div>
  )
}
