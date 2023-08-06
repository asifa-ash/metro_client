import { createAsyncThunk } from "@reduxjs/toolkit";
import { cart } from "../../apis/cart.apis";

export const add = createAsyncThunk("carts/add", async (data) => {
  console.log(data, "data in asyn....");

  try {
    const res = await cart.add(data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
export const count = createAsyncThunk("carts/count", async (data) => {
  console.log(data, "----async");
  try {
    const res = await cart.count(data);

    return res.data;
  } catch (err) {
    console.log(err);
  }
});


export const getCart = createAsyncThunk("carts/getCart", async (data) => {
  console.log(data, "----async");
  try {
    const res = await cart.getCart(data);

    return res.data;
  } catch (err) {
    console.log(err);
  }
});
