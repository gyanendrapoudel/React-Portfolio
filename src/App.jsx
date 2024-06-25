import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Profile from "./components/Profile"
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
      <>
   
        {/* <Hero/> */}

        {/* <Skills/> */}
        
        {/* <Projects/> */}

        {/* <!-- Profile Section --> */}
        {/* <Profile/> */}

        {/* <!-- contact me --> */}
        {/* <Contact/> */}
        
        {/* using react router */}

        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Hero/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
        {/* <!-- footer --> */}
        <Footer/>
       

        
       


   
      </>
  
)
}

export default App
