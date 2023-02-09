import { configureStore } from '@reduxjs/toolkit';
import {user} from "./slices/LoginSlice";
import { registerUser } from './slices/RegisterSlice';
import { vendor } from './slices/vendorRegister';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    users:user,
    registers:registerUser,
    vendorRegister : vendor,
    cart: cartReducer
  }
});

export default store;