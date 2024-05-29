import React, { useState } from 'react'
const Login=()=>{
    const [data , setDate]=useState([])
    const [errors , setErrors]=useState({})
    const [succcess , setSuccess]=useState()
    const [formData , setFormdata]=useState({
        name:"",
        password:"",
        Email:""
    })
    const handleChange=(e)=>{
        setFormdata({...formData , [e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(formData.name===""||formData.password===""||formData.Email===""){
           setErrors(validation(formData)) 
        }
        else{
            setSuccess("Success")
        }
    }
    const validation=(values)=>{
        const err={}
        const pass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
        if(!values.name){
          err.name="Name is required"
        }
        if(!values.Email){
            err.Email="Email is required"
        if(!values.password){
            err.password="password is required"
        }
        else if(!pass.test(values.password)){
            err.password="Should contain at least one number,one uppercase, one lowercase letter, and at least 8 or more characters"
        }
       
  }
  return err
    }
   return(
    <div className='grid grid-cols-2'>
        <div className='flex justify-center items-center'>
           <div className='bg-white w-2/5 p-6 rounded'>
            <h1 className='uppercase text-2xl text-center'>Login</h1>
            <form onSubmit={handleSubmit}>
                <label className='block'>Name</label>
                <input name='name' value={formData.name} onChange={handleChange} className='placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-400 focus:ring-1 sm:text-sm'/>
                <p className='text-red-800'>{errors.name}</p>
                <br/>
                <label className='block'>Password</label>
                <input type="password" name='password' value={formData.password} onChange={handleChange} className='placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-400 focus:ring-1 sm:text-sm'/>
                <p className='text-red-800'>{errors.password}</p>
                <br/>
                <label className='block'>Email</label>
                <input type="email" name='Email' value={formData.Email} onChange={handleChange} className='placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-400 focus:ring-1 sm:text-sm'/>
                <p className='text-red-800'>{errors.Email}</p>
                <br/>
                <button className='px-10 py-2 text-md text-white bg-gray-700 rounded'>
                    Login
                </button>
                <p className='text-green-800'>{succcess}</p>
            </form>
            </div> 
        </div>
    </div>
   )
}
export default Login