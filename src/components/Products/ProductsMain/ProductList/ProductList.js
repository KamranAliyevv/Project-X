import React, {useState } from 'react'
import ProductListFilter from './ProductListFilter/ProductListFilter'
import ProductListBody from './ProductListBody/ProductListBody'
import PaginationComp from '../../../Others/Pagination/Pagination';
import { useSelector } from 'react-redux/es/exports';

const ProductList = ({setOpen}) => {
const products=useSelector(state=>state.products);
// products?.response?.filter((item) => {
//     let cats=[];
//     item.categories.forEach(el=>cats.push(el.name));
//     console.log(cats.find(x=>["Apple"].includes(x)));
// })

  return (
    <div className='product-list'>
     {products.response.length > 0 ?
     <>
      <ProductListFilter setOpen={()=>setOpen}/>
      <ProductListBody/>
      <PaginationComp products={products.response } count={6}/>
     </>
     :""
     }
    </div>
  )
}

export default ProductList



// useCallback(()=>{
//   const getAllProduct = async ()=>{
//     if(params.slug==="butun-mehsullar"){
//       params.slug=null;
//     }
//     console.log(params.slug)
//     const response=await axios.get(`${baseURL}/products? ${params.slug ? `category_slug=${params.slug}` :""}`,
//     {
//       headers:{
//         "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
//       }
//      });
//     setAllData(response.data.data);
//   }
//   getAllProduct();
// },[params])