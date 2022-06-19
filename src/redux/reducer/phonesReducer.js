import { createSlice } from "@reduxjs/toolkit";
import { fetchPhones } from "../actions/products";

const initialState={
    loading:false,
    error:null,
    response:[]
}

export const phonesSlice=createSlice({
    name:"phones",
    initialState,
    extraReducers:{
        [fetchPhones.pending]: (state) => {
            state.loading=true;
        },
        [fetchPhones.rejected]: (state,{payload})=>{
            state.loading=false;
            state.error=payload
        },
        [fetchPhones.fulfilled]: (state,{payload})=>{
            state.loading=false;
            state.response=payload;
        }
    }
})

export default phonesSlice.reducer;