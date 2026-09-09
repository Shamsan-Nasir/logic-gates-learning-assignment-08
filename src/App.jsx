import { createContext, useContext, useState } from 'react'
import { ToastContainer } from "react-toastify";
import './App.css'
import './index.css'
import { Navbar } from './Component/Navbar'
import { Footer } from './Component/Footer'
import { Outlet, useNavigation } from 'react-router'
import { TimeLineContext } from './Context'


function App() {
  let navigation = useNavigation()
  let [timelineCart, setTimelineCart] = useState([])
  return (
    <TimeLineContext.Provider value={{ timelineCart, setTimelineCart }} >
      <div className='max-w-400 mx-auto'>
        <Navbar></Navbar>
        {
          navigation.state === 'loading' ? <div className='flex justify-center items-center w-full p-5 h-1/2 bg-gray-300'> <span className="loading loading-spinner text-neutral w-25"></span></div>

            :
            <Outlet></Outlet>
        }

        <Footer></Footer>
        <ToastContainer autoClose={1000}></ToastContainer>
      </div>
    </TimeLineContext.Provider>

  )
}

export default App
