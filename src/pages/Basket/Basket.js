import React from 'react'
import BasketContent from '../../components/Basket/BasketContent/BasketContent';
import BasketTotal from '../../components/Basket/BasketTotal/BasketTotal';

const Basket = () => {
  return (
    <div className="basket">
        <div className="container">
            <div className="basket-inner">
                <div className="basket-article">
                Səbət (5 məhsul)
                </div>
                <div className="basket-body">
                <BasketContent/>
                <BasketTotal/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Basket