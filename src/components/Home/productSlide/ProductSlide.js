import React from 'react'
import Slider from "react-slick";
import {FaAngleRight} from "react-icons/fa";
import ProductCard from "../../Others/ProductCard/ProductCard";
import ProductCardSkeleton from "../../Others/Skeleton/ProductCardSkeleton";
import {useNavigate} from "react-router-dom";

let settings = {
  className: "slider variable-width",
  dots: false,
  infinite: true,
  initialSlide: 1,
  slidesToShow: 1,
  swipeToSlide:true,
  variableWidth: true,
};
settings.dots=false;
  
const ProductsSlider = ({products,loading,text,slug}) => {
  const navigate=useNavigate();
  function clickHandler(){
  }
  return (
    <div className='productSlider'>
    <div className="container">
      <div className="productSlider-inner">
        <div className="productSlider-title">
          <h3>{text}</h3>
          <div onClick={()=>navigate(`products/${slug}`)} className='products-all'>
            <span>Hamısına bax</span>
            <FaAngleRight/>
          </div>
        </div>
          {
            !loading ?
        <Slider {...settings}>
          {
            products?.map(item=>{
              return (
              item ? <ProductCard clickHandler={()=>clickHandler(item.id)} key={item.id} item={item}/>  : ""
              )
            })
          }
        </Slider>
        :
        <div className="skeleton-inner">
          {
        new Array(5).fill("").map((item,index)=>{
          return (
            <div className='skeleton-item'><ProductCardSkeleton key={index}/></div>
          )
          })
        }
        </div>
}
      </div>
    </div>
    </div>
  )
}

export default ProductsSlider