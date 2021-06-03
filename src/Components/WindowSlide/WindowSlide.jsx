import React from 'react'

function WindowSlide ({ picture, filter, leftBtnText, rightBtnText }) {
  return (
    <>
      <div className={`${filter} mb-auto pt-40 tracking-normal text-center text-5xl uppercase font-bold flex justify-center flex-col`}>
        Inner slide content
        <span
          className='text-center text-lg'
        >Lorem some data
        </span>
      </div>
      {/* <div className='flex space-x-4 flex-col md:flex-row flex-wrap justify-center items-center space-y-3 md:space-y-0 pb-8'>
        <button class='bg-gray-800 ml-2 w-4/5 md:w-auto hover:bg-gray-500 text-white font-bold px-20 py-2 rounded-full'>
          {leftBtnText}
        </button>
        <button class='bg-gray-100 w-4/5 md:w-auto hover:bg-gray-50 text-black font-bold px-20 py-2 rounded-full'>
          {rightBtnText}
        </button>
      </div> */}
    </>
  )
}

export default WindowSlide
