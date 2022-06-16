import React from 'react'
import {FaAngleRight} from "react-icons/fa";
import phoneCard from "../../../design/images/phoneCard.png";
import smartCard from "../../../design/images/smartCard.png";
import aksesuarCard from "../../../design/images/aksesuarCard.png";

const CountCard = () => {
  return (
    <div className='countCard'>
        <div className="container">
            <div className="countCard-inner">
                <div className='side-card'>
                <div className="phone-card card">
                    <div className="card-info">
                        <h3>Telefon</h3>
                        <p>
                            Məhsul sayı:
                            <span>14</span>
                        </p>
                        {/* <a href='#'>
                        Məhsullar keçid
                        <FaAngleRight/>
                        </a> */}
                    </div>
                    <img src={phoneCard} alt="CardImage" />
                </div>
                </div>
                <div className='side-card'>
                <div className="aksesuar-card card">
                    <div className="card-info">
                        <h3>Telefon</h3>
                        <p>
                            Məhsul sayı:
                            <span>14</span>
                        </p>
                        {/* <a href=''>
                        Məhsullar keçid
                        <FaAngleRight/>
                        </a> */}
                    </div>
                    <img src={smartCard} alt="CardImage" />
                </div>
                <div className="smart-card card">
                    <div className="card-info">
                        <h3>Telefon</h3>
                        <p>
                            Məhsul sayı:
                            <span>14</span>
                        </p>
                        {/* <a href='#'>
                        Məhsullar keçid
                        <FaAngleRight/>
                        </a> */}
                    </div>
                    <img src={aksesuarCard} alt="CardImage" />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountCard