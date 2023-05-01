//import logo from './logo.svg';
import './App.css';
import React from "react"

import Navbar from "./Components/Navbar";
import Experience from "./Pages/Experience";

import Projects from "./Pages/Projects";
import Home from"./Pages/Home";
import Footer from "./Components/Footer";
import ProjectDisplay from "./Pages/ProjectDisplay";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Contact from './Components/Contact';

function App() {
  return (
   <>
     

     <Navbar />
      <div className="App">
        <Routes>
         
          
         
          
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects />} />
          <Route path="projects/:id"element={<ProjectDisplay/>}/>
          <Route path="/Experience" element={<Experience />} />
          <Route path ="/Contact" element={<Contact/>}/>
          
        </Routes>
       
      </div>
     
      <Footer/>

      
      
   </>
      
    
  )
}

export default App
