import { configureStore } from "@reduxjs/toolkit";
import { BASE_API } from "./api";

export const store = configureStore({
  reducer: {
    [BASE_API.reducerPath]: BASE_API.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BASE_API.middleware),
});
