import React from 'react'
import {FiInfo} from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const ProfileFull = () => {
    const navigate=useNavigate();
    
  return (
    <div className="orders-card">
    <div className="orders-card-item">
      <div className="order-img">
        <img src="https://irshad.az/resized/fit540x550/center/products/44282/7de8f536378c085bf0f9547e45188def.jpg" alt="" />
      </div>
      <div className="order-info-list">
        <div className="order-info date">
          <h3>Sifariş tarixi:</h3>
          <p>12.04.2020</p>
        </div>
        <div className="order-info status">
          <h3>Sifariş tarixi:</h3>
          <p className='status-way'>
            Yoldadır
            <FiInfo/></p>
        </div>
        <div className="order-info price">
          <h3>Ümumi məbləğ::</h3>
          <p>240 ₼</p>
        </div>
      </div>
        <button onClick={()=>navigate(`/profil/sifarisler/${1234}`)} className="detail-btn">Sifarişin detalları</button>
    </div>
    <div className="orders-card-item">
      <div className="order-img">
        <img src="https://irshad.az/resized/fit540x550/center/products/44282/7de8f536378c085bf0f9547e45188def.jpg" alt="" />
      </div>
      <div className="order-info-list">
        <div className="order-info date">
          <h3>Sifariş tarixi:</h3>
          <p>12.04.2020</p>
        </div>
        <div className="order-info status">
          <h3>Sifariş tarixi:</h3>
          <p className='status-way'>
            Yoldadır
            <FiInfo/></p>
        </div>
        <div className="order-info price">
          <h3>Ümumi məbləğ::</h3>
          <p>240 ₼</p>
        </div>
      </div>
        <button className="detail-btn">Sifarişin detalları</button>
    </div>
    <div className="orders-card-item">
      <div className="order-img">
        <img src="https://irshad.az/resized/fit540x550/center/products/44282/7de8f536378c085bf0f9547e45188def.jpg" alt="" />
      </div>
      <div className="order-info-list">
        <div className="order-info date">
          <h3>Sifariş tarixi:</h3>
          <p>12.04.2020</p>
        </div>
        <div className="order-info status">
          <h3>Sifariş tarixi:</h3>
          <p className='status-delivered'>
          Çatdırılıb
            <FiInfo/></p>
        </div>
        <div className="order-info price">
          <h3>Ümumi məbləğ::</h3>
          <p>240 ₼</p>
        </div>
      </div>
        <button className="detail-btn">Sifarişin detalları</button>
    </div>
    <div className="orders-card-item">
      <div className="order-img">
        <img src="https://irshad.az/resized/fit540x550/center/products/44282/7de8f536378c085bf0f9547e45188def.jpg" alt="" />
      </div>
      <div className="order-info-list">
        <div className="order-info date">
          <h3>Sifariş tarixi:</h3>
          <p>12.04.2020</p>
        </div>
        <div className="order-info status">
          <h3>Sifariş tarixi:</h3>
          <p className='status-rejected'>
          İmtina edilib
            <FiInfo/></p>
        </div>
        <div className="order-info price">
          <h3>Ümumi məbləğ::</h3>
          <p>240 ₼</p>
        </div>
      </div>
      <button className="detail-btn">Sifarişin detalları</button>
    </div>
  </div>
  )
}

export default ProfileFull