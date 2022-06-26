import { configureStore } from "@reduxjs/toolkit";
import accesoriesReducer from "./reducer/accesoriesReducer";
import phonesReducer from "./reducer/phonesReducer";
import smartReducer from "./reducer/smartReducer";
import productsReducer from "./reducer/productsReducer";
import DetailReducer from "./reducer/DetailReducer";

export const store =configureStore({
    reducer:{
        accesories:accesoriesReducer,
        phones:phonesReducer,
        smart:smartReducer,
        products:productsReducer,
        filterProducts:productsReducer,
        details:DetailReducer,
    }
})
