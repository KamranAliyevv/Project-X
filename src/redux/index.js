import { configureStore } from "@reduxjs/toolkit";
import accesoriesReducer from "./reducer/accesoriesReducer";
import allProductsReducer from "./reducer/allProductsReducer";

export const store =configureStore({
    reducer:{
        accesories:accesoriesReducer,
        allData:allProductsReducer
    }
})
