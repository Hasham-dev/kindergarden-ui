import React from 'react'
// import { FullPage, div } from 'react-full-page'
import WindowSlide from '../Components/WindowSlide/WindowSlide'
import ReactFullpage from '@fullpage/react-fullpage'

function Home () {
  return (
    <ReactFullpage
      licenseKey='http://www.gnu.org/licenses/gpl.html'
      scrollingSpeed={500}
      fitToSectionDelay={500}
      render={({ state, fullpageApi }) => {
        console.log(state, fullpageApi)
        return (
          <ReactFullpage.Wrapper>
            <div className='section bg-picture-1 bg-center bg-cover'>
              <WindowSlide
                filter='filter invert'
                leftBtnText='Left Button'
                rightBtnText='Left Button'
              />
            </div>
            <div className='section bg-picture-2 bg-center bg-cover flex flex-col h-screen'>
              <WindowSlide
                filter='filter invert'
                leftBtnText='Left Button'
                rightBtnText='Left Button'
              />
            </div>
            <div className='section bg-picture-3 bg-center bg-cover flex flex-col h-screen'>
              <WindowSlide
                filter='filter invert'
                leftBtnText='Left Button'
                rightBtnText='Left Button'
              />
            </div>
            <div className='section bg-picture-4 bg-center bg-cover flex flex-col h-screen'>
              <WindowSlide
                filter='filter invert'
                leftBtnText='Left Button'
                rightBtnText='Left Button'
              />
            </div>
            <div className='section bg-picture-5 bg-center bg-cover flex flex-col h-screen'>
              <WindowSlide
                leftBtnText='Left Button'
                filter='filter invert'
                rightBtnText='Left Button'
              />
            </div>
            <div className='section bg-picture-6 bg-center bg-cover flex flex-col h-screen'>
              <WindowSlide
                filter='filter invert'
                leftBtnText='Left Button'
                rightBtnText='Left Button'
              />
            </div>
            <div className='section bg-picture-7 bg-center bg-cover flex flex-col h-screen'>
              <WindowSlide
                filter='filter invert'
                leftBtnText='Left Button'
                rightBtnText='Left Button'
              />
            </div>
            <div className='section bg-picture-8 bg-center bg-cover flex flex-col h-screen'>
              <WindowSlide
                filter='filter invert'
                leftBtnText='Left Button'
                rightBtnText='Left Button'
              />
            </div>
            <div className='section bg-picture-9 bg-center bg-cover flex flex-col h-screen'>
              <WindowSlide
                filter='filter invert'
                leftBtnText='Left Button'
                rightBtnText='Left Button'
              />
            </div>
            <div className='section bg-picture-10 bg-center bg-cover flex flex-col h-screen'>
              <WindowSlide
                filter='filter invert'
                leftBtnText='Left Button'
                rightBtnText='Left Button'
              />
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export default Home
