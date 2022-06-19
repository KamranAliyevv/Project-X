import React from 'react'
import "./breadCrumbs.scss";
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const BreadCrumbs = () => {
  return (
    <div className='breadcrumbs'>
        <div className="container">
            <div className="breadcrumbs-inner">
                <ul className="bread-list">
                    <li><Link to="/">Ana Sehife</Link>{<FaAngleRight/>}</li>
                    <li><Link to="/products">Products</Link>{<FaAngleRight/>}</li>
                    <li className='bread-current'>İtem</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumbs