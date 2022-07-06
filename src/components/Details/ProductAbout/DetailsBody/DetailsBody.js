import React, { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/system";
import { Rating } from "@mui/material";
import { CgShoppingCart } from "react-icons/cg";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {useSelector } from "react-redux/es/exports";
import colorNameToHex from "@uiw/react-color-name";
// import { createBasket } from "../../../../redux/actions/basket";

const DetailsBody = ({ setSelectImage }) => {
  const data = useSelector((state) => state.details);
  const [colorActive, setColorActive] = useState(null);
  const [storageActive, setStorageActive] = useState(null);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(null);
  const [selectColor, setSelectColor] = useState(null);
  const [selectSize, setSelectSize] = useState(null);
  const [colorValid,setColorValid]=useState(true);
  // const dispatch=useDispatch();
  const basketId=useSelector(state=>state.basket)
  function changeColor(id, imageId) {
    setColorActive(id);
    let d = [...data.response.assets].filter((el) => imageId.includes(el.id));
    setSelectImage([d]);
    setColorValid(true);
  }
  function changeStorage(id, totalPrice) {
    setStorageActive(id);
    setPrice(totalPrice);
  }
  const setImage = useCallback(() => {
    if (data?.response.id !== undefined) {
      setSelectImage([data.response.assets]);
    }
  }, [data, setSelectImage]);

  const addToBasket =async (item)=> {

    if(selectColor===null){
      setColorValid(false);
    }
    else{

      console.log(basketId)
      
    //     const url = new URL(
    //       `${baseURL}/carts/cart_kamrand43543`
    //   );

    //   let headers = {
    //       "X-Authorization": "pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
    //       "Content-Type": "application/json",
    //       "Accept": "application/json",
    //   };

    //   // let body = {
    //   //     "id": "prod_R4OANwRqklvYL8",
    //   //     "quantity": 5,
    //   //     "options":{
    //   //       "color":selectColor,
    //   //       "size":selectSize
    //   //     },
    //   // }

    //   await axios.get(url, {
    //     headers: headers,
    // })
    // .then(response=>{
    //   console.log(response)
    //   localStorage.setItem("cartId",response?.data?.id)
    // })
    // }
  }
}

  useEffect(() => {
    setImage();
  }, [data, setImage]);
  return data?.response && data?.response?.id !== undefined ? (
    <div className="details-body">
      <h3>{data.response.name}</h3>
      <div className="detail-user">
        <div className="rating">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating name="read-only" value={2} readOnly />
          </Box>
        </div>
        <span>(226)</span>
        <p>57 rəy</p>
      </div>
      <div className="detail-price">
        {/* <div className="old-price">3000 ₼</div> */}
        <div className="new-price">
          {price ? price * count : data.response.price.raw * count} ₼
        </div>
      </div>
      <div className="detail-tools color-tools">
        <p>Rəng:</p>
        <div className="colors">
          {data.response.variant_groups
            ?.find((el) => el.name === "color")
            ?.options.map((option) => {
              return (
                <div
                  key={option.id}
                  onClick={() => [changeColor(option.id, option.assets),setSelectColor(option.id)]}
                  className={`color-inner ${
                    colorActive === option.id ? "active" : ""
                  }`}
                >
                  <div
                    className="color"
                    style={{ backgroundColor: colorNameToHex(option.name) }}
                  ></div>
                </div>
              );
            })}
        </div>
        <div className={`color-valid ${!colorValid ? "valid" : ""}`}>
          <AiOutlineInfoCircle/>
          Rəng seçilməyib
        </div>
      </div>
      {data.response.variant_groups?.find((el) => el.name === "size") ? (
        <div className="detail-tools">
          <p>Yaddaş:</p>
          <div className="storages">
            {data.response.variant_groups
              ?.find((el) => el.name === "size")
              ?.options.map((option, index) => {
                if(index === 0 && storageActive == null && selectSize===null){ setSelectSize(option.id)}
                return (
                  <div
                    key={option.id}
                    onClick={() =>
                      [changeStorage(
                        option.id,
                        option.price.raw + +data.response.price.raw
                      ),
                      setSelectSize(option.id)
                      ]
                    }
                    className={`storage ${
                      index === 0 && storageActive == null ? "active" : ""
                    } ${storageActive === option.id ? "active" : ""}`}
                  >
                    {option.name}gb
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="counter">
        <p>Miqdar:</p>
        <div
          onClick={() => {
            if (count !== 1) setCount(count - 1);
          }}
          className={`count-btn minus ${count === 1 ? "disabled" : ""}`}
        >
          -
        </div>
        <div className="count">{count}</div>
        <div onClick={() => setCount(count + 1)} className="count-btn plus">
          +
        </div>
      </div>
      <div className="addToCard">
        <div className="detail-price">
          {/* <div className="old-price">3000 ₼</div> */}
          <div className="new-price">
            {price ? price * count : data.response.price.raw * count} ₼
          </div>
        </div>
        <button onClick={() => addToBasket(data.response)}>
          <CgShoppingCart />
          <p>Səbətə at</p>
        </button>
      </div>
    </div>
  ) : (
    " "
  );
};

export default DetailsBody;
