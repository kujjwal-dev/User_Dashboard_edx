import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import MyLearning from "./components/MyLearning"
import Courses from "./components/Courses"
import Contacts from "./components/Contacts"


function App() {
 

  return (
    <BrowserRouter>
    <div className='bg-slate-900'>
     <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/MyLearning" element={<MyLearning/>} />
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/Contacts" element={<Contacts/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App

