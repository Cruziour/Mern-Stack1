import React from 'react'
import {Outlet} from 'react-router-dom'
import { Card, Header } from './components'


const Layout = () => {
  return (
    <div className='w-full'>
      <div><Header /></div>
      <div className='w-full flex flex-row'>
        <div className='w-1/2'><Outlet /></div>
        <div className='w-1/2'><Card /></div>
      </div>
    </div>
  )
}

export default Layout
