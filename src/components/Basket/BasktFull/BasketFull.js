import React from 'react'
import BasketContent from './BasketContent/BasketContent';
import BasketTotal from './BasketTotal/BasketTotal';
import { useSelector } from 'react-redux/es/exports';

const BasketFull = () => {
  const basket=useSelector(state=>state.basket);
  let products=basket?.response?.line_items;
  return (
    <div className='basket-full'>
        {products ? <BasketContent products={products}/> : null}
        <BasketTotal/>
    </div>
  )
}

export default BasketFull