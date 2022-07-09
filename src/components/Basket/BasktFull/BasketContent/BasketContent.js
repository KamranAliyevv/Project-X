import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { deleteFromBasket } from "../../../../redux/actions/basket";
import { useDebouncedCallback } from 'use-debounce';
import { updateBasket } from "../../../../redux/actions/basket";

const BasketContent = ({ products }) => {
  const [quantity, setQuantity] = useState({
    count:1,
    id:null
  });
  const dispatch=useDispatch();

  const updateDebounced = useDebouncedCallback(
    (obj)=>
    {
        dispatch(updateBasket(obj));
        setQuantity({count:1,id:null})
    },
    1200
  );

  function deleteItem(lineItemId){
    const basketId=localStorage.getItem("basketId");
    let obj={
        basketId,
        lineItemId
      }
    dispatch(deleteFromBasket(obj))
  }
  function changeCount(type,qty,lineItemId){
    const basketId=localStorage.getItem("basketId");
    let newQty=null;
      newQty=(type==="minus") ? (quantity.count===1) ? 1 : qty-1  : qty+1;
      console.log(newQty)
      let obj={
        basketId,
        lineItemId,
        qty:newQty
      }
      setQuantity({count:newQty,id:lineItemId});
      updateDebounced(obj);
    }
    return (
    <div className="basket-list">
      {products.map((item) => {
        return (
          <div key={item.id} className="basket-item">
            <div className="item-img">
              <input type="checkbox" />
              <img
                src={item.image.url}
                alt="basketImg"
              />
            </div>
            <div className="basket-content">
              <div className="item-info">
                <h3>{item.name}</h3>
                <div className="item-labels">
                  <div className="item-options">
                    <div className="option">
                      <p>Rəng:</p>
                      <span>Bənövşəyi</span>
                    </div>
                    <div className="option">
                      <p>Yaddas:</p>
                      <span>64 Gb</span>
                    </div>
                  </div>
                  <div className="item-price">
                    <div className="price">
                      {/* <span className="old-price">200 ₼</span> */}
                      <span className="new-price">{item.price.raw}</span>
                    </div>
                    <div className="counter">
                      <span className="minus">-</span>
                      <p>{item.quantity}</p>
                      <span className="plus">+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="counter">
                <span
                  onClick={()=>changeCount("minus",item.quantity,item.id)}
                  className="minus"
                >
                  -
                </span>
                <p>{quantity.id===item.id ? quantity.count : item.quantity}</p>
                <span onClick={()=>changeCount("plus",item.quantity,item.id)} className="plus">+</span>
              </div>
              <div onClick={()=>deleteItem(item.id)} className="delete-btn">
                <RiDeleteBinLine />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BasketContent;
