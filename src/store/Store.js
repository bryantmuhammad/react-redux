import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartStore";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
