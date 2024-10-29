import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-12 bg-gray-600 flex justify-around items-center text-white'>
      <p> © UpSkill Mafia All rights reserved.</p>
      <Link to='signup' className='w-fit h-fit py-1 px-2 bg-white bg-opacity-15 text-white rounded-md'>Register for Free</Link>
    </div>
  )
}

export default Footer
