import React from 'react'

const BasketTotal = ({total}) => {
  return (
    <div className="basket-total">
        <div className="total-header">
            <h3>Ümumi</h3>
            <div className="total-price-list">
                <div className="total-price-item">
                    <p>Məbləğ </p>
                    <span>{total} ₼</span>
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
            <span>{total} ₼</span>
        </div>
    </div>
  )
}

export default BasketTotal