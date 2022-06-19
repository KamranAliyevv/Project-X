import React,{useEffect} from 'react'
import "../Home/home.scss";
import Banner from '../../components/Home/banner/Banner';
import ProductSlide from '../../components/Home/productSlide/ProductSlide';
import Card from "../../components/Home/card/Card";
import CountCard from "../../components/Home/countCard/CountCard";
import Advantages from "../../components/Home/advantages/Advantages";
import Partner from "../../components/Home/partner/Partner";
import Footer from "../../components/Nav/Footer/Footer";
import { useSelector,useDispatch } from 'react-redux';
import { fetchAccesories,fetchPhones,fetchSmart } from '../../redux/actions/products';
const Home = () => {

  const dispatch=useDispatch();
  const {accesories,phones}=useSelector(state=>state);
  


  useEffect(()=>{
    dispatch(fetchAccesories())
    dispatch(fetchPhones())
    dispatch(fetchSmart());
},[dispatch])
  return (
    <div id="home">
            <Banner/>
            <ProductSlide products={phones.response.slice(0,8)} text="Ən çox satılan məhsullar"/>
            <ProductSlide products={phones.response.slice(9,17)} text="Yeni gələn məhsullar"/>
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