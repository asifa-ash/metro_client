import {  createSlice } from "@reduxjs/toolkit";
import { add, count, getCart } from "../async/cart";




const carts = createSlice({
  name: "carts",
  initialState: { cart: [] },
  extraReducers: (builder) => {
    builder.addCase(add.fulfilled, (state, action) => {
      console.log(action);
      state.cart = action.payload;
    });
    builder.addCase(count.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cart = action.payload;
    });

    builder.addCase(getCart.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cart = action.payload;
    });
    
  },
});

export default carts.reducer;
