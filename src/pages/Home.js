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
const Home = () => {

  const [categories,setCategories]=useState([]);

  useEffect(()=>{
    async function getProducts(){
      const url = new URL(
        "https://api.chec.io/v1/categories"
    );
      let params = {
        "depth": "3",
    };

    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

        let response= await axios.get(url,{
        headers: {
            "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
          },
        }
        )
       if(response.data.data) setCategories(response.data.data.reverse());
    }
getProducts()
},[])
  return (
    <div id="home">
            <Header categories={categories}/>
            <Banner/>
            <ProductSlide text="Ən çox satılan məhsullar"/>
            <ProductSlide text="Yeni gələn məhsullar"/>
            <Card/>
            <ProductSlide text="Yeni gələn aksessuarlar"/>
            <CountCard/>
            <Advantages/>
            <Partner/>
            <Footer/>
    </div>
  )
}

export default Home