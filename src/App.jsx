import { useState } from 'react'
 
import './App.css'
import './index.css'
import { Navbar } from './Component/Navbar'
import { Footer } from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Footer></Footer>
    </>
  )
}

export default App
