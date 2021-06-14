import Icon from '../Resources/abc.png'
import Hamburger from 'hamburger-react'
import Drawer from './Drawer/Drawer'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const { location: { pathname } } = useHistory()
  window.fullpage_api?.setAllowScrolling(!isOpen)
  return (
    <header className='fixed bg-primaryBlack bg-opacity-90 z-10 uppercase mt-0 h-8 w-full font-semibold px-5 flex justify-between items-center text-white text-sm'>
      <img className='w-14 h-14' src={Icon} alt='Icon' />
      <div className='space-x-2 pt-1'>
        <span>Nursery</span>
        <span>Kindergarden</span>
        <span>Preschool</span>
        <span>After School</span>
        <span>Summer Camp</span>
      </div>
      <div className='flex'>
        <span className='py-2.5 hidden lg:block xs:hidden pt-4'>Account</span>
        <span className='z-40'>
          <Hamburger size={16} color={isOpen ? 'black' : 'white'} toggled={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </span>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <span className='flex flex-col space-y-1'>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Home</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/about' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/about'>Nursery</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/contact' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/contact'>Kindergarten</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/preschool' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Preschool</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/afterschool' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>After School</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/summercamp' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Summer camp</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/clinic' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Clinic</Link>
        </span>
        <span className='flex flex-col space-y-1'>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/news' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>News</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/findus' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Find us</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/support' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Support</Link>
        </span>
        <span className='flex flex-col space-y-1'>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/career' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Carreer</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/privacy' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>privacy</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/legacy' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>legacy</Link>
          <Link className={`pl-10 my-1 mx-10 rounded-md p-2 ${pathname === '/aboutus' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>About Us</Link>
        </span>
      </Drawer>
    </header>
  )
}

export default Navbar
