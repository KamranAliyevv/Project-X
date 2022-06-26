import React,{useState} from 'react'
import Filter from './Filter/Filter';
import ProductList from './ProductList/ProductList';
const ProductsMain = () => {
  const [open,setOpen]=useState(false);
  return (
    <div id='products'>
        <div className="container">
            <div className="products-inner">
                <Filter open={open} setOpen={setOpen}/>
                <ProductList open={open} setOpen={setOpen}/>
            </div>
        </div>
    </div>
  )
}

export default ProductsMain