import React,{useState,useEffect} from 'react'
import "../pages/home.scss";
import Header from '../components/Nav/Header/Header';
import Banner from '../components/Home/banner/Banner';
import ProductSlide from '../components/Home/productSlide/ProductSlide';
import Card from "../components/Home/card/Card";
import CountCard from "../components/Home/countCard/CountCard";
import Advantages from "../components/Home/advantages/Advantages";
import Partner from "../components/Home/partner/Partner";
import Footer from "../components/Nav/Footer/Footer";
import axios from "axios";
import { baseURL } from '../api/baseUrl';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAccesories,fetchAllProducts } from '../redux/actions/products';
const Home = () => {

  const dispatch=useDispatch();

  const [categories,setCategories]=useState([]);
  const [products,setProducts]=useState([]);
  const {accesories,allData}=useSelector(state=>state);
  const x=useSelector(state=>state);
  console.log(x)
  async function getCategory(){
    const categoryUrl = new URL(baseURL+"/categories");

    let params = {
      "depth": "3",
  };

  Object.keys(params)
      .forEach(key => categoryUrl.searchParams.append(key, params[key]));

      let response= await axios.get(categoryUrl,{
      headers: {
          "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
        },
      }
      )
     if(response.data.data) setCategories(response.data.data.reverse());
  }

  async function getProducts(){
    let productUrl="https://api.chec.io/v1/products";

    let response=await axios.get(productUrl,{
      headers:{
        "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
      }
    })
    setProducts(response.data.data);
  }
  useEffect(()=>{
    getProducts()
    getCategory()
    dispatch(fetchAccesories())
    dispatch(fetchAllProducts())
},[])
  return (
    <div id="home">
            <Header categories={categories}/>
            <Banner/>
            <ProductSlide products={products.filter(item=>item.categories.find(i=>i.slug!=="aksesuarlar")).slice(0,8)} text="Ən çox satılan məhsullar"/>
            <ProductSlide products={products.filter(item=>item.categories.find(i=>i.slug!=="aksesuarlar")).slice(8,16)} text="Yeni gələn məhsullar"/>
            <Card/>
            <ProductSlide products={accesories.response} text="Yeni gələn aksessuarlar"/>
            <CountCard/>
            <Advantages/>
            <Partner/>
            <Footer/>
    </div>
  )
}

export default Home