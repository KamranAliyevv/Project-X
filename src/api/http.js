import axios from "./index";

export const accesoriesData=()=>axios.get("/products?category_slug=aksesuarlar",
{
    headers:{
      "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
    }
  });

  export const phonesData=()=>axios.get("/products?category_slug=telefon",
  {
    headers:{
      "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
    }
   })

  export const smartData=()=>axios.get("/products?category_slug=smart-saat",
  {
    headers:{
      "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
    }
  })