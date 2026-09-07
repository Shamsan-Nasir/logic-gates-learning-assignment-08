import { useState } from 'react'

import './App.css'
import './index.css'
import { Navbar } from './Component/Navbar'
import { Footer } from './Component/Footer'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className='max-w-400 mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
