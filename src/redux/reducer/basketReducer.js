import { createSlice } from "@reduxjs/toolkit";
import { getBasket } from "../actions/basket";
import { addToBasket } from "../actions/basket";
import { deleteFromBasket } from "../actions/basket";
import { updateBasket } from "../actions/basket";

const initialState={
    loading:false,
    error:null,
    response:[]
}
const basketReducer =createSlice({
    name:"basketReducer",
    initialState,
    extraReducers:{
        [getBasket.pending]: (state) => {
            state.loading=true;
        },
        [getBasket.rejected]: (state,{payload})=>{
            state.loading=false;
            state.error=payload
        },
        [getBasket.fulfilled]: (state,{payload})=>{
            state.loading=false;
            state.response=payload;
        },
        [addToBasket.pending]: (state) => {
            state.loading=true;
        },
        [addToBasket.rejected]: (state,{payload})=>{
            state.loading=false;
            state.error=payload
        },
        [addToBasket.fulfilled]: (state,{payload})=>{
            state.loading=false;
            state.response=payload;
        },
        [deleteFromBasket.pending]: (state) => {
            state.loading=true;
        },
        [deleteFromBasket.rejected]: (state,{payload})=>{
            state.loading=false;
            state.error=payload
        },
        [deleteFromBasket.fulfilled]: (state,{payload})=>{
            console.log(payload)
            state.loading=false;
            state.response=payload;
        },
        [updateBasket.pending]: (state) => {
            state.loading=true;
        },
        [updateBasket.rejected]: (state,{payload})=>{
            state.loading=false;
            state.error=payload
        },
        [updateBasket.fulfilled]: (state,{payload})=>{
            state.loading=false;
            state.response=payload;
        }
    }
})

export default basketReducer.reducer;