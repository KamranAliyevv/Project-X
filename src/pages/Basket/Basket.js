import React from "react";
import BasketFull from "../../components/Basket/BasktFull/BasketFull";
import BasketEmpty from '../../components/Basket/BasketEmpty/BasketEmpty';
import { useSelector } from "react-redux/es/exports";
import Loading from "../../components/Others/Loading/Loading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Basket = () => {
  const basket = useSelector((state) => state.basket);
  let products = basket?.response?.line_items;
  return (
    <div className="basket">
      <div className="container">
        <div className="basket-inner">
          <div className="basket-article">
            Səbət ({basket?.response?.total_items} məhsul)
          </div>
          <div className="basket-body">
            {products?.length > 0 ? <BasketFull /> : <BasketEmpty />}
          </div>
          {basket.loading && <Loading/>}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Basket;
