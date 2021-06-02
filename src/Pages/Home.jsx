import React from 'react'
import { FullPage, Slide } from 'react-full-page'

function Home () {
  return (
    <FullPage duration={500}>
      <Slide className='bg-picture-1 bg-center bg-cover flex flex-col h-screen'>
        <div className='pt-40 tracking-normal text-center text-4xl uppercase font-bold flex justify-center flex-col'>
          Inner slide content
          <span className='text-center text-lg'>Lorem some data</span>
        </div>
        <div className='flex space-x-4 justify-center absolute inset-x-0 bottom-10'>
          <button class='bg-gray-800 hover:bg-gray-500 text-white font-bold px-20 py-2 rounded-full'>
            Button
          </button>
          <button class='bg-gray-100 hover:bg-gray-50 text-black font-bold px-20 py-2 rounded-full'>
            Button
          </button>
        </div>
      </Slide>
      <Slide className='bg-picture-2 bg-center bg-cover flex flex-col h-screen'>
        <div className='mb-auto pt-40 tracking-normal text-center text-4xl uppercase font-bold flex justify-center flex-col'>
          Inner slide content
          <span className='text-center text-lg'>Lorem some data</span>
        </div>
        <div className='flex space-x-4 justify-center pb-8'>
          <button class='bg-gray-800 hover:bg-gray-500 text-white font-bold px-20 py-2 rounded-full'>
            Button
          </button>
          <button class='bg-gray-100 hover:bg-gray-50 text-black font-bold px-20 py-2 rounded-full'>
            Button
          </button>
        </div>
      </Slide>
      <Slide className='bg-picture-3 bg-center bg-cover flex flex-col h-screen'>
        <div className='mb-auto pt-40 tracking-normal text-center text-4xl uppercase font-bold flex justify-center flex-col'>
          Inner slide content
          <span className='text-center text-lg'>Lorem some data</span>
        </div>
        <div className='flex space-x-4 justify-center pb-8'>
          <button class='bg-gray-800 hover:bg-gray-500 text-white font-bold px-20 py-2 rounded-full'>
            Button
          </button>
          <button class='bg-gray-100 hover:bg-gray-50 text-black font-bold px-20 py-2 rounded-full'>
            Button
          </button>
        </div>
      </Slide>
      <Slide className='bg-picture-4 bg-center bg-cover flex flex-col h-screen'>
        <div className='mb-auto pt-40 tracking-normal text-center text-4xl uppercase font-bold flex justify-center flex-col'>
          Inner slide content
          <span className='text-center text-lg'>Lorem some data</span>
        </div>
        <div className='flex space-x-4 justify-center pb-8'>
          <button class='bg-gray-800 hover:bg-gray-500 text-white font-bold px-20 py-2 rounded-full'>
            Button
          </button>
          <button class='bg-gray-100 hover:bg-gray-50 text-black font-bold px-20 py-2 rounded-full'>
            Button
          </button>
        </div>
      </Slide>
    </FullPage>
  )
}

export default Home
