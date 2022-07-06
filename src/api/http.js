import axios from "./index";

  export const accesoriesData=()=>axios.get("/products?category_slug=aksesuarlar");

  export const phonesData=()=>axios.get("/products?category_slug=telefon")

  export const smartData=()=>axios.get("/products?category_slug=smart-saat");