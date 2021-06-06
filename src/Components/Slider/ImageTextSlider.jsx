import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

export default function ImageTextSlider () {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const slider1 = useRef(null)
  const slider2 = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnHover: true
  }

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [])

  return (
    <div className='h-screen bg-gray-200 dark:bg-gray-900 py-10'>
      <div className='md:p-20 p-2 mx-auto mt-20 md:mt-40'>
        <Slider asNavFor={nav2} ref={slider1} {...settings}>
          <div className='w-1/3 rounded bg-white overflow-hidden shadow-lg'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Mountain</div>
              <p className='text-gray-700 text-base'>
                Lorem lororororororr adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum temporibus hic soluta voluptatibus recusandae minima architecto repellendus quas at eius itaque rem, cumque necessitatibus numquam, molestiae tempore suscipit consectetur!
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
            </div>
          </div>
          <div className='w-1/3 rounded bg-white overflow-hidden shadow-lg'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Mountain</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor ssssssssectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum temporibus hic soluta voluptatibus recusandae minima architecto repellendus quas at eius itaque rem, cumque necessitatibus numquam, molestiae tempore suscipit consectetur!
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
            </div>
          </div>
          <div className='w-1/3 rounded bg-white overflow-hidden shadow-lg'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Mountain</div>
              <p className='text-gray-700 text-base'>
                Lorem sssssssconsectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum temporibus hic soluta voluptatibus recusandae minima architecto repellendus quas at eius itaque rem, cumque necessitatibus numquam, molestiae tempore suscipit consectetur!
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
            </div>
          </div>
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={1}
          swipeToSlide
          focusOnSelect
          {...settings}
        >
          <div className='px-6 py-4'>
            <p className='text-gray-700 text-base md:w-1/2 md:float-right font-semibold'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum temporibus hic soluta voluptatibus recusandae minima architecto repellendus quas at eius itaque rem, cumque necessitatibus numquam, molestiae tempore suscipit consectetur!
            </p>
          </div>
          <div className='px-6 py-4'>
            <p className='text-gray-700 text-base md:w-1/2 md:float-right font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatum est, magnam ducimus praesentium cumque quo assumenda aspernatur consectetur corporis vel atque, voluptates porro doloribus ipsam incidunt voluptas commodi consequuntur.
            </p>
          </div>
          <div className='px-6 py-4'>
            <p className='text-gray-700 text-base md:w-1/2 md:float-right font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugiat quibusdam quo explicabo maxime dolore voluptate asperiores ullam, ex eaque assumenda. Odio ipsa rerum quia ducimus eaque fugit minima perferendis!
            </p>
          </div>
        </Slider>
      </div>
    </div>
  )
}
