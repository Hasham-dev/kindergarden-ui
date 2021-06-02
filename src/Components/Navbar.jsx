import Icon from '../Resources/Icon.png'
import Hamburger from 'hamburger-react'

function Navbar () {
  return (
    <header className='fixed uppercase mt-0 w-full px-5 py-2 font-bold flex justify-between items-center filter invert'>
      <img className='w-10 h-25' src={Icon} alt='Icon' />
      <div className='hidden lg:block xs:hidden space-x-4 text-lg'>
        <span>Link 1</span>
        <span>Link 2</span>
        <span>Link 3</span>
        <span>Link 4</span>
        <span>Link 5</span>
        <span>Link 6</span>
      </div>
      <div className='flex space-x-4 text-lg'>
        <span className='py-2.5 hidden lg:block xs:hidden space-x-4'>Shop</span>
        <span className='py-2.5 hidden lg:block xs:hidden space-x-4'>Account</span>
        <Hamburger size={20} />
      </div>
    </header>
  )
}

export default Navbar
