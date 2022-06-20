import React from 'react'
import Filter from './Filter/Filter';
import ProductList from './ProductList/ProductList';


const ProductsMain = () => {
  return (
    <div id='products'>
        <div className="container">
            <div className="products-inner">
                <Filter/>
                <ProductList/>
            </div>
        </div>
    </div>
  )
}

export default ProductsMain