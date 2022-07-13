import React from 'react'
import { useSelector } from 'react-redux';

const CheckoutTotal = () => {
    const {basket}=useSelector(state=>state);

  return (
    <div className='checkout-total'>
        <div className="total-header">
            <h3>Ümumi</h3>
            <div className="total-price-list">
                <div className="total-price-item">
                    <p>Məbləğ </p>
                    <span>{basket?.response?.subtotal?.raw} ₼</span>
                </div>
                <div className="total-price-item">
                    <p>Çatdırılma </p>
                    <span>0.00 ₼</span>
                </div>
                <div className="total-price-item">
                    <p>Hədiyyə paketi </p>
                    <span>0.00 ₼</span>
                </div>
                <div className="total-price-item">
                    <p>Promo kod </p>
                    <span>0.00 ₼</span>
                </div>
            </div>
        </div>
        <div className="total-footer">
            <p>Cəmi</p>
            <span>{basket?.response?.subtotal?.raw} ₼</span>
        </div>
    </div>
  )
}

export default CheckoutTotal