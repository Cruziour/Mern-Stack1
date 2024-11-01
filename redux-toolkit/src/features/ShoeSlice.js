import { createSlice } from '@reduxjs/toolkit';
import shoe1 from '../assets/shoe1.jpg';
import shoe2 from '../assets/shoe2.jpg';
import shoe3 from '../assets/shoe3.jpg';
import shoe4 from '../assets/shoe4.jpg';
import shoe5 from '../assets/shoe5.jpg';
import shoe6 from '../assets/shoe6.jpg';

const initialState = { 
    shoe: [
        { id: 1, image: shoe1, price: 150, name: "Shoe1" },
        { id: 2, image: shoe2, price: 200, name: "Shoe2" },
        { id: 3, image: shoe3, price: 205, name: "Shoe3" },
        { id: 4, image: shoe4, price: 180, name: "Shoe4" },
        { id: 5, image: shoe5, price: 170, name: "Shoe5" },
        { id: 6, image: shoe6, price: 120, name: "Shoe6" },
        { id: 7, image: shoe1, price: 150, name: "Shoe7" },
        { id: 8, image: shoe2, price: 200, name: "Shoe8" },
    ],
    cart: [],
    total: 0,
};

const cardSlice = createSlice({
    name: 'cardSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingShoe = state.cart.find(item => item.id === action.payload.id);

            if (existingShoe) {
                existingShoe.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1, total: action.payload.price });
            }

            // Update the total price of the cart
            state.total += action.payload.price;
        },
        
        removeFromCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                const item = state.cart[itemIndex];
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    item.total -= item.price;
                    state.total -= item.price;
                } else {
                    // Remove item if quantity is 1
                    state.total -= item.total;
                    state.cart.splice(itemIndex, 1);
                }
            }
        }
    }
});

export const { addToCart, removeFromCart } = cardSlice.actions;
export default cardSlice.reducer;
