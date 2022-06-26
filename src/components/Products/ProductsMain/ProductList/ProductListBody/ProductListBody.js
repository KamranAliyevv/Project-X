import React from 'react'
import ProductCard from "../../../../Others/ProductCard/ProductCard";
import { useSelector } from 'react-redux';

const ProductListBody = () => {
  const products=useSelector(state=>state.products);
  return (
    <div className='productList-body'>
      {products.response.map(item=>{
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