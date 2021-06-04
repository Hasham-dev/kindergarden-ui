import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Slider from '../Components/Slider/Slider'
import TextContainer from '../Components/TextContainer/TextContainer'

function About () {
  const picture = [
    { picture: 1, position: 'left' },
    { picture: 4, position: 'bottom' },
    { picture: 5, position: 'right' },
    { picture: 9, position: 'left' },
    { picture: 10, position: 'right' }
  ]
  return (
    <>
      <ReactFullpage
        licenseKey='http://www.gnu.org/licenses/gpl.html'
        scrollingSpeed={500}
        fitToSectionDelay={500}
        verticalCentered={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {picture.map((state, index) => (
                <Slider key={index} picture={state.picture}>
                  <TextContainer state={state.position} />
                </Slider>
              ))}
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}

export default About
