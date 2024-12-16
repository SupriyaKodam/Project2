import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/CartSlice'

export default configureStore({
  reducer: {
     allCart:cartSlice
  }
})