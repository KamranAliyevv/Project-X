import React,{useEffect} from 'react'
import Banner from '../../components/Home/banner/Banner';
import ProductSlide from '../../components/Home/productSlide/ProductSlide';
import Card from "../../components/Home/card/Card";
import CountCard from "../../components/Home/countCard/CountCard";
import Advantages from "../../components/Home/advantages/Advantages";
import Partner from "../../components/Home/partner/Partner";
import { useSelector,useDispatch } from 'react-redux';
import { fetchAccesories,fetchPhones,fetchSmart } from '../../redux/actions/products';
const Home = () => {

  const dispatch=useDispatch();
  const {accesories,phones}=useSelector(state=>state);
  


  useEffect(()=>{
    dispatch(fetchAccesories())
    dispatch(fetchPhones())
    dispatch(fetchSmart());
    window.scrollTo(100, 0);
},[dispatch])
  return (
    <div id="home">
            <Banner/>
            <ProductSlide products={phones.response.slice(0,8)} loading={phones.loading} text="Ən çox satılan məhsullar" slug={"telefon"}/>
            <ProductSlide products={phones.response.slice(9,17)} loading={phones.loading} text="Yeni gələn məhsullar" slug={"telefon"}/>
            <Card/>
            <ProductSlide products={accesories.response} loading={accesories.loading} text="Yeni gələn aksessuarlar" slug={"aksesuarlar"}/>
            <CountCard/>
            <Advantages/>
            <Partner/>
    </div>
  )
}

export default Home