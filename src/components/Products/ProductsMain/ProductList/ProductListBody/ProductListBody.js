import React from 'react'
import ProductCard from "../../../../Others/ProductCard/ProductCard";
const ProductListBody = ({products}) => {
  console.log(products)
  return (
    <div className='productList-body'>
      {products.map(item=>{
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