import { createAsyncThunk } from "@reduxjs/toolkit";
import { product } from "../../apis/product.api.js";
export const upload = createAsyncThunk("product/upload", async (data) => {
  console.log(data, "data in asyn....");

  try {
    const res = await product.upload(data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
export const getAll = createAsyncThunk("product/getAll", async (data) => {
  console.log(data, "----async");
  try {
    const res = await product.getAll(data);

    return res.data;
  } catch (err) {
    console.log(err);
  }
});
