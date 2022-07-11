import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/products";

const initialState = {
  loading: false,
  error: null,
  response: [],
  originalResponse: [],
  page:0,
  maxProduct:6,
  search:""
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
    },
    search:(state,{payload})=>{
      state.search=payload;
     if(payload.length>0){
      let searchProducts=state?.originalResponse?.filter((item)=>{
        return item.name.toLowerCase().includes(payload);
      })
      state.originalResponse=searchProducts;
      state.response=searchProducts;
     }
    }
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.response = state.search.length>0 ? state.response : payload;
      state.originalResponse = payload;
    },
  },
});

export const { filter, sort, pagination,search} = productsReducer.actions;

export default productsReducer.reducer;
