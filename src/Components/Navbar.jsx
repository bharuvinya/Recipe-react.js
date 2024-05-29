import  {useState} from "react"
import {Link} from "react-scroll"
import * as Scroll from 'react-scroll'
import {Link as RouterLink, useLocation, useNavigate} from 'react-router-dom'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'


const Navbar=()=>{
const path=useLocation().pathname;
const location=path.split("/")[1];
const navigate=useNavigate()
const scroller=Scroll.scroller
const gotoPage =async(selector)=>{
    await navigate("/")
    await scroller.scrollTo(selector,{
        duration:500,
        spy:true,
        smooth:true
    })
}
    const [but,setBut]=useState(false);
    //const [Form,setForm]=useState(false);

const handleChange=()=>{
    setBut(!but);
}
const close=()=>{
    setBut(false)
}

return(
    <>
<div className="fixed w-full z-10 text-white">
    <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className="flex flex-row items-center cursor-pointer">
                <Link to="home" spy={true} smooth={true} duration={500}>
                    <h1 className="font-bold text-3xl italic">Food Recipe</h1>
                </Link>
            </div>
            <nav className="hidden lg:flex flex-row items-center text-lg gap-9 font-medium">
                {location!=="allrecipes"?(
                    <>
                    {" "}
            <Link className="hover:text-hoverColor transition-all cursor-pointer" to="home" spy={true} smooth={true} duration={500}>Home</Link>
            <Link className="hover:text-hoverColor transition-all cursor-pointer" to="about" spy={true} smooth={true} duration={500}>About Us</Link>
            <Link className="hover:text-hoverColor transition-all cursor-pointer" to="recipes" spy={true} smooth={true} duration={500}>Recipes</Link>
            
           
            </>  ):(
                <>
                {" "}
                    <button onClick={()=>gotoPage("home")}className="hover:text-hoverColor transition-all cursor-pointer" >Home</button>
            <button onClick={()=>gotoPage("about")} className="hover:text-hoverColor transition-all cursor-pointer"  >About Us</button>
            <button onClick={()=>gotoPage("recipes")} className="hover:text-hoverColor transition-all cursor-pointer" >Recipes</button>
            </> )}   </nav>
            <div className="lg:hidden flex items-center">
{but?(<AiOutlineClose size={25} onClick={handleChange}/>):(<AiOutlineMenu size={25} onClick={handleChange}/>)}
            </div>
        </div>
        <div className={`${but?"translate-x-0":"-translate-x-full"} lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        {location!=="allrecipes"?(
            <>
        <Link className="hover:text-hoverColor transition-all cursor-pointer" to="home" spy={true} smooth={true} duration={500} onClick={close}>Home</Link>
        <Link className="hover:text-hoverColor transition-all cursor-pointer" to="about" spy={true} smooth={true} duration={500}onClick={close}>About Us</Link>
            <Link className="hover:text-hoverColor transition-all cursor-pointer" to="recipes" spy={true} smooth={true} duration={500}onClick={close}>Recipes</Link>
           </>): (
            <>
            <button onClick={()=>gotoPage("home")}className="hover:text-hoverColor transition-all cursor-pointer" >Home</button>
            <button onClick={()=>gotoPage("about")} className="hover:text-hoverColor transition-all cursor-pointer"  >About Us</button>
            <button onClick={()=>gotoPage("recipes")} className="hover:text-hoverColor transition-all cursor-pointer" >Recipes</button>
            </>
           )}
            
    </div>
    </div>
</div>
</>
)
}
export default Navbar