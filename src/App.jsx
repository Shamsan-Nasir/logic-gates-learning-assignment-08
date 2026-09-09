import { createContext, useContext, useState } from 'react'
import { ToastContainer } from "react-toastify";
import './App.css'
import './index.css'
import { Navbar } from './Component/Navbar'
import { Footer } from './Component/Footer'
import { Outlet } from 'react-router'
import { TimeLineContext } from './Context'


function App() {

  let [timelineCart, setTimelineCart] = useState([])
  return (
    <TimeLineContext.Provider value={{ timelineCart, setTimelineCart }} >
      <div className='max-w-400 mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer autoClose={1000}></ToastContainer>
      </div>
    </TimeLineContext.Provider>

  )
}

export default App
