import { configureStore } from '@reduxjs/toolkit'
import ShoeSlice from '../features/ShoeSlice'

export const store = configureStore({
    
  reducer: ShoeSlice,

})