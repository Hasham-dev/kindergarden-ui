import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import Image1 from '../../Resources/1.jpg'
import Image2 from '../../Resources/2.jpg'
import Image3 from '../../Resources/3.jpg'

export default function ImageTextSlider () {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const slider1 = useRef(null)
  const slider2 = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    pauseOnHover: true
  }

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [])

  return (
    <div className='h-screen bg-black dark:bg-gray-900 py-10'>
      <div className='md:p-20 p-2 md:mx-40 mt-10 md:mt-10'>
        <Slider asNavFor={nav2} ref={slider1} {...settings}>
          <div className='w-1/3 rounded h-1/2 overflow-hidden shadow-lg'>
            <div className='px-10 py-4'>
              <img src={Image1} className='w-full h-96' alt='1st' />
            </div>
          </div>
          <div className='w-1/3 rounded h-1/2 overflow-hidden shadow-lg'>
            <div className='px-10 py-4'>
              <img src={Image2} className='w-full h-96' alt='2nd' />
            </div>
          </div>
          <div className='w-1/3 rounded h-1/2 overflow-hidden shadow-lg'>
            <div className='px-10 py-4'>
              <img src={Image3} className='w-full h-96' alt='3rd' />
            </div>
          </div>
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={1}
          swipeToSlide
          focusOnSelect
          {...{ ...settings, arrows: false }}
        >
          <div className='px-6 py-4'>
            <p className='text-white text-base md:w-1/2 md:float-right font-semibold'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum temporibus hic soluta voluptatibus recusandae minima architecto repellendus quas at eius itaque rem, cumque necessitatibus numquam, molestiae tempore suscipit consectetur!
            </p>
          </div>
          <div className='px-6 py-4'>
            <p className='text-white  text-base md:w-1/2 md:float-right font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatum est, magnam ducimus praesentium cumque quo assumenda aspernatur consectetur corporis vel atque, voluptates porro doloribus ipsam incidunt voluptas commodi consequuntur.
            </p>
          </div>
          <div className='px-6 py-4'>
            <p className='text-white  text-base md:w-1/2 md:float-right font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugiat quibusdam quo explicabo maxime dolore voluptate asperiores ullam, ex eaque assumenda. Odio ipsa rerum quia ducimus eaque fugit minima perferendis!
            </p>
          </div>
        </Slider>
      </div>
    </div>
  )
}
