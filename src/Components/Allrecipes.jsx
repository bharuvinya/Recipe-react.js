import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllRecipes=()=>{
    
    const [data , setData]=useState([])
    const [index,setIndex]=useState()
    const [popup , setPopup]=useState(false)
    console.log(data)
    const api='http://localhost:5000/recipe'
    useEffect(()=>{
        axios.get(api).then(
            res=>{
setData(res.data)
console.log(res.data)
            }
        ).catch(
            err=>{
            console.log(err)
 } )},[])
const handleChange=(i)=>{
    setPopup(true)
setIndex(i)
}

    
    return(
        <>
       
        <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-[100px]'>
            {data.map((d ,i)=>{
                return(
<div className='text-center shadow-lg rounded'>
    <div className='overflow-hidden'>
    <img className="w-full h-40 hover:scale-125 duration-1000 " src={d.img} alt=""/>
    </div>
    <h3>{d.food}</h3>

    <button className='bg-gray-300 p-1 mb-1' onClick={()=>{handleChange(i)}}>Process</button>
    {i===index  &&  popup &&  
     <div className="flex justify-center items-center overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none sm:text-sm">
     <div className="relative w-auto my-6  mx-auto max-w-3xl">
       <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
         <div className="flex items-start justify-between pt-48 border-b border-solid border-gray-300 rounded-t ">
           <button className="bg-transparent border-0 text-black"onClick={() => setPopup(false)}>
             <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">X</span>
              </button>
         </div>
            
         <div className="relative p-6 flex-auto max-sm:text-xs">
                <div className='basis-3/6 text-justify sm:text-xs'>
        <h2 className='font-semibold'>Ingredients:</h2>
     { d.ingredient1 &&  <h4 className='font-bold'>{d.ingredient1}:{d.measure1}</h4>}
     { d.ingredient2 &&   <h4 className='font-bold'>{d.ingredient2}:{d.measure2}</h4>}
     { d.ingredient3 &&   <h4 className=' font-bold'>{d.ingredient3}:{d.measure3}</h4>}
     { d.ingredient4 &&   <h4 className=' font-bold'>{d.ingredient4}:{d.measure4}</h4>}
      { d.ingredient5 && <h4 className='font-bold'>{d.ingredient5}:{d.measure5}</h4>}
      { d.ingredient6 &&  <h4 className=' font-bold'>{d.ingredient6}:{d.measure6}</h4>}
      { d.ingredient7 &&  <h4 className=' font-bold'>{d.ingredient7}:{d.measure7}</h4>}
      { d.ingredient8 &&  <h4 className=' font-bold'>{d.ingredient8}:{d.measure8}</h4>}
      { d.ingredient9 &&  <h4 className=' font-bold'>{d.ingredient9}:{d.measure9}</h4>}
      { d.ingredient10 &&  <h4 className=' font-bold'>{d.ingredient10}:{d.measure10}</h4>}
      { d.ingredient11 &&  <h4 className=' font-bold'>{d.ingredient11}:{d.measure11}</h4>}
      { d.ingredient12 && <h4 className=' font-bold'>{d.ingredient12}:{d.measure12}</h4>}
      { d.ingredient13 && <h4 className='font-bold'>{d.ingredient13}:{d.measure13}</h4>}
      { d.ingredient14 && <h4 className='font-bold'>{d.ingredient14}:{d.measure14}</h4>}
      { d.ingredient15 && <h4 className=' font-bold'>{d.ingredient15}:{d.measure15}</h4>}
      { d.ingredient16 && <h4 className=' font-bold'>{d.ingredient16}:{d.measure16}</h4>}
      { d.ingredient17 &&  <h4 className=' font-bold'>{d.ingredient17}:{d.measure17}</h4>}
      { d.ingredient18 && <h4 className=' font-bold'>{d.ingredient18}:{d.measure18}</h4>}
      { d.ingredient19 &&  <h4 className=' font-bold'>{d.ingredient19}:{d.measure19}</h4>}
      { d.ingredient20 && <h4 className='font-bold'>{d.ingredient20}:{d.measure20}</h4>}
      { d.ingredient21 && <h4 className=' font-bold'>{d.ingredient21}:{d.measure21}</h4>}
                </div>

                <div className='basis-3/6  text-justify gap-5'>
        <h2 className='font-semibold'>Process:</h2>
        <h4>{d.process}</h4>
                </div>
            </div>
            </div>
             </div>
            </div>}


    
</div>
                )
})}

</div>

    
        </>
    )
}
export default AllRecipes