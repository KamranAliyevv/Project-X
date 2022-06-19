import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api  from '../../api/http';

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