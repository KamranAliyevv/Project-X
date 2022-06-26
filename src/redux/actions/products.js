import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api  from '../../api/http';
import axios from '../../api/index';

export const fetchAccesories=createAsyncThunk(
    "accesoriesReducer/fetchAccesories",
    async ()=>{
        try {
              let response=await api.accesoriesData();
              return response.data.data;
        }
        catch(error){
          return error.message
        }
    }
)

export const fetchPhones=createAsyncThunk(
  "phonesReducer/fetchPhones",
  async () =>{
    try{
      let response=await api.phonesData();
    return response.data.data;
    }
    catch(error){
      return error.message
    }
  }
)

export const fetchSmart=createAsyncThunk(
  "smartReducer/fetchSmart",
  async ()=>{
    try{
      let response=await api.smartData();
      return response.data.data;
    }
    catch(error){
      return error.message
    }
  }
)

export const fetchProducts=createAsyncThunk(
  "products/fetchProducts",
  async (slug)=>{
    try{
      let url=(slug!=="butun-mehsullar" ? `products?category_slug=${slug}` : `/products`)
      let response = await axios.get(url, {
        headers:{
          "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
        }
       })
      return response.data.data;
    }
    catch (error){
      return error.message;
    }
  }
)

export const fetchDetail=createAsyncThunk(
  "products/fetchProducts",
  async (id)=>{
    try{
      let url=`/products/${id}`
      let response = await axios.get(url, {
        headers:{
          "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
        }
       })
      return response.data;
    }
    catch (error){
      return error.message;
    }
  }
)