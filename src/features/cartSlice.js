import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';

export const cartSlice = createSlice({
  name: 'counter',
  initialState: {
    carts: []
  },
  reducers: {
    addToCart: (state, action) => {
        const existingItem = state.carts.find(item => item.name === action.payload.name);
        if (existingItem) {
          existingItem.qnty += 1;
        } else {
          state.carts.push({ ...action.payload, qnty: 1 });
        }
      },
      incrementQuantity: (state, action) => {
        const existingItem = state.carts.find(item => item.name === action.payload.name);
        if (existingItem) {
          existingItem.qnty += 1;
        }
      },
      decrementQuantity: (state, action) => {
        const existingItem = state.carts.find(item => item.name === action.payload.name);
        if (existingItem && existingItem.qnty > 1) {
          existingItem.qnty -= 1;
        } else if (existingItem) {
          state.carts = state.carts.filter(item => item.name !== action.payload.name);
        }
      },
      removeToCart: (state, action) => {
        state.carts = state.carts.filter(item => item.name !== action.payload);
      },
      clearCart: (state) => {
        state.carts = []; // Clear the entire cart
      },
  }
})

// Action creators are generated for each case reducer function
export const {addToCart,incrementQuantity,decrementQuantity,clearCart,removeToCart} = cartSlice.actions

export default cartSlice.reducer