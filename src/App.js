import React from 'react'
import Navbar from './Components/Navbar'
import Routes from './Router/routes'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()

function App () {
  return (
    <div className='font-sans'>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
