import React, { useState } from 'react'
import Image from '../../Resources/1.jpg'
import Modal from '../Modal/Modal'

function TextContainer ({ state }) {
  const [showModal, setShowModal] = useState(false)
  const [Id, setId] = useState()

  const showModalToggler = (id) => {
    setId(id)
    setShowModal(true)
  }

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        Id={Id}
      />
      {state === 'left' &&
        <div className='relative h-full'>
          <div className='md:w-1/4 w-screen inset-x-0 md:h-screen h-1/3 bg-white text-black bottom-0 absolute'>
            <span className='ml-10 md:mt-40 mt-10 flex flex-col'>
              <span className='text-60 text-2xl font-bold'>
                Full Tme Service
              </span>
              <p className='pr-10 lg:mt-4 lg:text-base text-black text-base font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio nisi ea esse iusto perferendis, magni ullam in eveniet recusandae ratione, porro harum. Et ex omnis dolorum fugit enim distinctio.
              </p>
              <span className='flex flex-row lg:flex-col'>
                <span className='text-20 mt-14 md:w-full pr-10 w-1/2'>
                  <img src={Image} className='w-52 lg:w-full lg:h-80 h-28 rounded-xl' alt='Slider PNG' />
                </span>
                <button
                  class='w-1/2 ml-20 w-30 h-14 border-purple-400 border-4 px-0 md:px-10 mt-10 py-2 text-lg font-bold rounded-full text-black'
                  onClick={() => showModalToggler('IMAGE1')}
                >
                  Find out why
                </button>
              </span>
            </span>
          </div>
        </div>}
      {state === 'bottom' &&
        <div className='relative h-full'>
          <div className='h-1/3 absolute inset-x-0 bottom-0 bg-white'>
            <span className='mx-40 mt-10 md:mt-20 flex flex-col md:flex-row'>
              <span className='flex flex-row md:flex-col justify-center align-middle md:w-1/2 mb-5 md:mb-0'>
                <span className='text-2xl font-bold'>
                  24/7 Monitoring & Support
                </span>
                <button
                  class='w-52 md:w-60 text-center h-14 border-4 border-purple-400 px-0 md:px-10 mt-10 ml-5 py-2 text-lg font-bold rounded-full'
                  onClick={() => showModalToggler('IMAGE2')}
                >
                  Find out why
                </button>
              </span>
              <span className='flex flex-row lg:flex-col w-full pr-10 md:pr-0 text-base text-justify'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ullam placeat laudantium quidem voluptatem quisquam, fugiat quae maiores cumque blanditiis impedit adipisci, ab quasi amet error totam saepe praesentium libero?
              </span>
            </span>
          </div>
        </div>}
      {state === 'right' &&
        <div className='relative h-full'>
          <div className='md:w-1/4 w-screen inset-x-0 md:h-screen h-1/3 bg-white text-black bottom-0 absolute right-0'>
            <span className='ml-10 md:mt-40 mt-10 flex flex-col'>
              <span className='text-60 text-2xl font-bold'>
                Full Tme Service
              </span>
              <p className='pr-10 lg:mt-4 lg:text-base text-black text-base font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio nisi ea esse iusto perferendis, magni ullam in eveniet recusandae ratione, porro harum. Et ex omnis dolorum fugit enim distinctio.
              </p>
              <span className='flex flex-row lg:flex-col'>
                <span className='text-20 mt-10 md:w-full pr-10 w-1/2'>
                  <img src={Image} className='w-52 lg:w-full lg:h-80 h-28 rounded-xl' alt='Slider PNG' />
                </span>
                <button
                  class='w-1/2 border-purple-400 w-30 h-14 border-4 px-0 md:px-10 mt-10 ml-20 py-2 text-lg text-black font-bold rounded-full'
                  onClick={() => showModalToggler('IMAGE3')}
                >
                  Find out why
                </button>
              </span>
            </span>
          </div>
        </div>}
    </>
  )
}

export default TextContainer
