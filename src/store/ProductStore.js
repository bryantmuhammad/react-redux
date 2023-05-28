import { createSlice } from "@reduxjs/toolkit";

const intialProductState = {
  products: [
    {
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      title: "Ketoprak",
      price: 10,
      description: "Traditioan food from indonesia!",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState: intialProductState,
  reducers: {},
});

export const productAction = productSlice.actions;
export default productSlice.reducer;
