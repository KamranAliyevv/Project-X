import React from 'react'
import "./products.scss";
import BreadCrumbs from '../../components/Nav/BreadCrumbs/BreadCrumbs';
import ProductsMain from '../../components/Products/ProductsMain/ProductsMain';

const Products = () => {
  return (
    <>
    <BreadCrumbs/>
    <ProductsMain/>
    </>
  )
}

export default Products