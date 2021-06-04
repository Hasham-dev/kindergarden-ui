import React from 'react'

function TextContainer ({ state }) {
  return (
    <>
      {state === 'left' &&
        <div className='md:w-1/4 w-screen h-1/2 md:h-screen bg-white md:relative absolute md:bottom-none bottom-0'>
          <span className='ml-10 md:mt-40 mt-10 flex flex-col'>
            <span className='text-20 md:text-2xl'>
              Value
            </span>
            <span className='text-60 md:text-5xl font-bold'>
              Pay Less for Electricity
            </span>
            <p className='pr-10 text-justify font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nemo iure odit unde, maiores nostrum ratione praesentium voluptates dolore, esse porro quisquam debitis dolores laborum aperiam adipisci tempora ut nisi!
            </p>
          </span>
        </div>}
      {state === 'bottom' &&
        <div className='w-screen h-1/3 absolute bottom-0 bg-white'>
          <span className='ml-10 mt-10 md:mt-20 flex flex-col md:flex-row'>
            <span className='w-1/2 flex flex-col'>
              <span className='text-20 md:text-2xl'>
                Value
              </span>
              <span className='text-60 md:text-5xl font-bold'>
                Pay Less for Electricity
              </span>
            </span>
            <span className='w-screen md:w-1/2'>
              <p className='pr-20 md:pr-40 text-justify font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque at pariatur, repellat nulla, voluptate fugit saepe atque soluta cumque, autem ea velit. Culpa deserunt vero, nesciunt doloremque eaque cum.
              </p>
            </span>
          </span>
        </div>}
      {state === 'right' &&
        <div className='md:w-1/4 w-screen md:h-screen h-1/3 bg-white bottom-0 absolute right-0'>
          <span className='ml-10 md:mt-40 mt-10 flex flex-col'>
            <span className='text-20 md:text-2xl'>
              Value
            </span>
            <span className='text-60 md:text-5xl font-bold'>
              Pay Less for Electricity
            </span>
            <p className='pr-10 text-justify font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum delectus autem id sit soluta, ducimus iste porro fuga iure unde at, suscipit vero. Impedit fugit possimus numquam doloribus distinctio asperiores!
            </p>
          </span>
        </div>}
    </>
  )
}

export default TextContainer
