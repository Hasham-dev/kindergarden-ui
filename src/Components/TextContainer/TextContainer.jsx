import React from 'react'

function TextContainer ({ state }) {
  return (
    <>
      {state === 'left' &&
        <div className='md:w-1/4 w-screen h-1/3 md:h-screen bg-white md:relative absolute md:bottom-none bottom-0'>
          <span className='ml-10 md:mt-40 mt-10 flex flex-col'>
            <span className='text-20 md:text-2xl'>
              Value
            </span>
            <span className='text-60 md:text-5xl font-bold'>
              Pay Less for Electricity
            </span>
            <p className='pr-10 text-sm md:text-lg text-justify font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi et mollitia facilis illum nulla quisquam itaque! Repudiandae, minima tempore, a animi atque doloremque dolore accusamus illum ea sapiente voluptatum.
              Sint at ipsa ullam aut sapiente impedit ea possimus veritatis sit quas perspiciatis autem odit doloribus aperiam dicta rem, corporis deleniti magni asperiores itaque iusto excepturi quae? Alias, nostrum earum!
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
              <p className='pr-20 md:pr-40 text-sm md:text-lg text-justify font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus hic earum, ipsa non rerum voluptate error nulla voluptates ea doloribus cupiditate id dolorem blanditiis, debitis, quaerat voluptatum vitae placeat officia!
                Exercitationem commodi nihil expedita esse? Repellat eum id commodi, ipsa delectus aut non tempora optio ex, porro at ad sunt ratione. Doloribus, veritatis at nulla et ad sint quas ullam?
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
            <p className='pr-10 text-sm md:text-lg text-justify font-semibold'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum culpa, maiores dolor odio unde voluptatibus voluptate, maxime quo quod nobis, voluptates corrupti porro animi facere totam nulla quisquam facilis veritatis!
              Tempora adipisci laboriosam modi tenetur accusamus impedit? Illo earum nihil eos, ex rerum delectus aspernatur vero tempora inventore pariatur molestias enim magnam dolorem voluptas dignissimos ipsa, minus mollitia? Delectus, veritatis.
            </p>
          </span>
        </div>}
    </>
  )
}

export default TextContainer
