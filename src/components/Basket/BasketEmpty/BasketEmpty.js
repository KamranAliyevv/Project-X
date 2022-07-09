import React from 'react'
import emptyBasket from "../../../design/images/shopping-cart.png";
import {useNavigate} from "react-router-dom";

const BasketEmpty = () => {
  const navigate=useNavigate();
  return (
    <div className='basket-empty'>
        <img src={emptyBasket} alt="empty" />
        <p>Səbətiniz halhazırda boşdur</p>
        <button onClick={()=>navigate("/")} className='getShop'>Alış-verişə davam et</button>
    </div>
  )
}

export default BasketEmpty