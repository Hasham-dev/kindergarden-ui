import React from 'react'

export default function Drawer ({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        'fixed overflow-scroll md:bg-gray-500 z-10 md:bg-opacity-25 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-all opacity-100 duration-100 translate-x-0  '
          : ' transition-all opacity-0 md:opacity-100 translate-x-full  ')
      }
    >
      <section
        className={
          ' w-screen max-w-lg right-0 absolute overflow-scroll bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className='relative w-screen max-w-lg pb-10 flex flex-col space-y-1 overflow-y-scroll h-screen'>
          <header className='p-4 font-bold text-lg text-center text-black'>Navbar</header>
          {children}
        </article>
      </section>
      <section
        className=' w-screen h-full cursor-pointer '
        onClick={() => {
          setIsOpen(false)
        }}
      />
    </main>
  )
}
