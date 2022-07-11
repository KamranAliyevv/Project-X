import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../components/Nav/BreadCrumbs/BreadCrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';
import {useParams} from "react-router-dom";
import Filter from '../../components/Products/ProductsMain/Filter/Filter';
import ProductList from '../../components/Products/ProductsMain/ProductList/ProductList';
const Products = () => {

  const [open,setOpen]=useState(false);
  const dispatch=useDispatch();
  const params=useParams();
  const products=useSelector(state=>state.products);
  useEffect(()=>{
    dispatch(fetchProducts(params.slug));
    window.scrollTo(0, 0); 
  },[params,dispatch])
  return (
    <>
    <div id='products'>
    <BreadCrumbs/>
        <div className="container">
            <div className="products-inner">
            {products?.search && <h2>{products?.search} üzrə axtarış {products?.response.length} nəticə verdi</h2>}
                <Filter open={open} setOpen={setOpen}/>
                <ProductList open={open} setOpen={setOpen}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products