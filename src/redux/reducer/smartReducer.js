import { createSlice } from "@reduxjs/toolkit";
import { fetchSmart } from "../actions/products";

const initialState={
    loading:false,
    error:null,
    response:[]
}
const smartReducer=createSlice({
    name:"smart",
    initialState,
    extraReducers:{
        [fetchSmart.pending]: (state) => {
            state.loading=true;
        },
        [fetchSmart.rejected]: (state,{payload})=>{
            state.loading=false;
            state.error=payload
        },
        [fetchSmart.fulfilled]: (state,{payload})=>{
            state.loading=false;
            state.response=payload
        }
    }
})

export default smartReducer.reducer;
