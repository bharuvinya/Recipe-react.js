import React ,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
import img from '../assets/carousel1.avif'
 const Home=()=>{
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate('/allrecipes')
  }
  return(
    <div id="home" className='gap-y-80 h-[40rem] bg-gradient-to-r from-indigo-500 to-pink-100'>
     <div className='min-h-screen container flex flex-row justify-center md:flex-row md:justify-between items-center'>
      <div className='w-full md:w-2/4 space-y-8 text-center md:text-start mt-24 md:mt-10'>
        <div>
          <h3 className='font-bold text-2xl md:text-3xl'>Explore</h3>
          <h1 className='font-bold text-3xl md:text-5xl mt-2 text-primary'>Recipes of your choice</h1>
        </div>
        <button  className='bg-black py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-400 ease-in-out' onClick={routeChange}>Check</button>
      </div>
      <div><img className='h-80' src={img} alt="img"/></div>
      </div> 
    </div>
  )
 }
 export default Home
