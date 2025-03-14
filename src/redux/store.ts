'use client';
import { configureStore } from '@reduxjs/toolkit';
import langSliceReducer from './slices/langSlice';
import categorySlice from './slices/categorySlice';
import productSlice from './slices/productSlice';
import productPhotosSlice from './slices/productPhotosSlice';
import currencySlice from './slices/currencySlice';
import cartSlice from './slices/cartSlice';
import filterSlice from './slices/filterSlice';
import sortSlice from './slices/sortSlice';
import listViewSlice from './slices/listViewSlice';

export const store = configureStore({
  reducer: {
    language: langSliceReducer,
    categories: categorySlice,
    products: productSlice,
    photos: productPhotosSlice,
    currency: currencySlice,
    cart: cartSlice,
    filter: filterSlice,
    sort: sortSlice,
    listView: listViewSlice
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;