import React from 'react'

export default function Banner () {
  return (
    <div className='flex flex-col space-y-2 text-white bg-black'>
      <span className='flex flex-col lg:p-20 space-y-2 lg:mx-10 mx-0.5 lg:flex-row mt-10 lg:mt-32'>
        <span className='w-full lg:w-1/2 text-3xl p-10'>
          Connect with <span className='lg:font-bold text-purple-300'>ABC Tirana</span> <br />
          <span className='lg:text-6xl text-2xl font-bold'>Save up to $200, review follow & tag us on.</span>
        </span>
        <span className='w-full lg:w-1/2 text-3xl p-10'>
          Prices <br />
          <span className='lg:text-6xl text-2xl font-bold'>Check our prices & features.</span> <br />
          <button className='lg:w-1/2 border-2 flex-1 w-full font-bold rounded-full border-purple-300 text-xl px-15 py-4 lg:mx-32 mt-10'>Learn more</button>
        </span>
      </span>
      <span className='w-full mx-auto flex flex-row text-center align-middle justify-center'>
        <span className='w-full flex flex-col justify-center align-middle p-10'>
          <button className='lg:w-1/4 flex-1 w-full rounded-full text-white mx-auto font-bold bg-purple-500 text-xl px-15 py-4 mt-10'>Register Now</button>
          <span className='lg:font-bold text-2xl lg:text-xl mt-4'>Contact our Specialists & support team for any question</span> <br />
          <span className='font-bold text-purple-300 text-3xl underline'>ABC Triana Support Team</span>
        </span>
      </span>
    </div>
  )
}
