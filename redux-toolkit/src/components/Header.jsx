import React from 'react'
import { Link } from 'react-router-dom'
import  Logo  from '../assets/Logo.png'

const Header = () => {
  return (
    <>
    <header className='w-full h-20 bg-white shadow-sm shadow-orange-500 px-10'>
        <nav className='w-1/2 h-20 flex justify-around items-center text-lg font-semibold'>
            <Link to={'/'}><img src={Logo} alt="" className='w-16 h-16' /></Link>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>Categories</Link>
            <Link to={'/'}>About Us</Link>
        </nav>
        
    </header> 
    </>
  )
}

export default Header
