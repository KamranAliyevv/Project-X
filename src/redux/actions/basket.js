import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { baseURL } from "../../api/baseUrl";

export const createBasket=createAsyncThunk(
    "basket/createBasket",
    async ()=>{
    const url = new URL(
        `${baseURL}/carts/cart_kamrand43543`
    );

    let headers = {
        "X-Authorization": "pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    const response=await axios.get(url, {
      headers: headers,
  });
  try{
    localStorage.setItem("cartId",response?.data?.id)
        return response;
  }
  catch(err){
    return err.message
  }
  }
)