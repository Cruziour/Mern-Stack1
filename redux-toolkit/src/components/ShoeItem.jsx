import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/ShoeSlice'

const ShoeItem = () => {
    const shoeItem = useSelector(state => state.shoe)
    const dispatch =  useDispatch()
    // console.log(shoeItem);
    
  return (
    <div className='w-full bg-black bg-opacity-25 h-screen p-8 flex justify-around flex-wrap gap-y-16 gap-x-10 overflow-y-auto '>
      {shoeItem?.map((item) => (
        <div key={item.id} className='w-1/3 h-80 bg-white bg-opacity-45 rounded-xl p-4'>
            <img src={item.image} alt={item.name} className='max-h-44 w-full rounded-xl'/>
            <div className='w-full h-auto rounded-md bg-black mt-3 text-white text-center py-2'>
                <h2 className='text-lg'>{item.name}</h2>
                <p className='text-orange-400'>&#36;{item.price}</p>
                <button className='border border-yellow-300 px-4 py-1 rounded-xl' onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ShoeItem
