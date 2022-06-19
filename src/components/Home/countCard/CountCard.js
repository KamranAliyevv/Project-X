import React from 'react'
import phoneCard from "../../../design/images/phoneCard.png";
import smartCard from "../../../design/images/smartCard.png";
import aksesuarCard from "../../../design/images/aksesuarCard.png";
import { FaAngleRight } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const CountCard = () => {

    const {accesories,phones,smart}=useSelector(state=>state);
    
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
                            <span>{phones.response.length}</span>
                        </p>
                        <Link to="/">Məhsullar keçid <FaAngleRight/></Link>
                    </div>
                    <img src={phoneCard} alt="CardImage" />
                </div>
                </div>
                <div className='side-card'>
                <div className="aksesuar-card card">
                    <div className="card-info">
                        <h3>Smart saat</h3>
                        <p>
                            Məhsul sayı:
                            <span>{smart.response.length}</span>
                        </p>
                        <Link to="/">Məhsullar keçid <FaAngleRight/></Link>
                    </div>
                    <img src={smartCard} alt="CardImage" />
                </div>
                <div className="smart-card card">
                    <div className="card-info">
                        <h3>Aksesuar</h3>
                        <p>
                            Məhsul sayı:
                            <span>{accesories.response.length}</span>
                        </p>
                        <Link to="/">Məhsullar keçid <FaAngleRight/></Link>
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