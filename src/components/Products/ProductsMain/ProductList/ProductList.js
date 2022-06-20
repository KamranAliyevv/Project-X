import React,{useState,useEffect} from 'react'
import ProductListFilter from './ProductListFilter/ProductListFilter'
import ProductListBody from './ProductListBody/ProductListBody'
import {useParams} from "react-router-dom";
import { allProductData } from '../../../../api/http';

const ProductList = () => {
  const [allData,setAllData]=useState([]);
  const params=useParams();

  const getAllProduct= async ()=>{
    const response=await allProductData();
    if(params.slug==="butun-mehsullar"){
      setAllData(response.data.data);
    }
    else{
      let data=response.data.data.filter(item=>item.categories.find(i=>i.slug===params.slug))
    console.log(data)
    setAllData(data);
    }
    
  }
  
  useEffect(()=>{
  getAllProduct();
  },[])

  return (
    <div className='product-list'>
     {allData.length > 0 ?
     <>
      <ProductListFilter count={allData.length}/>
      <ProductListBody products={allData}/>
     </>
     :""
     }
    </div>
  )
}

export default ProductList