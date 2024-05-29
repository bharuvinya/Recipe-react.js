import React from "react"
import about from '../assets/about.webp'
const About=()=>{
    return(
        <div id="about" className="flex flex col min-h-96 lg:flex-row justify-between items-center lg:px-30 px-5 pt-22 lg:pt-17 gap-5 h-16">
            <div className="w-full lg:w-3/4 space-y-4">
                <h1 className="text-2xl font-bold text-center lg:text-4xl text-start">About Us</h1>
           <p className="text-justify lg:text-start">
            This Website enables user to search for recipes and saving new recipes on successfull login.
           </p>
            </div>
            <div className="w-full lg:w-full">
                <img className="rounded-lg" src={about} alt=""/>
            </div>
        </div>
    )
}

export default About;