import React from 'react';
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  const navigate=useNavigate();

  return (
    <div onClick={()=>navigate(`/products/${item.id}`)} className='sliderProduct'>
              <img src={item.assets[0].url} alt="product" />
              <div className="sliderProduct-body">
                <h3>{item.name}</h3>
                <div className="slider-prices">
                  <div className="price-now"><span>{item.price.formatted}₼</span></div>
                  {/* <div className="price-new"><span>2000</span></div> */}
                </div>
              </div>
        </div>
  )
}

export default ProductCard