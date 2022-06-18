import axios from "./index";

export const accesoriesData=()=>axios.get("/products?category_slug=aksesuarlar",{
    headers:{
      "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
    }
  });

  export const allProductData=()=>axios.get("/products",
  {
    headers:{
      "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
    }
  }
  );