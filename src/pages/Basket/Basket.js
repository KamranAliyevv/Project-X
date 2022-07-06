import React from 'react'
import BasketFull from '../../components/Basket/BasktFull/BasketFull';
// import BasketEmpty from '../../components/Basket/BasketEmpty/BasketEmpty';

const Basket = () => {
  return (
    <div className="basket">
        <div className="container">
            <div className="basket-inner">
                <div className="basket-article">
                Səbət (5 məhsul)
                </div>
                <div className="basket-body">
                  <BasketFull/>
                  {/* <BasketEmpty/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Basket