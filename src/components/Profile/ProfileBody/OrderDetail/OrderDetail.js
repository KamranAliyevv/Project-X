import React from "react";
import { TbCreditCard } from "react-icons/tb";
import {HiArrowLeft} from "react-icons/hi";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  return (
    <div className="order-detail">
      <div className="profil-title">
        <HiArrowLeft/>
      Sifarişin detalları
      </div>
      <div className="order-detail-inner">
        <div className="detail-header">
          <div className="order-img">
            <img
              src="https://irshad.az/resized/fit540x550/center/products/44282/7de8f536378c085bf0f9547e45188def.jpg"
              alt=""
            />
          </div>
          <div className="order-info">
            <h3>
              iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden 5 G 8690604083886
              0212042
            </h3>
            <div className="order-tools">
              <div className="order-tool">
                <p>Rəng:</p>
                <span>Sarı</span>
              </div>
              <div className="order-tool">
                <p>Yaddaş::</p>
                <span>128 Gb</span>
              </div>
              <div className="order-tool">
                <p>Say:</p>
                <span>3</span>
              </div>
              <div className="order-tool">
                <p>Sifariş tarixi:</p>
                <span>12.04.2020</span>
              </div>
              <div className="order-tool">
                <p>Status:</p>
                <span>Yoldadır</span>
              </div>
            </div>
          </div>
          </div>
          <div className="order-address">
            <div className="address-item">
              <h4>Şəxsi məlumatlar</h4>
              <div className="items-list">
                <span>Gunel</span>
                <span>Mammadova</span>
                <span>+994 77 566 73 27</span>
                <span>ulvinomerov1@gmail.com</span>
              </div>
            </div>
            <div className="address-item">
              <h4>Çatdırılma ünvanı</h4>
              <div className="items-list">
                <span>Bakı şəhəri</span>
                <span>Nərimanov rayonu</span>
                <span>Atatürk pr. 19, İnnoland İnkubasiya Mərkəzi</span>
                <span>Egov, Giriş 2</span>
              </div>
            </div>
            <Link to="/">Düzəliş et</Link>
          </div>
          <div className="order-payment">
            <h4>Ödəmə detalları</h4>
            <div className="payment-list">
              <div className="payment-item">
                <p>Ödəmə metodu</p>
                <span className="payment-type">
                  <TbCreditCard />
                  Kart ilə
                </span>
              </div>
              <div className="payment-item">
                <p>Toplam məbləğ</p>
                <span>1640 ₼</span>
              </div>
              <div className="payment-item">
                <p>Təcili çatdırılma</p>
                <span>5 ₼</span>
              </div>
              <div className="payment-item">
                <p>Promo kod</p>
                <span>-60 ₼</span>
              </div>
            </div>
            <div className="total-price-item">
                <p>Cəmi</p>
                <span>1580 ₼</span>
            </div>
          </div>
          <button className="rate-btn">Məhsulu dəyərləndir</button>
        </div>
      </div>
  );
};

export default OrderDetail;
