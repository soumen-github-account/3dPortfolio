import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import { Toaster } from "react-hot-toast";

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
