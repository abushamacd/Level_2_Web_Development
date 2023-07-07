import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
