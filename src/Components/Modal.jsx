import React from 'react'

const Modal=(props)=>{
let form=props.data
console.log(props.setOpenModel)
console.log(form)
    return(
        <>
        {form.map((d,i)=>{
            return(
       
            <div className='w-[500px] h-[500px] bg-slate-100 fixed flex justify-center items-center'>
                <div className='w-[500px] h-[500px] rounded bg-white shadow flex flex-col p-[25px]'>
                    <div>
                        {<button onClick={()=>props.setOpenModel(false)}>X</button>}
                        </div>
            
            <div className='w-3/4 m-auto-[2rem] flex justify-between items-center'>
                <div className='basis-3/6 text-justify'>
        <h2>Ingredients</h2>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient1}:{d.measure1}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient2}:{d.measure2}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient3}:{d.measure3}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient4}:{d.measure4}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient5}:{d.measure5}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient6}:{d.measure6}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient7}:{d.measure7}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient8}:{d.measure8}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient9}:{d.measure9}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient10}:{d.measure10}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient11}:{d.measure11}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient12}:{d.measure12}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient13}:{d.measure13}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient14}:{d.measure14}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient15}:{d.measure15}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient16}:{d.measure16}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient17}:{d.measure17}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient18}:{d.measure18}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient19}:{d.measure19}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient20}:{d.measure20}</h4>
        <h4 className='mt-[1.5rem] font-bold'>{d.ingredient21}:{d.measure21}</h4>
                </div>
        
                <div className='basis-3/6 text-justify'>
        <h2>Process</h2>
        <h4>{d.process}</h4>
                </div>
            </div>
             </div>
            </div>
             )})}
                    </>
    )
}
export default Modal