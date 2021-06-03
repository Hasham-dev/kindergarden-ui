import Icon from '../Resources/abc.png'
import Hamburger from 'hamburger-react'

function Navbar () {
  return (
    <header className='fixed z-10 uppercase mt-0 w-full px-5 py-2 font-bold flex justify-between items-center text-white'>
      <img className='w-20 h-15' src={Icon} alt='Icon' />
      <div className='hidden lg:block xs:hidden space-x-4 text-lg'>
        <span>Home</span>
        <span>About</span>
        <span>Gallery</span>
        <span>Contact Us</span>
      </div>
      <div className='flex space-x-4 text-lg'>
        <span className='py-2.5 hidden lg:block xs:hidden space-x-4'>Account</span>
        <Hamburger size={20} />
      </div>
    </header>
  )
}

export default Navbar
