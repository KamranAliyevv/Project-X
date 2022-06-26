import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/products";

const initialState = {
  loading: false,
  error: null,
  response: [],
  originalResponse: [],
};
const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    filter: (state, { payload }) => {
        console.log(payload)
      let filtered = state.originalResponse.filter((item) => {
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
    },

    sort:(state,{payload})=>{
        // let sorted=state.originalResponse.filter()
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

export const { filter, sort } = productsReducer.actions;

export default productsReducer.reducer;
