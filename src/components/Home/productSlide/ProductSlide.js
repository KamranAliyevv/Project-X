import React from 'react'
import Slider from "react-slick";
import {FaAngleRight} from "react-icons/fa";
import product1 from "../../../design/images/product-1.png";
import product2 from "../../../design/images/product-2.png";
import product3 from "../../../design/images/product-3.png";
import product4 from "../../../design/images/product-4.png";

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
const settings = {
  className: "slider variable-width",
  dots: true,
  infinite: true,
  centerMode: false,
  initialSlide: 1,
  slidesToShow: 1,
  swipeToSlide:true,
  speed:1000,
  dots:false,
  variableWidth: true
};
  
const ProductsSlider = ({link,text}) => {
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
          <div className='sliderProduct'>
            <img src={product2} alt="product" />
            <div className="sliderProduct-body">
              <h3>Apple  iPhone 12, 64 GB, Purple</h3>
              <div className="slider-prices">
                <div className="price-now"><span>1360₼</span></div>
                {/* <div className="price-new"><span>2000</span></div> */}
              </div>
            </div>
          </div>
          <div className='sliderProduct'>
            <img src={product3} alt="product" />
            <div className="sliderProduct-body">
              <h3>Apple  iPhone 12, 64 GB, Purple</h3>
              <div className="slider-prices">
                <div className="price-now"><span>1360₼</span></div>
                {/* <div className="price-new"><span>2000</span></div> */}
              </div>
            </div>
          </div>
          <div className='sliderProduct'>
            <img src={product4} alt="product" />
            <div className="sliderProduct-body">
              <h3>Apple  iPhone 12, 64 GB, Purple</h3>
              <div className="slider-prices">
                <div className="price-now"><span>1360₼</span></div>
                {/* <div className="price-new"><span>2000</span></div> */}
              </div>
            </div>
          </div>
          <div className='sliderProduct'>
            <img src={product2} alt="product" />
            <div className="sliderProduct-body">
              <h3>Apple  iPhone 12, 64 GB, Purple</h3>
              <div className="slider-prices">
                <div className="price-now"><span>1360₼</span></div>
                {/* <div className="price-new"><span>2000</span></div> */}
              </div>
            </div>
          </div>
          <div className='sliderProduct'>
            <img src={product3} alt="product" />
            <div className="sliderProduct-body">
              <h3>Apple  iPhone 12, 64 GB, Purple</h3>
              <div className="slider-prices">
                <div className="price-now"><span>1360₼</span></div>
                {/* <div className="price-new"><span>2000</span></div> */}
              </div>
            </div>
          </div><div className='sliderProduct'>
            <img src={product4} alt="product" />
            <div className="sliderProduct-body">
              <h3>Apple  iPhone 12, 64 GB, Purple</h3>
              <div className="slider-prices">
                <div className="price-now"><span>1360₼</span></div>
                {/* <div className="price-new"><span>2000</span></div> */}
              </div>
            </div>
          </div>
          <div className='sliderProduct'>
            <img src={product1} alt="product" />
            <div className="sliderProduct-body">
              <h3>Apple  iPhone 12, 64 GB, Purple</h3>
              <div className="slider-prices">
                <div className="price-now"><span>1360₼</span></div>
                {/* <div className="price-new"><span>2000</span></div> */}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    </div>
  )
}

export default ProductsSlider