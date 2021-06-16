import React from 'react'

function Slider ({ children, picture }) {
  return (
    <div>
      <div className={`section bg-picture-${picture} bg-center bg-cover h-screen w-screen overflow-y-hidden`}>
        <span className='flex flex-col bg-center bg-cover bg-black bg-opacity-20 h-screen w-screen'>
          {children}
        </span>
      </div>
    </div>
  )
}

export default Slider
