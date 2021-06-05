import React from 'react'
function Card () {
  return (
    <>
      <div className='w-full h-screen bg-gray-200 dark:bg-gray-900 py-10'>
        <div className='container mx-auto lg:mt-40 px-6 flex justify-center'>
          <div className='w-full space-y-2'>
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className='flex flex-col lg:flex-row mx-auto dark:bg-gray-800 shadow rounded lg:space-x-3'>
              <div className='w-full lg:w-1/3 flex-col flex bg-white justify-center items-center px-12 py-8'>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>$90</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Hourly Rate</h2>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>$32,000</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Total Earned</h2>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>2000</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Hours Worked</h2>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>95%</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Success Rate</h2>
                <div className='flex items-center'>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 text-gray-200 dark:text-gray-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                </div>
              </div>
              <div className='w-full lg:w-1/3 flex-col flex bg-white justify-center items-center px-12 py-8'>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>$90</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Hourly Rate</h2>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>$32,000</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Total Earned</h2>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>2000</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Hours Worked</h2>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>95%</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Success Rate</h2>
                <div className='flex items-center'>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 text-gray-200 dark:text-gray-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                </div>
              </div>
              <div className='w-full lg:w-1/3 flex-col flex justify-center bg-white items-center px-12 py-8'>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>$90</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Hourly Rate</h2>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>$32,000</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Total Earned</h2>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>2000</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Hours Worked</h2>
                <h2 className='text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal'>95%</h2>
                <h2 className='text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal'>Success Rate</h2>
                <div className='flex items-center'>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                  <svg className='cursor-pointer w-4 text-gray-200 dark:text-gray-400 icon icon-tabler icon-tabler-star' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path fill='currentColor' d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                  </svg>
                </div>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </>
  )
}
export default Card
