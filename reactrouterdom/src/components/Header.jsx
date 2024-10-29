import React from 'react'
import Logo from '../assets/Logo.jpg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-20 bg-white shadow-orange-300 shadow-lg px-20 flex justify-between items-center'>
      <div>
        <Link to='dashboard'><img src={Logo} alt="" className='w-20 h-20'/></Link>
      </div>
      <div className='text-xl font-semibold'>
        <Link to={'/'}>Home</Link>
      </div>
      <div className='text-md font-semibold flex gap-x-4'>
        <Link to='login' className='bg-green-500 px-3 py-1 rounded-md'>Login</Link>
        <Link to='signup' className='bg-green-500 px-3 py-1 rounded-md'>SingUp</Link>
      </div>
    </div>
  )
}

export default Header
