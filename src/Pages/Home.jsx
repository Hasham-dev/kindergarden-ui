import React from 'react'
import { FullPage, Slide } from 'react-full-page'
import WindowSlide from '../Components/WindowSlide/WindowSlide'

function Home () {
  return (
    <FullPage duration={500}>
      <Slide className='bg-picture-1 bg-center bg-cover flex flex-col h-screen'>
        <WindowSlide
          leftBtnText='Left Button'
          rightBtnText='Left Button'
        />
      </Slide>
      <Slide className='bg-picture-2 bg-center bg-cover flex flex-col h-screen'>
        <WindowSlide
          filter='filter invert md:invert-0'
          leftBtnText='Left Button'
          rightBtnText='Left Button'
        />
      </Slide>
      <Slide className='bg-picture-3 bg-center bg-cover flex flex-col h-screen'>
        <WindowSlide
          filter='filter invert'
          leftBtnText='Left Button'
          rightBtnText='Left Button'
        />
      </Slide>
      <Slide className='bg-picture-4 bg-center bg-cover flex flex-col h-screen'>
        <WindowSlide
          filter='filter invert'
          leftBtnText='Left Button'
          rightBtnText='Left Button'
        />
      </Slide>
    </FullPage>
  )
}

export default Home
