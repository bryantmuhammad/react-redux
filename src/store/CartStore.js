import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isShowed: true,
    cartItems: {
      items: [],
      totalQuantity: 0,
    },
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload;
    },
    toggleCart(state) {
      state.isShowed = !state.isShowed;
    },
    addProduct(state, action) {
      const { title, price } = action.payload;
      const existingItem = state.cartItems.items.find(
        (item) => item.title === title
      );

      if (!existingItem) {
        state.cartItems.items.push({
          title,
          price,
          quantity: 1,
          total: price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total += price;
      }

      state.cartItems.totalQuantity++;
      state.changed = true;
    },
    removeProduct(state, action) {
      const title = action.payload.title;
      const existingItem = state.cartItems.items.find(
        (item) => item.title === title
      );

      if (existingItem.quantity === 1) {
        state.cartItems.items = state.cartItems.items.filter(
          (item) => item.title !== title
        );
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }

      state.cartItems.totalQuantity--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
