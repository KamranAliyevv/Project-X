import React,{useState,useEffect} from 'react'
import {FiSearch,FiHeart,FiShoppingCart} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
import {NavLink,Link} from "react-router-dom";
import Home from '../../../pages/Home';
import logo from "../../../design/images/logo.png";
import Commerce from '@chec/commerce.js';

const Header = () => {
    const [open,setOpen]=useState(false);

    useEffect(()=>{
        async function getProducts(){
            let data= await fetch(Commerce);
            let json=await(data.json);
            console.log(json)
        }
    },[])

    function openMenu(){
        console.log(1)
        setOpen(!open);
    }
  return (
    <header id="header">
        <div className="container">
            <div className="header-inner">
        <div className="header-top">
            <div className="header-left">
                <div onClick={openMenu} className={`burger-menu ${open ? "active" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={logo} alt="icon" />
            </div>
            <div className="header-search">
                <form id="searchForm">
                <button className='search-icon'>
                    <FiSearch/>
                </button>
                <input type="text" name='search' id='search' placeholder='Axtarış..' />
                </form>
            </div>
            <div className="header-icons">
                <div className="user-icon">{<BiUser/>}</div>
                <div className="favorites-icon">{<FiHeart/>}</div>
                <div className="bag-icon">
                    {<FiShoppingCart/>}
                    <div className="bag-count">0</div>
                </div>
            </div>
        </div>
        <div className={`menu ${open ? "left-0" : ""}`} >
            <ul>
            <li><NavLink to={"/"} element={<Home/>}/>Yeni</li>
            <li><NavLink to={"/"} element={<Home/>}/>Apple</li>
            <li><NavLink to={"/"} element={<Home/>}/>Samsung</li>
            <li><NavLink to={"/"} element={<Home/>}/>Xiaomi</li>
            <li><NavLink to={"/"} element={<Home/>}/>Redmi</li>
            <li><NavLink to={"/"} element={<Home/>}/>Bütün Brendlər</li>
            <li><NavLink to={"/"} element={<Home/>}/>Aksessuarlar</li>
            <li><NavLink to={"/"} element={<Home/>}/>Endirimlər</li>
            </ul>
            <div className="menu-btns">
                <Link to=""><span className='login-btn'>Daxil ol</span></Link>
                <Link to=""><span className='register-btn'>Qeydiyatdan keç</span></Link>
            </div>
        </div>
        </div>
        </div>
    </header>
  )
}

export default Header