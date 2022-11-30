import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import ProductSlice from './ProductSlice';

export const store = configureStore({
    reducer: {
     cart:cartReducer,
     product:ProductSlice
    },
  })


  export default store;