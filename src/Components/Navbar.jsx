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
    <header className='fixed z-10 uppercase mt-0 w-full px-5 py-2 font-bold flex justify-between items-center text-white'>
      <img className='w-20 h-15' src={Icon} alt='Icon' />
      <div className='flex space-x-4 text-lg'>
        <span className='py-2.5 hidden lg:block xs:hidden space-x-4'>Account</span>
        <span className='z-40'>
          <Hamburger size={20} color={isOpen ? 'black' : 'white'} toggled={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </span>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Home</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/about' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/about'>Nursery</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/contact' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/contact'>Kindergarten</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/preschool' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Preschool</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/afterschool' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>After School</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/summercamp' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Summer camp</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/clinic' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Clinic</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/news' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>News</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/findus' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Find us</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/support' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Support</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/career' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>Carreer</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/privacy' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>privacy</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/legacy' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>legacy</Link>
        <Link className={`pl-10 my-2 mx-20 rounded-md p-2 ${pathname === '/aboutus' ? 'bg-purple-500' : 'text-black'}`} onClick={() => setIsOpen(false)} to='/'>About Us</Link>
      </Drawer>
    </header>
  )
}

export default Navbar
