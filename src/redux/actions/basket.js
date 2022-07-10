import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../api/baseUrl";

export const createBasket = createAsyncThunk(
  "basket/createBasket",
  async () => {
    const url = new URL(`${baseURL}/carts`);

    let headers = {
      "X-Authorization": "pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const response = await axios.get(url, {
      headers: headers,
    });
    try {
      localStorage.setItem("basketId", response?.data?.id);
      return response;
    } catch (err) {
      return err.message;
    }
  }
);

export const getBasket = createAsyncThunk("basket/getBasket", async () => {
  const url = new URL(
    `https://api.chec.io/v1/carts/${localStorage.getItem("basketId")}`
  );

  let headers = {
    "X-Authorization": "pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const response = await axios.get(url, {
    headers: headers,
  });

  try {
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addToBasket = createAsyncThunk(
  "basket/addToBasket",
  async ({
    basketId,
    productId,
    count,
    selectColor,
    colorId,
    selectSize,
    sizeId,
  }) => {
    const url = new URL(`${baseURL}/carts/${basketId}`);
    let headers = {
      "X-Authorization": "pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    let options={};
    options[colorId]=selectColor;
    options[sizeId]=selectSize;
    let body = {
      id: productId,
      quantity: count,
      options: options
    };
    // const response = await axios.post(url,{
    //   headers: headers,
    //   body: JSON.stringify(body)
    // })
    // console.log(response)
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data.cart;

    // try {
    //   console.log(response.data)
    //   return response.data;
    // }
    // catch (error) {
    //   return error;
    // }
  }
);

export const deleteFromBasket = createAsyncThunk(
  "basket/deleteFromBasket",
  async ({ basketId, lineItemId }) => {
    const url = new URL(`${baseURL}/carts/${basketId}/items/${lineItemId}/`);
    let headers = {
      "X-Authorization": "pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const response = await fetch(url, {
      method: "DELETE",
      headers: headers,
    });
    const data = await response.json();
    return data.cart;
  }
);
export const updateBasket = createAsyncThunk(
  "basket/updateBasket",
  async ({ basketId, lineItemId, quantity }) => {
    const url = new URL(`${baseURL}/carts/${basketId}/items/${lineItemId}`);
    let headers = {
      "X-Authorization": "pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    let body = {
      quantity: quantity,
    };
    const response = await fetch(url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data.cart;
  }
);
