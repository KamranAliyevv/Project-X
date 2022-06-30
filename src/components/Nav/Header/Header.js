import React, { useEffect, useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
// import Home from '../../../pages/Home';
import logo from "../../../design/images/logo.png";
import SubMenu from "./subMenu/SubMenu";
import axios from "axios";
import { baseURL } from "../../../api/baseUrl";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState([]);
  const [show, setShow] = useState(false);
  const navigate=useNavigate();

  async function getCategory() {
    const categoryUrl = new URL(baseURL + "/categories");

    let params = {
      depth: "3",
    };

    Object.keys(params).forEach((key) =>
      categoryUrl.searchParams.append(key, params[key])
    );

    let response = await axios.get(categoryUrl, {
      headers: {
        "X-Authorization": "pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
      },
    });
    if (response.data.data) setCategories(response.data.data.reverse());
  }

  function getSubCategory(category, checkSize) {
    if (checkSize) {
      if (window.innerWidth >= 992) {
        if (category?.children?.length > 0) {
          setSub(category);
          setShow(true);
        } else {
          setSub([]);
          setShow(false);
        }
      }
    } else {
      if (category?.children?.length > 0) {
        setSub(category);
        setShow(true);
      } else {
        setSub([]);
        setShow(false);
      }
    }
  }

  function openMenu() {
    setOpen(!open);
    setShow(false);
  }

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <header id="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-top">
            <div className="header-left">
              <div
                onClick={openMenu}
                className={`burger-menu ${open ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img src={logo} alt="icon" />
            </div>
            <div className={`header-search${open ? " none" : ""}`}>
              <form id="searchForm">
                <button className="search-icon">
                  <FiSearch />
                </button>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Axtarış.."
                />
              </form>
            </div>
            <div className="header-icons">
              <div className="user-icon">{<BiUser />}</div>
              <div className="favorites-icon">{<FiHeart />}</div>
              <div onClick={()=>navigate("/basket")} className="bag-icon">
                <FiShoppingCart />
                <div className="bag-count">0</div>
              </div>
            </div>
          </div>
          <div className={`menu ${open ? "left-0" : ""}`}>
            <ul>
              {categories.slice(0, 7).map((category) => {
                return (
                  <li
                    className={category.children.length > 0 ? "subActive" : ""}
                    onClick={() => {
                      getSubCategory(category, false);
                      setOpen(false);
                    }}
                    onMouseOver={() => {
                      getSubCategory(category, true);
                    }}
                    onMouseLeave={() => getSubCategory(false, true)}
                    key={category.id}
                  >
                    {category.children.length === 0 ? (
                      <NavLink
                        to={`${category.slug}`}
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        {category.name}
                      </NavLink>
                    ) : (
                      category.name
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="menu-btns">
              <Link to="">
                <span className="login-btn">Daxil ol</span>
              </Link>
              <Link to="">
                <span className="register-btn">Qeydiyatdan keç</span>
              </Link>
            </div>
          </div>
          <SubMenu
            open={open}
            getSubCategory={getSubCategory}
            show={show}
            setShow={setShow}
            subData={sub}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
