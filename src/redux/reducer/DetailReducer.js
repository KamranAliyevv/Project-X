import { createSlice } from "@reduxjs/toolkit";
import { fetchDetail } from "../actions/products";

const initialState={
    loading:false,
    error:null,
    response:[]
}

export const detailSlice=createSlice({
    name:"detail",
    initialState,
    extraReducers:{
        [fetchDetail.pending]: (state) => {
            state.loading=true;
        },
        [fetchDetail.rejected]: (state,{payload})=>{
            state.loading=false;
            state.error=payload
        },
        [fetchDetail.fulfilled]: (state,{payload})=>{
            state.loading=false;
            state.response=payload;
        }
    }
})

export default detailSlice.reducer;