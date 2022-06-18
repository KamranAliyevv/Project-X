import { createSlice } from "@reduxjs/toolkit";
import { allProductData } from "../../api/http";

const initialState={
    loading:false,
    error:null,
    allProduct:[]
}

export const allProductsReducer=createSlice({
    name:"allProducts",
    initialState,
    extraReducers:{
        [allProductData.pending]: (state) => {
            state.loading=true;
        },
        [allProductData.rejected]: (state,{payload})=>{
            state.loading=false;
            state.error=payload
        },
        [allProductData.fulfilled]: (state,{payload})=>{
            state.loading=false;
            state.response=payload
        }
    }
})

export default allProductData.reducer;