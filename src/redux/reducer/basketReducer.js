import { createSlice } from "@reduxjs/toolkit";
import { createBasket } from "../actions/basket";

const initialState={
    loading:false,
    error:null,
    basketId:localStorage.getItem("basketId") && null,
}
const basketReducer =createSlice({
    name:"basketReducer",
    initialState,
    extraReducers:{
        [createBasket.pending]: (state) => {
            state.loading=true;
        },
        [createBasket.rejected]: (state,{payload})=>{
            state.loading=false;
            state.error=payload
        },
        [createBasket.fulfilled]: (state,{payload})=>{
            state.loading=false;
            console.log(payload)
            if(state.basketId===null){
                state.response=payload;
                localStorage.setItem("basketId",payload)
            }
        }
    }
})

export default basketReducer.reducer;