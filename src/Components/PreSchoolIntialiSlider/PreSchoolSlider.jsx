import React from 'react'

function PreSchoolSlider ({ title, animation }) {
  return (
    <>
      <div className='mb-auto pt-40 text-white tracking-normal text-center text-3xl lg:text-4xl uppercase font-bold flex justify-center flex-col'>
        {title}
        <span
          className='text-center text-base font-bold mt-2'
        >
          Register Now <span className='underline'>No Presence Required</span>
        </span>
      </div>
      <div className='flex space-x-14 flex-row flex-wrap lg:text-xl justify-center items-center space-y-1 md:space-y-0 pb-8'>
        <span className='flex flex-col text-center  '>
          <span className='text-white font-bold font-xs hidden lg:block md:text-xl mt-4'>
            Full time <br />
            <span className='text-base'>
              8:00 - 17:30
            </span>
          </span>
        </span>
        <span className='flex flex-col text-center'>
          <span className='text-white font-bold font-xs hidden lg:block md:text-xl mt-4'>
            4 Meals <br />
            <span className='text-base'>
              Home cooked
            </span>
          </span>
        </span>
        <span className='flex flex-col text-center'>
          <span className='text-white font-bold font-xs hidden lg:block md:text-xl mt-4'>
            Age Based <br />
            <span className='text-base'>
              Programs
            </span>
          </span>
        </span>
        <span className='flex flex-col text-center'>
          <span className='text-white font-bold font-xs hidden lg:block md:text-xl mt-4'>
            Fun <br />
            <span className='text-base'>
              Teachers
            </span>
          </span>
        </span>
        <span className='lg:w-1/5 w-full ml-10 lg:ml-0 flex-1 md:flex-none mt-4'>
          <button class='bg-transparent w-4/5 border-4 md:w-auto hover:bg-gray-50 text-white font-extrabold px-20 py-2 rounded-full'>
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
