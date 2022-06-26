import React, { useEffect } from 'react';
import "./details.scss";
import BreadCrumbs from '../../components/Nav/BreadCrumbs/BreadCrumbs'
import ProductAbout from "../../components/Details/ProductAbout/ProductAbout";
import ProductProperty from '../../components/Details/ProductProperty/ProductProperty';
import { fetchDetail } from '../../redux/actions/products';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

const Details = () => {

  const dispatch=useDispatch();
  const params=useParams();

  useEffect(()=>{
    console.log(params)
    dispatch(fetchDetail(params.id));
  },[dispatch,params])
  return (
    <div id="details">
      <div className="container">
        <div className="details-inner">
          <BreadCrumbs/>
          <ProductAbout/>
          <ProductProperty/>
        </div>
      </div>
    </div>
  )
}

export default Details