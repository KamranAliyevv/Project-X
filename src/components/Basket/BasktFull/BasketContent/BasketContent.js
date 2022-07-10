import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { deleteFromBasket } from "../../../../redux/actions/basket";
import { useDebouncedCallback } from 'use-debounce';
import { updateBasket } from "../../../../redux/actions/basket";
import colorNameToHex from "@uiw/react-color-name";
import { toast } from 'react-toastify';

const BasketContent = ({ products, loading }) => {
  const [quantity, setQuantity] = useState({
    count:null,
    id:null
  });
  const [toastify,setToastify]=useState(false);
  const dispatch=useDispatch();

  const updateDebounced = useDebouncedCallback(
    (obj,toastifyText)=>
    {
        obj && dispatch(updateBasket(obj));
        setToastify(toastifyText)
    },
    1000
  );
  const counterDebounced = useDebouncedCallback(
    (obj)=>{setQuantity(obj)},
    20
  );
  
  const notify = (text) => toast(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type:"success"
    });

  function deleteItem(lineItemId){
    const basketId=localStorage.getItem("basketId");
    let obj={
        basketId,
        lineItemId
      }
      const notifyText="Məhsu silindi";
      updateDebounced(null,notifyText)
    dispatch(deleteFromBasket(obj));
  }
  function changeCount(type,qty,lineItemId){
    const basketId=localStorage.getItem("basketId");
    let newQty=quantity.count || qty;
      newQty=(type==="minus") ? (quantity.count===1) ? 1 : newQty-1  : newQty+1;
      let obj={
        basketId,
        lineItemId,
        quantity:newQty
      }
      let quantityObj={count:newQty,id:lineItemId}
      const notifyText=(type==="plus")? "Məhsul artırıldı" : "Məhsul azaldıldı";
      counterDebounced(quantityObj)
      updateDebounced(obj,notifyText);
    }

    useEffect(()=>{
      if(!loading){
        setQuantity({count:null,id:null});
      }
    },[products,loading])

    useEffect(()=>{
      if(!loading && toastify){
        notify(toastify);
        setToastify(false)
      }
    },[products,loading,toastify])
    
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
                      <span className="color" style={{ backgroundColor: colorNameToHex(item.selected_options[0].option_name)}}></span>
                    </div>
                    <div className="option">
                      <p>Yaddas:</p>
                      <span>{item.selected_options[1].option_name} Gb</span>
                    </div>
                  </div>
                  <div className="item-price">
                    <div className="price">
                      {/* <span className="old-price">200 ₼</span> */}
                      <span className="new-price">{item.price.raw}</span>
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
