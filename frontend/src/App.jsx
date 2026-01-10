import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import { Toaster } from "react-hot-toast";

// import Navbar from './pages/Navbar'
// import Hero from './pages/Hero'
// import About from './pages/About'
// import Skills from './pages/Skills'
// import Projects from './pages/Projects'
// import Footer from './pages/Footer'
// import MidBanner from './pages/MidBanner'
// import TechStack from './pages/TechStack'

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/all-projects' element={<AllProjects />} />
      </Routes> 
    </div>
  )
}

export default App
