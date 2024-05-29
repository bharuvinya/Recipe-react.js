import React, { useEffect, useState } from 'react'

import axios from 'axios'
const Recipe=()=>{
    const [data , setData]=useState([])
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


    
    return(
        <>
        <div id="recipes" className='max-w-[1320px] mx-auto'>
            <h1 className='text-4xl text-center py-5'>Recipes</h1>
        </div>
        <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-[100px]'>
            {data.slice(0,4).map((d , i)=>{
                return(
<div className='text-center shadow-lg rounded'>
    <div className='overflow-hidden'>
    <img className="w-full h-40 hover:scale-125 duration-1000 " src={d.img} alt=""/>
    </div>
    <h3>{d.food}</h3>
    

</div>
                )
})}
</div>

    
        </>
    )
}
export default Recipe