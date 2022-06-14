import React from "react";
import card1 from "../../../design/images/product-1.png";
import card2 from "../../../design/images/card-image1.png";
import card3 from "../../../design/images/card-image2.png";
const Card = () => {
  return (
    <div className="cards">
      <div className="container">
        <div className="cards-inner">
          <div className="card card-white">
            <div className="card-text">
              <h3>
                Iphone 13.
                <br />
                Rəngli, Güclü.
                <br />
                Əsl sizə lazım olan.
              </h3>
              <div className="card-info">
                <p>2000 AZN</p>
                <span>Faizsiz taksitlə 127 AZN-dən</span>
              </div>
              <button>İndi alın</button>
            </div>
            <div className="card-image">
              <img src={card1} alt="cardImage" />
            </div>
          </div>
          <div className="card card-gray">
            <div className="card-text">
              <h2>AirTag</h2>
              <h3>Əşyalarınızı tapmağın super asan yolu.</h3>
              <div className="card-info">
                <p>79 AZN-dən</p>
              </div>
              <button>İndi alın</button>
            </div>
            <div className="card-image">
              <img src={card2} alt="cardImage" />
              <img src={card3} alt="cardImage"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
