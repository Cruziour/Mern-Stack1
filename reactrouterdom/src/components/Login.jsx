import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-80 h-auto border border-red-500 px-8 py-10 rounded'>
        <h1 className='text-xl font-semibold'>Login</h1>
        <form>
            <div className='py-2'>
                <label htmlFor="email" className='font-semibold text-lg'>Email</label>
                <input type="email" name="email" id="email" className='w-full h-8 border border-black rounded px-2 py-1'/>
            </div>
            <div className='py-2'>
                <label htmlFor="password" className='font-semibold text-lg'>Password</label>
                <input type="password" name="password" id="password" className='w-full h-8 border border-black rounded px-2 py-1'/>
            </div>
            <div  className='bg-green-500 text-center font-semibold text-lg text-white rounded w-full mt-3 '>
                <input type="button" value="Login" />
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
