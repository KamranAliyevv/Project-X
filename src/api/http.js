import axios from "./index";

  export const accesoriesData=()=>axios.get("/products?category_slug=aksesuarlar");

  export const phonesData=()=>axios.get("/products?category_slug=telefon")

  export const smartData=()=>axios.get("/products?category_slug=smart-saat");

  export const productsData=(slug)=>axios.get(`products?${slug.length>0 ? `category_slug=${slug}` : null}`);

  export const detailData=(id)=>axios.get(`/products/${id}`);