import React from 'react'
import "../pages/home.scss";
import Header from '../components/Nav/Header/Header';
import Banner from '../components/Home/banner/Banner';
import ProductSlide from '../components/Home/productSlide/ProductSlide';
import Card from "../components/Home/card/Card";
import CountCard from "../components/Home/countCard/CountCard";
import Advantages from "../components/Home/advantages/Advantages";
import Partner from "../components/Home/partner/Partner";
import Footer from "../components/Nav/Footer/Footer";

const Home = () => {
  return (
    <div id="home">
            <Header/>
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