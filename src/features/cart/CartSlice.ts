import {createSlice} from '@reduxjs/toolkit';
import type { CartItem, CartState } from './types';

const initialState: CartState = {
  items: [],
  totalAmount: 0,
}

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if(existingItem){
        existingItem.quantity += action.payload.quantity;
      }
      else{
        state.items.push(action.payload)
      }
      state.totalAmount = calculateTotal(state.items);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.totalAmount = calculateTotal(state.items)
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    }
  }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;