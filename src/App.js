import React from 'react'
import Navbar from './Components/Navbar'
import Routes from './Router/routes'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import { BrowserRouter as Router } from 'react-router-dom'
// ..
AOS.init()

function App () {
  return (
    <div className='font-sans'>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  )
}

export default App
