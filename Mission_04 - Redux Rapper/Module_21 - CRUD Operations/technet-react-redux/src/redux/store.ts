import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import productSlice from './features/products/productsSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
