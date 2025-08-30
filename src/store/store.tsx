import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./api-calls/products-api-call";

export const store = configureStore({
  reducer: {
    [productSlice.reducerPath]: productSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
