import React from 'react';

import Navbar from './Components/Navbar';
import Content from './Components/Content';
// import About from './Components/About';
// import Home from './Components/Home';
import AllRecipes from './Components/Allrecipes'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App=()=>{


  return (
    <>
    <Router>
    <Navbar/>
        <Routes>
        <Route path="*" element={<Content />} />
         <Route path="/allrecipes" element={<AllRecipes/>} />
        </Routes>
        
      </Router>
         
      <Footer/>
    </>

  )
}
export default App

