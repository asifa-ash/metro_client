import {  createSlice } from "@reduxjs/toolkit";

import { getAll, upload } from "../async/product";

const products = createSlice({
  name: "products",
  initialState: { products: [] },
  extraReducers: (builder) => {
    builder.addCase(upload.fulfilled, (state, action) => {
      console.log(action);
      state.products = action.payload;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
    });
    // builder.addCase(getOne.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.users = action.payload;
    // });
  },
});

export default products.reducer;
