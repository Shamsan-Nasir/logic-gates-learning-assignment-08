import { createContext, useContext, useState } from 'react'

import './App.css'
import './index.css'
import { Navbar } from './Component/Navbar'
import { Footer } from './Component/Footer'
import { Outlet } from 'react-router'

export const TimeLineContext = createContext();

function App() {

  let [timelineCart, setTimelineCart] = useState([])
  return (
    <TimeLineContext.Provider value={{ timelineCart, setTimelineCart }} >
      <div className='max-w-400 mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </TimeLineContext.Provider>

  )
}

export default App
