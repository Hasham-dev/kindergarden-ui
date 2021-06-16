import React from 'react'
import Slider from '../Components/Slider/Slider'
import TextContainer from '../Components/TextContainer/TextContainer'
import ImageTextSlider from '../Components/Slider/ImageTextSlider'
import PreSchoolSlider from '../Components/PreSchoolIntialiSlider/PreSchoolSlider'
import Banner from '../Components/Banner/Baner'

function About () {
  const picture = [
    { picture: 1, position: 'left' },
    { picture: 4, position: 'bottom' },
    { picture: 5, position: 'right' },
    { picture: 9, position: 'left' },
    { picture: 10, position: 'right' }
  ]
  return (
    <div className='sectionContainer h-full w-full'>
      <Slider picture='4'>
        <PreSchoolSlider
          title='Kindergarten'
          animation
        />
      </Slider>
      {picture.map((state, index) => (
        <Slider key={index} picture={state.picture}>
          <TextContainer state={state.position} />
        </Slider>
      ))}
      {/* <div className='section'>
                <span>
                  <ResponsiveSlider />
                </span>
              </div> */}
      <div className='section'>
        <span>
          <ImageTextSlider />
        </span>
      </div>
      <div className='section'>
        <span>
          <Banner />
        </span>
      </div>

    </div>
  )
}

export default About
