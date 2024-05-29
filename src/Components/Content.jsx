import Home from "./Home";
import About from "./About";
import Recipes from "./Recipes";
import { useNavigate} from 'react-router-dom'
import { BsArrowUpCircle } from "react-icons/bs";
const Content = () => {
  const top=()=>{
    window.scrollTo(0,0)
  }
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate('/allrecipes')
  }
  return (
    <div id="mainContent">
      <Home />
      <About />
      <Recipes />
      <div className="flex items-center mt-[-2rem]">
      <button className="mx-auto mt-[-5rem] text-center w-24 h-9 text-white bg-black rounded " onClick={routeChange}>View More</button>
      </div>
      <button className='absolute right-0 mt-[-7rem] p-[1rem] text-lg lg:text-5xl hover:scale-95 md:text-2xl ml-[-0rem]' onClick={top}><BsArrowUpCircle/></button>
    </div>
  );
};
export default Content;