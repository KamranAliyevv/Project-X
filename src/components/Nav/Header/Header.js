import React, { useEffect, useRef, useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
// import Home from '../../../pages/Home';
import logo from "../../../design/images/logo.png";
import SubMenu from "./subMenu/SubMenu";
import axios from "axios";
import { baseURL } from "../../../api/baseUrl";
import { useNavigate, useLocation } from "react-router-dom";
import { createBasket } from '../../../redux/actions/basket';
import { getBasket } from '../../../redux/actions/basket';
import { useDispatch,useSelector } from 'react-redux';
import SearchList from "../Search/SearchList";
import { search } from "../../../redux/reducer/productsReducer";
import { useDebouncedCallback } from "use-debounce";


const Header = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState([]);
  const [show, setShow] = useState(false);
  const navigate=useNavigate();
  const location = useLocation();
  const dispatch=useDispatch();
  const localBasketId=localStorage.getItem("basketId") || null;
  const registerHeader=(location.pathname.includes("register") || location.pathname.includes("login"));
  const basket=useSelector(state=>state.basket);
  const [focus,setFocus]=useState(false);
  const [notFocusInList,setNotFocusInList]=useState(false);
  const [searchData,setSearchData]=useState(null);
  const [searchValue,setSearchValue]=useState(null);
  const [loading,setLoading]=useState(false);
  const searchRef=useRef();

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

  const searchDebounced = useDebouncedCallback(
    async (searchValue)=>
    {
      setLoading(true);
      const url = new URL(
        "https://api.chec.io/v1/products"
    );
    
    let params = {
        "query": searchValue,
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
    
    let headers = {
        "X-Authorization": "pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
        "Accept": "application/json",
        "Content-Type": "application/json",
    };
    
    const response=await axios.get(url, {
        headers: headers,
    })
    console.log(response?.data?.data)
    if (response?.data?.data) {
      setSearchData(response.data.data);
    }
    setLoading(false);
    },
    500
  );

  function openMenu() {
    setOpen(!open);
    setShow(false);
  }

  function handleSearch(e){
    setSearchData(null);
    let value=e.target.value;
    if(value.trim().length>0){
      setSearchValue(value.trim());
      searchDebounced(value.trim());
    }
    else{
      setSearchValue(null);
      setLoading(false)
    }
  }

  function getSearching(e){
    e.preventDefault();
    let searchKeys=JSON.parse(localStorage.getItem("search")) || [];
    const inputValue=searchRef.current.value.trim();
    if(inputValue.length>0){
    searchKeys.push(inputValue);
    localStorage.setItem("search",JSON.stringify(searchKeys))
    setFocus(false);
    searchRef.current.blur()
    navigate("/products");
    dispatch(search(inputValue))
    searchRef.current.value="";
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(()=>{
    if(location.pathname!=="/products"){
      dispatch(search(""))
    }
    setFocus(false);
    setSearchValue(false);
  },[location,dispatch])

  useEffect(()=>{
  if(localBasketId===null){
  dispatch(createBasket());
  }
  else{
    dispatch(getBasket());
  }
},[dispatch,localBasketId])
  return (
    <header id="header">
      <div className="container">
        {
          !registerHeader ?
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
              <Link to={"/"}><img src={logo} alt="icon" /></Link>
            </div>
            <div className={`header-search${open ? " none" : ""}`}>
              <form onSubmit={getSearching} onChange={handleSearch} id="searchForm">
                <button className="search-icon">
                  {loading ? <div className="lds-dual-ring"></div>: <FiSearch />}
                </button>
                <input
                  ref={searchRef}
                  onFocus={()=>setFocus(true)}
                  onBlur={()=>{if(!notFocusInList) setFocus(false)}}
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Axtarış.."
                  autoComplete="off"
                />
              </form>
              <SearchList focus={focus} notFocusInList={notFocusInList} setNotFocusInList={setNotFocusInList} searchValue={searchValue} searchData={searchData} searchRef={searchRef}/>
            </div>
            <div className="header-icons">
              <div onClick={()=>navigate("/login")} className="user-icon">{<BiUser />}</div>
              <div className="favorites-icon">{<FiHeart />}</div>
              <div onClick={()=>navigate("/basket")} className="bag-icon">
                <FiShoppingCart />
                <div className="bag-count">{basket?.response?.total_items}</div>
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
                      if(!category.children.length > 0){
                        setOpen(false);
                      }
                      getSubCategory(category, false);
                    }}
                    onMouseOver={() => {
                      getSubCategory(category, true);
                    }}
                    onMouseLeave={() => getSubCategory(false, true)}
                    key={category.id}
                  >
                    {category.children.length === 0 ? (
                      <NavLink
                        to={`products/${category.slug}`}
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
              <Link to="/login">
                <span className="login-btn">Daxil ol</span>
              </Link>
              <Link to="/register">
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
        :
        <div className="header-logo">
        <Link to={"/"}><img src={logo} alt="icon" /></Link>
        </div>
}
      </div>
    </header>
  );
};

export default Header;
