import React from 'react'
import BasketContent from './BasketContent/BasketContent';
import BasketTotal from './BasketTotal/BasketTotal';
import { useSelector } from 'react-redux/es/exports';

const BasketFull = () => {
  const basket=useSelector(state=>state.basket);
  let products=basket?.response?.line_items;
  let total=basket?.response?.subtotal.raw;
  console.log(basket?.response)
  return (
    <div className='basket-full'>
        {products ? <BasketContent products={products} loading={basket.loading}/> : null}
        <BasketTotal total={total}/>
    </div>
  )
}

export default BasketFull