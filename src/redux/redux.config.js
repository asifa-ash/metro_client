import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/auth.js'
import productsReducer from "./slice/product.js"
import cartsReducer from './slice/cart.js'

export const store=configureStore({reducer:{authReducer,productsReducer,cartsReducer}})