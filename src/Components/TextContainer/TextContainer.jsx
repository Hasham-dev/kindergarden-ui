import React from 'react'
import Image from '../../Resources/1.jpg'

function TextContainer ({ state }) {
  return (
    <>
      {state === 'left' &&
        <div className='md:w-1/4 w-screen h-1/3 md:h-screen text-white bg-black md:relative absolute md:bottom-none bottom-0'>
          <span className='ml-10 md:mt-40 mt-10 flex flex-col'>
            {/* <span className='text-20 md:text-2xl'>
              Value
            </span> */}
            <span className='text-60 md:text-5xl font-bold'>
              Full Tme Service
            </span>
            <p className='pr-10 lg:mt-20 lg:text-3xl text-purple-300 text-sm md:text-lg font-bold'>
              FUll Time Service, a MUST for every child
            </p>
            <span className='flex flex-row lg:flex-col'>
              <span className='text-20 mt-10 md:w-full pr-10 w-1/2'>
                <img src={Image} className='w-52 lg:w-full lg:h-80 h-28 rounded-xl' alt='Slider PNG' />
              </span>
              <button class='w-1/2 md:w-auto w-30 h-14 border-2 px-0 md:px-10 mt-10 mr-10 py-2 text-lg text-purple-300 font-bold rounded-full'>
                Find out why
              </button>
            </span>
          </span>
        </div>}
      {state === 'bottom' &&
        <div className='w-screen h-1/3 absolute bottom-0 bg-black text-white'>
          <span className='ml-10 mt-10 md:mt-20 flex flex-col md:flex-row'>
            <span className='flex flex-row md:flex-col justify-center align-middle w-full md:w-1/2 mb-5 md:mb-0'>
              <span className='text-2xl md:text-5xl font-bold'>
                24/7 Monitoring & Support
              </span>
              <button class='w-52 md:w-60 text-center h-14 border-2 px-0 md:px-10 md:mt-10 mr-10 py-2 text-lg text-purple-300 font-bold rounded-full'>
                Find out why
              </button>
            </span>
            <span className='flex flex-row lg:flex-col w-full pr-10 md:pr-0 md:w-1/3 text-bold text-base md:text-2xl text-justify text-purple-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ullam placeat laudantium quidem voluptatem quisquam, fugiat quae maiores cumque blanditiis impedit adipisci, ab quasi amet error totam saepe praesentium libero?
            </span>
          </span>
        </div>}
      {state === 'right' &&
        <div className='md:w-1/4 w-screen md:h-screen h-1/3 bg-black text-white bottom-0 absolute right-0'>
          <span className='ml-10 md:mt-40 mt-10 flex flex-col'>
            <span className='text-60 md:text-5xl font-bold'>
              Full Tme Service
            </span>
            <p className='pr-10 lg:mt-20 lg:text-3xl text-purple-300 text-sm md:text-lg font-bold'>
              FUll Time Service, a MUST for every child
            </p>
            <span className='flex flex-row lg:flex-col'>
              <span className='text-20 mt-10 md:w-full pr-10 w-1/2'>
                <img src={Image} className='w-52 lg:w-full lg:h-80 h-28 rounded-xl' alt='Slider PNG' />
              </span>
              <button class='w-1/2 md:w-auto w-30 h-14 border-2 px-0 md:px-10 mt-10 mr-10 py-2 text-lg text-purple-300 font-bold rounded-full'>
                Find out why
              </button>
            </span>
          </span>
        </div>}
    </>
  )
}

export default TextContainer
