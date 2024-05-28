import React from 'react'
import Sidenav from './Sidenav'
import { Box } from '@mui/material'
import Navbar from './Navbar'

const Settings = () => {
  return (
    <>
    <div className='bgcolor'>
        <Navbar/>
    <Box height={30} />
    <Box sx={{ display: "flex"}}>
      <Sidenav/>
      <Box component="main" sx={{ flexGrow: 1, p: 3,mt:4}}>

         <h1>Settings</h1>
      </Box>
     
    </Box></div>
   
    
    </>
  )
}

export default Settings