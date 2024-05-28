import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./components/Profile"
import Courses from "./components/Courses"
import Settings from "./components/Settings"



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile/>}/>
       <Route path="/courses" element={<Courses/>}/>
       <Route path="/setting" element={<Settings/>}/>
    </Routes>
  
   
  
    </BrowserRouter>
  )
}

export default App

