import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='sliderProduct'>
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