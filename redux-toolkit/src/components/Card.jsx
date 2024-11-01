import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../features/ShoeSlice';

const Card = () => {
    const shoeItem = useSelector(state => state.cart);
    const total = useSelector(state => state.total);
    const [isPaymentPage, setIsPaymentPage] = useState(false);
    const dispatch = useDispatch();

    const handleTogglePayment = () => {
        setIsPaymentPage(!isPaymentPage);
    };

    return (
        <div className='w-full bg-black bg-opacity-25 h-screen p-8 overflow-y-auto'>
            {shoeItem?.map((item) => (
                <div key={item.id} className='w-full items-center justify-between h-fit py-1 px-4 mt-4 bg-white rounded-xl flex'>
                    <div className='flex gap-x-8 items-center'>
                        <img src={item.image} alt="" className='w-24 h-24 rounded' />
                        <div>
                            <h1 className='text-xl font-semibold'>{item.name}</h1>
                            <p>&#36;{item.price}</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-x-2'>
                        {!isPaymentPage && (
                            <>
                                <button onClick={() => dispatch(removeFromCart(item))} className='w-8 h-8 rounded-xl text-center bg-green-400 text-2xl font-bold'>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => dispatch(addToCart(item))} className='w-8 h-8 rounded-xl text-center bg-green-400 text-2xl font-bold'>+</button>
                            </>
                        )}
                    </div>
                </div>
            ))}
            <div className='w-full h-fit py-4 px-4 mt-4 bg-white text-center text-xl rounded-2xl'>
                <h1 className='font-bold pb-2'>Total : &#36;{total}</h1>
                <Link 
                    to={isPaymentPage ? '/' : '/payment'} 
                    onClick={handleTogglePayment} 
                    className='bg-green-500 text-white px-4 py-1 rounded-lg'
                >
                    {isPaymentPage ? 'Go Back to Shopping' : 'Proceed to Payment'}
                </Link>
            </div>
        </div>
    );
};

export default Card;
