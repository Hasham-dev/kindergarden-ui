import React from 'react'
import { FullPage, Slide } from 'react-full-page'

function Home () {
  return (
    <FullPage duration={700}>
      <Slide className='bg-blue-700'>
        <h1 className='py-20'>Inner slide content</h1>
      </Slide>
      <Slide className='bg-green-200'>
        <h1 className='py-20'>Another slide content</h1>
      </Slide>
      <Slide className='bg-pink-200'>
        <h1 className='py-20'>Another slide content</h1>
      </Slide>
      <Slide className='bg-yellow-200'>
        <h1 className='py-20'>Another slide content</h1>
      </Slide>
    </FullPage>
  )
}

export default Home
