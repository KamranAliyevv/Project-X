import React from 'react'
import PropertyList from './PropertyList/PropertyList';

const ProductProperty = () => {
  return (
    <div className='productProperty'>
        <div className="property-title">
            <div className='property-btn active'>Texniki Xüsusiyyətləri</div>
            <div className='property-btn'>Rəylər</div>
        </div>
        <PropertyList/>
    </div>
  )
}

export default ProductProperty