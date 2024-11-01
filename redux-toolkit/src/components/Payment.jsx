import React from 'react'

const Payment = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className='w-full bg-black bg-opacity-25 h-screen p-8 overflow-y-auto flex justify-center'>
        <div>
            <div className='flex items-center px-4 gap-x-4 my-5 text-black text-lg'>
              <div>
                <input type="radio" name="cash" id="cash" />
                <label htmlFor="cash">Cash on Delivery</label>
              </div>
              <div>
                <input type="radio" name="card" id="card" />
                <label htmlFor="card">Credit Card</label>
              </div>
            </div>

            <div className='w-96 h-fit border border-red-500 rounded-2xl py-6 px-6'>
                <form onSubmit={handleSubmit}>
                  <div className='py-2'>
                    <label htmlFor="card" className='text-xl font-semibold'>Enter your Card Number:</label>
                    <input type="text" placeholder='Card Number' name="card" id="card" className='w-full rounded-xl px-2 py-1 h-8 border border-gray-300'/>
                  </div>
                  <div className='py-2'>
                    <label htmlFor="exp" className='text-xl font-semibold'>Enter your Card's expiry date:</label>
                    <input type="text" name="exp" placeholder='Expiry Date' id="exp" className='w-full rounded-xl px-2 py-1 h-8 border border-gray-300'/>
                  </div>
                  <div className='py-2'>
                    <label htmlFor="cvv" className='text-xl font-semibold'>Enter your CVV Number:</label>
                    <input type="text" name="cvv" id="cvv" placeholder='CVV Number' className='w-full rounded-xl px-2 py-1 h-8 border border-gray-300'/>
                  </div>
                  <button className='bg-green-500 text-white px-4 py-1 rounded-lg mt-4'>Confirm Payment</button>
                </form>
            </div>

        </div>
      </div>
    </>
  )
}

export default Payment
