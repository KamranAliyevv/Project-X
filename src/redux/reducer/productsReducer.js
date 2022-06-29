import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/products";

const initialState = {
  loading: false,
  error: null,
  response: [],
  originalResponse: [],
  page:0,
  maxProduct:6
};
const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    filter: (state, { payload }) => {
      let filtered = state?.originalResponse.length>0 && state?.originalResponse?.filter((item) => {
        let cats=[];
        item.categories.forEach(el=>cats.push(el.name))
        if (
          item.price.raw >= payload.minPrice &&
          item.price.raw <= payload.maxPrice &&
          (payload.brend.length===0 ? true : cats.find(x=>payload.brend.includes(x)))
        ) {
            return item;
        }
        return false
      });
       state.response=filtered;
       state.page=0;
    },

    sort:(state,{payload})=>{
      switch(payload){
          case "yeni":
            state?.originalResponse?.sort((a,b)=>b.updated - a.updated);
            state.response.sort((a,b)=>b.updated - a.updated);
            break;

          case "baha":
            state?.originalResponse?.sort((a,b)=>b.price.raw - a.price.raw);
            state?.response?.sort((a,b)=>b.price.raw - a.price.raw);
            break;

          case "ucuz":
            state?.originalResponse?.sort((a,b)=>a.price.raw - b.price.raw);
            state?.response?.sort((a,b)=>a.price.raw - b.price.raw);
            break;

            default:
        }
    },

    pagination: (state,{payload})=>{
      state.page=payload
    }
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.response = payload;
      state.originalResponse = payload;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.response = payload;
      state.originalResponse = payload;
    },
  },
});

export const { filter, sort, pagination} = productsReducer.actions;

export default productsReducer.reducer;
