import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Profile from "./components/Profile"
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
      <>
      <input type="checkbox" id="darkMode"/>
    <div className="wrapper">
    <label htmlFor="darkMode"><i className="fa-solid fa-circle-half-stroke"></i></label>
        <Navbar/>
        <Hero/>

        <Skills/>
        
        <Projects/>

        {/* <!-- Profile Section --> */}
        <Profile/>

        {/* <!-- contact me --> */}
        <Contact/>
        
      
        {/* <!-- footer --> */}
        <Footer/>
       

        
       


    </div>
      </>
  
)
}

export default App
