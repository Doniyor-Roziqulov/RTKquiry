import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // wishlist,
    // cart,
    // token,
    // profile,
    [api.reducerPath]: api.reducer, // caching
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

