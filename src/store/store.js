import { configureStore } from '@reduxjs/toolkit';
import {user} from "./slices/LoginSlice"

export const store = configureStore({
  reducer: {
    users:user,
  }
});

export default store;