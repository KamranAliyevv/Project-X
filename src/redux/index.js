import { configureStore } from "@reduxjs/toolkit";
import accesoriesReducer from "./reducer/accesoriesReducer";
import phonesReducer from "./reducer/phonesReducer";
import smartReducer from "./reducer/smartReducer";

export const store =configureStore({
    reducer:{
        accesories:accesoriesReducer,
        phones:phonesReducer,
        smart:smartReducer
    }
})
