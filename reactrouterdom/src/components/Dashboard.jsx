import React from 'react'
import Pencil from '../assets/Pencil.png'
import Skating from '../assets/Skating.jpg'

const Dashboard = () => {
  return (
    <div className="container mx-auto py-10">

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Post Section */}
        <div className="col-span-2 row-span-3 bg-white p-4 rounded-lg shadow">
          <img src={Skating} alt="" />
          <h2 className="text-2xl font-bold">Title Heading</h2>
          <p className="text-gray-400 text-sm">Title description, April 7, 2014</p>
          <p className="text-gray-700 mt-4">
            Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.
            Vivamus porttitor magna enim, ac accumsan tortor cursus at.
          </p>
          <button className="mt-4 bg-gray-200 px-4 py-2 rounded">Read More</button>
        </div>

        {/* Profile Section */}
        <div className="col-span-1 h-fit bg-white p-4 rounded-lg shadow">
          <img src={Pencil} alt="Profile" className="w-full h-64 object-cover rounded-lg" />
          <h2 className="mt-4 text-xl font-semibold">My Name</h2>
          <p className="text-gray-600 mt-2">
            Just me, myself and I, exploring the universe of unknown. I have a heart of love and a
            interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.
          </p>
        </div>

        {/* Popular Posts Section */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Popular Posts</h2>
          <ul>
            <li className="text-gray-700 mb-2">Lorem</li>
            <li className="text-gray-700 mb-2">Ipsum</li>
            <li className="text-gray-700">Dolor</li>
          </ul>
        </div>

        {/* Tags Section */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Tags</h2>
          <div className='flex gap-x-4'>
            <p className='text-white px-3 py-1 bg-black w-fit h-fit'>X</p>
            <p className='text-white px-3 py-1 bg-black w-fit h-fit'>Instagram</p>
            <p className='text-white px-3 py-1 bg-black w-fit h-fit'>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard