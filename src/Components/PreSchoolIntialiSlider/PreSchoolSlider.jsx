import React from 'react'

function PreSchoolSlider ({ title, animation }) {
  return (
    <>
      <div className='mb-auto ml-10 lg:ml-0 text-white pt-40 tracking-normal flex-wrap text-center text-3xl lg:text-5xl uppercase font-extrabold flex justify-center flex-col'>
        {title}
      </div>
      <div className='flex space-x-4 flex-row flex-wrap lg:text-lg justify-center items-center space-y-1 md:space-y-0 pb-8'>
        <span className='flex w-1/5 flex-col lg:flex-row'>
          <svg xmlns='http://www.w3.org/2000/svg' class='h-10 md:h-16 w-10 md:w-16 mt-4' fill='none' viewBox='0 0 24 24' stroke='white'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          <span className='text-white font-bold font-xs md:text-lg w-30 mt-4'>
            8:00 - 17:30
            <br />
            Full time
          </span>
        </span>
        <span className='flex w-1/5 flex-col lg:flex-row'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-10 md:h-16 w-10 md:w-16 mt-4' fill='none' viewBox='0 0 24 24' stroke='white'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
          </svg>
          <span className='text-white font-bold font-xs md:text-lg w-30 mt-4'>
            Study
            <br />
            Home work, fun, English
            <br />
            advance learning
          </span>
        </span>
        <span className='flex w-1/5 flex-col lg:flex-row'>
          <svg xmlns='http://www.w3.org/2000/svg' class='h-10 md:h-16 w-10 md:w-16 mt-4' fill='none' viewBox='0 0 24 24' stroke='white'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
          </svg>
          <span className='text-white font-bold font-xs md:text-lg w-30 mt-4'>
            Age based programs,
            <br />
            Having fun while
            <br />
            learning.
          </span>
        </span>
        <span className='lg:w-1/5 w-full ml-10 lg:ml-0 flex-1 md:flex-none'>
          <button class='bg-gray-50 ml-10 w-4/5 border-2 md:w-auto hover:bg-gray-50 text-black font-bold px-20 py-2 rounded-full'>
            Reister Now
          </button>
        </span>

      </div>
      {animation &&
        <span class='flex justify-center'>
          <svg xmlns='http://www.w3.org/2000/svg' className='animate-bounce h-20 w-20' viewBox='0 0 20 20' fill='white'>
            <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' />
          </svg>
        </span>}
    </>
  )
}

export default PreSchoolSlider
