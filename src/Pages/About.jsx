import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Slider from '../Components/Slider/Slider'
import TextContainer from '../Components/TextContainer/TextContainer'
import ResponsiveSlider from '../Components/Slider/ResponsiveSlider'

function About () {
  const picture = [
    { picture: 1, position: 'left' },
    { picture: 4, position: 'bottom' },
    { picture: 5, position: 'right' },
    { picture: 9, position: 'left' },
    { picture: 10, position: 'right' }
  ]
  return (
    <div>
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
              <div className='section'>
                <span>
                  {/* <Card /> */}
                  <ResponsiveSlider />
                </span>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export default About
