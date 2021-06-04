import React from 'react'

function Slider ({ children, picture }) {
  return (
    <div className={`section bg-picture-${picture} bg-center bg-cover flex flex-col h-screen`}>
      {children}
    </div>
  )
}

export default Slider
