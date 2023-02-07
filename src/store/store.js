import { configureStore } from '@reduxjs/toolkit';
import {user} from "./slices/LoginSlice";
import { registerUser } from './slices/RegisterSlice';
import { vendor } from './slices/vendorRegister';

export const store = configureStore({
  reducer: {
    users:user,
    registers:registerUser,
    vendorRegister : vendor
  }
});

export default store;