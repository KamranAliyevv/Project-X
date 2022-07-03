import React from 'react'
import BasketContent from './BasketContent/BasketContent';
import BasketTotal from './BasketTotal/BasketTotal';
const BasketFull = () => {
  return (
    <div className='basket-full'>
        <BasketContent/>
        <BasketTotal/>
    </div>
  )
}

export default BasketFull