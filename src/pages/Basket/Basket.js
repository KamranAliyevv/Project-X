import React from "react";
import BasketFull from "../../components/Basket/BasktFull/BasketFull";
import BasketEmpty from '../../components/Basket/BasketEmpty/BasketEmpty';
import { useSelector } from "react-redux/es/exports";

const Basket = () => {
  const basket = useSelector((state) => state.basket);
  let products = basket?.response?.line_items;
  return (
    <div className="basket">
      <div className="container">
        <div className="basket-inner">
          <div className="basket-article">
            Səbət ({products?.length} məhsul)
          </div>
          <div className="basket-body">
            {products?.length > 0 ? <BasketFull /> : <BasketEmpty />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
