import React from 'react'

function WindowSlide ({ picture, filter, title, leftBtnText, rightBtnText, animation }) {
  return (
    <>
      <div className={`${filter} mb-auto pt-40 tracking-normal text-center text-3xl lg:text-5xl uppercase font-extrabold flex justify-center flex-col`}>
        {title}
        <span
          className='text-center text-2xl font-bold mt-2'
        >
          Register Now <span className='underline'>No Presence Required</span>
        </span>
      </div>
      <div className='flex space-x-4 flex-col md:flex-row  lg:text-lg flex-wrap justify-center items-center space-y-3 md:space-y-0 pb-8'>
        <button class='bg-purple-800 ml-2 w-4/5 md:w-auto hover:bg-gray-500 text-white font-bold px-20 py-2 rounded-full'>
          {leftBtnText}
        </button>
        <button class='bg-gray-100 w-4/5 md:w-auto hover:bg-gray-50 text-black font-bold px-20 py-2 rounded-full'>
          {rightBtnText}
        </button>
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

export default WindowSlide
