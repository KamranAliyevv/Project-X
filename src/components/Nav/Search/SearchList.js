import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/actions/products";

const SearchList = ({ focus, searchValue }) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const filteredProducts =
    searchValue &&
    products?.originalResponse?.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  let searchList = JSON.parse(localStorage.getItem("search"));
  let lastSearch =
    searchList.length > 10
      ? searchList.reverse().slice(0, 10)
      : searchList.reverse();
  let mostRepeatSearchList = searchList
    .sort(
      (a, b) =>
      searchList.filter((v) => v === a).length - searchList.filter((v) => v === b).length
    ).reverse();
    const mostRepeatSearch=[];
    mostRepeatSearchList.forEach((item)=>{
        if(!mostRepeatSearch.includes(item)) mostRepeatSearch.push(item);
    })
    
  useEffect(() => {
    dispatch(fetchProducts(""));
  }, [dispatch]);
  return (
    focus && (
      <div className="search-list">
        {!searchValue ? (
          searchList ? (
            <div className="history-list">
              <div className="history-item">
                <div className="title">
                  <h4>Son axtarışlar</h4>
                  <span>Təmizlə</span>
                </div>
                <div className="result-list">
                  {lastSearch.map((item, index) => {
                    return <span key={index}>{item}</span>;
                  })}
                </div>
              </div>
              <div className="history-item">
                <div className="title">
                  <h4>Çox axtarılanlar</h4>
                  <span>Təmizlə</span>
                </div>
                <div className="result-list">
                  {mostRepeatSearch.map((item, index) => {
                    return <span key={index}>{item}</span>;
                  })}
                </div>
              </div>
            </div>
          ) : (
            <span>Axtariniz listiniz bosdur</span>
          )
        ) : (
          <ul className="search-products-list">
            {filteredProducts?.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.assets[0].url} alt="img" />
                  <div className="search-product-info">
                    <p>{item.name}</p>
                    <span>{item.price.raw} ₼</span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    )
  );
};

export default SearchList;
