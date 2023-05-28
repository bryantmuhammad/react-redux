import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartStore";
import productReducer from "./ProductStore";
import NotificationStore from "./NotificationStore";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    notification: NotificationStore,
  },
});

export default store;
