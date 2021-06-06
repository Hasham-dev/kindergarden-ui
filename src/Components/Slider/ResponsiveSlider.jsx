import React from 'react'
import Slider from 'react-slick'

export default function ResponsiveSlider () {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className='w-full h-screen bg-gray-200 dark:bg-gray-900 py-10'>
      <div className='md:p-20 p-2 mx-auto mt-40'>
        <Slider {...settings}>
          <div className='max-w-sm rounded bg-white overflow-hidden shadow-lg'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Mountain</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum temporibus hic soluta voluptatibus recusandae minima architecto repellendus quas at eius itaque rem, cumque necessitatibus numquam, molestiae tempore suscipit consectetur!
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
            </div>
          </div>
          <div className='max-w-sm rounded bg-white overflow-hidden shadow-lg'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Mountain</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid nam beatae laboriosam neque ipsa vel distinctio et. Praesentium laudantium cumque nobis perferendis quod eius iure laborum vitae illo iusto.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
            </div>
          </div>
          <div className='max-w-sm rounded bg-white overflow-hidden shadow-lg'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Mountain</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, cumque vel! Earum nulla est ducimus alias assumenda, corporis, architecto iste obcaecati natus autem, quasi fuga necessitatibus commodi nemo explicabo laudantium.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
            </div>
          </div>
          <div className='max-w-sm rounded bg-white overflow-hidden shadow-lg'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Mountain</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, cumque vel! Earum nulla est ducimus alias assumenda, corporis, architecto iste obcaecati natus autem, quasi fuga necessitatibus commodi nemo explicabo laudantium.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
