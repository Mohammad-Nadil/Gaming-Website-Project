import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Rootlayout = () => {
  return (
    <div className='scrollbar-hide' >
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Rootlayout
