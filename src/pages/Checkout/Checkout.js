import React from 'react'
import CheckoutInfo from '../../components/Checkout/CheckoutInfo/CheckoutInfo';
import CheckoutTotal from '../../components/Checkout/CheckoutTotal/CheckoutTotal';

const Checkout = () => {
  return (
    <div className='checkout'>
        <div className="container">
            <div className="checkout-inner">
        <CheckoutInfo/>
        <CheckoutTotal/>
            </div>
        </div>
    </div>
  )
}

export default Checkout