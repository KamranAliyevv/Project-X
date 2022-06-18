import { createSlice } from '@reduxjs/toolkit';
import { fetchAccesories } from "../actions/products";
const initialState={
    loading:false,
    error:null,
    response:[]
}

export const accesoriesSlice=createSlice({
    name:"accesories",
    initialState,
    extraReducers: {
        [fetchAccesories.pending]: (state) => {
            state.loading=true;
        },
        [fetchAccesories.rejected]: (state,{payload})=>{
            state.loading=false;
            state.error=payload
        },
        [fetchAccesories.fulfilled]: (state,{payload})=>{
            state.loading=false;
            state.response=payload
        }
      }
})

export default accesoriesSlice.reducer;