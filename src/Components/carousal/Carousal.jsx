import React from 'react'
import Slider from 'react-slick'
import Picture1 from '../../Resources/1.jpg'
export default function SimpleSlider () {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className='pt-40 md:px-20 px:0 h-screen bg-green-100'>
      <h1>Slider</h1>
      <Slider {...settings}>
        <div>
          <span className='bg-picture-1 w-screen h-screen bg-cover' />
          <h3>1</h3>
        </div>
        <div>
          <img src={Picture1} alt='Lorem' className='w-screen h-80' />
          <h3>2</h3>
        </div>
        <div>
          <span className='bg-picture-3 w-screen z-10 h-screen bg-cover' />
          <h3>3</h3>
        </div>
        {/* <div>
        <h3>4</h3>
        </div>
        <div>
        <h3>5</h3>
        </div>
        <div>
        <h3>6</h3>
    </div> */}
      </Slider>
    </div>
  )
}
