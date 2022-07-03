import React from 'react'
import emptyBasket from "../../../design/images/shopping-cart.png";
const BasketEmpty = () => {
  return (
    <div className='basket-empty'>
        <img src={emptyBasket} alt="empty" />
        <p>Səbətiniz halhazırda boşdur</p>
        <button className='getShop'>Alış-verişə davam et</button>
    </div>
  )
}

export default BasketEmpty