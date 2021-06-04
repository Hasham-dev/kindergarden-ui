import Icon from '../Resources/abc.png'
import Hamburger from 'hamburger-react'
import Drawer from './Drawer/Drawer'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed z-10 uppercase mt-0 w-full px-5 py-2 font-bold flex justify-between items-center text-white'>
      <img className='w-20 h-15' src={Icon} alt='Icon' />
      <div className='flex space-x-4 text-lg'>
        <span className='py-2.5 hidden lg:block xs:hidden space-x-4'>Account</span>
        <span className='z-40'>
          <Hamburger size={20} color={isOpen ? 'black' : 'white'} toggled={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </span>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Link className='text-black pl-10' onClick={() => setIsOpen(false)} to='/'>Home</Link>
        <Link className='text-black pl-10' onClick={() => setIsOpen(false)} to='/about'>About</Link>
        <Link className='text-black pl-10' onClick={() => setIsOpen(false)} to='/contact'>Contact</Link>
      </Drawer>
    </header>
  )
}

export default Navbar
