import React from 'react'
import Slider from "react-slick";
import {FaAngleRight} from "react-icons/fa";
import ProductCard from "../../Others/ProductCard/ProductCard";
// var settings = {
//     dots: true,
//     infinite: false,
//     speed: 1000,
//     slidesToShow: 4,
//     initialSlide: 1,
//     swipeToSlide:true,
//     dots:false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };
let settings = {
  className: "slider variable-width",
  dots: false,
  infinite: true,
  initialSlide: 1,
  slidesToShow: 1,
  swipeToSlide:true,
  speed:1000,
  variableWidth: true,
};
settings.dots=false;
  
const ProductsSlider = ({products,text}) => {

  function clickHandler(){
    console.log(1)
  }
  return (
    <div className='productSlider'>
    <div className="container">
      <div className="productSlider-inner">
        <div className="productSlider-title">
          <h3>{text}</h3>
          <div className='products-all'>
            <span>Hamısına bax</span>
            <FaAngleRight/>
          </div>
        </div>
        <Slider {...settings}>
          {
            products.map(item=>{
              return (
              item ? <ProductCard clickHandler={()=>clickHandler(item.id)} key={item.id} item={item}/>  : ""
              )
            })
          }
        </Slider>
      </div>
    </div>
    </div>
  )
}

export default ProductsSlider