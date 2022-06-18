import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api  from '../../api/http';

export const fetchAccesories=createAsyncThunk(
    "accesoriesReducer/fetchAccesories",
    async ()=>{
        try {
              let accesories=await api.accesoriesData();
              return accesories.data.data;
        }
        catch(error){
          return error.message
        }
    }
)

export const fetchAllProducts=createAsyncThunk(
  "all/fetchAllProducts",
  async () =>{
    try{
      let response=await api.allProductData();
      let phoneData=response.data.data.filter(item=>item.categories.find(i=>i.slug!=="aksesuarlar"));
      console.log(phoneData)
    return phoneData;
    }
    catch(error){
      return error.message
    }
  }
)