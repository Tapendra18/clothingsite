import { configureStore } from '@reduxjs/toolkit';
import {user} from "./slices/LoginSlice";
import { registerUser } from './slices/RegisterSlice';

export const store = configureStore({
  reducer: {
    users:user,
    registers:registerUser
  }
});

export default store;