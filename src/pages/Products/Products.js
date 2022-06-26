import React, { useEffect } from 'react'
import "./products.scss";
import BreadCrumbs from '../../components/Nav/BreadCrumbs/BreadCrumbs';
import ProductsMain from '../../components/Products/ProductsMain/ProductsMain';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';
import {useParams} from "react-router-dom";
const Products = () => {

  const dispatch=useDispatch();
  const params=useParams();


  useEffect(()=>{
    dispatch(fetchProducts(params.slug));
  },[params,dispatch])
  return (
    <>
    <BreadCrumbs/>
    <ProductsMain/>
    </>
  )
}

export default Products