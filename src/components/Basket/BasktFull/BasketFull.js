import React, {useEffect} from 'react'
import BasketContent from './BasketContent/BasketContent';
import BasketTotal from './BasketTotal/BasketTotal';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchProducts } from '../../../redux/actions/products';

const BasketFull = () => {
  const basket=useSelector(state=>state.basket);
  let products=basket?.response?.line_items;
  let total=basket?.response?.subtotal.raw;
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts(""));
  },[dispatch])
  return (
    <div className='basket-full'>
        {products ? <BasketContent products={products} loading={basket.loading}/> : null}
        <BasketTotal total={total}/>
    </div>
  )
}

export default BasketFull