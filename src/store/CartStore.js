import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {
  isShowed: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalCartState,
  reducers: {
    toggleCart(state) {
      state.isShowed = !state.isShowed;
    },
    addProduct(state, action) {
      const existingCartIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );

      const existingCartItem = state.cartItems[existingCartIndex];

      if (existingCartItem) {
        //  If the items exist in cart
        const newQuantity = existingCartItem.quantity + 1;
        const updatedItem = {
          ...action.payload,
          quantity: newQuantity,
          total: newQuantity * action.payload.price,
        };

        let updatedItems = [...state.cartItems];
        updatedItems[existingCartIndex] = updatedItem;

        state.cartItems = updatedItems;
      } else {
        state.cartItems = [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
            total: action.payload.price,
          },
        ];
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
