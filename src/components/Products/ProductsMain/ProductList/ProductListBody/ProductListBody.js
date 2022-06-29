import React from 'react'
import ProductCard from "../../../../Others/ProductCard/ProductCard";
import { useSelector } from 'react-redux';

const ProductListBody = () => {
  const {products}=useSelector(state=>state);
  let pageCount=products.page;
  let maxProduct=products.maxProduct;
  return (
    <div className='productList-body'>
      {products?.response?.slice(pageCount*maxProduct,(pageCount+1)*maxProduct).map(item=>{
        return (
        <div key={item.id} className="productList-item">
        <ProductCard item={item}/>
        </div>
        )
      })}
    
    </div>
  )
}

export default ProductListBody