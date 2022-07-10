import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchList = ({ focus, searchValue }) => {
  const products = useSelector((state) => state.products);
  const filteredProducts = searchValue && products?.originalResponse?.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(filteredProducts)
  return (
    focus && (
      <div className="search-list">
        {!searchValue ? (
          <div className="history-list">
            <div className="history-item">
              <div className="title">
                <h4>Son axtarışlar</h4>
                <span>Təmizlə</span>
              </div>
              <div className="result-list">
                <Link to="./iphone">Iphone</Link>
                <Link to="./samsung">Samsung</Link>
                <Link to="./xiaomi">Xiaomi</Link>
              </div>
            </div>
            <div className="history-item">
              <div className="title">
                <h4>Çox axtarılanlar</h4>
                <span>Təmizlə</span>
              </div>
              <div className="result-list">
                <Link to="./iphone">Iphone</Link>
                <Link to="./samsung">Samsung</Link>
                <Link to="./xiaomi">Xiaomi</Link>
                <Link to="./samsung">Iphone</Link>
                <Link to="./samsung">Samsung</Link>
                <Link to="./xiaomi">Xiaomi</Link>
              </div>
            </div>
          </div>
        ) : (
          <ul className="search-products-list">
            {filteredProducts?.map((item) => {
              return (
                <li key={item.id}>
                  <img
                    src={item.assets[0].url}
                    alt="img"
                  />
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
