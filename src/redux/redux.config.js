import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/auth.js'
import productsReducer from "./slice/product.js"

export const store=configureStore({reducer:{authReducer,productsReducer}})