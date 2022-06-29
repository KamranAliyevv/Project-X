import React from 'react'
import bannerImg from "../../../design/images/banner-img.png";
import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };

  return (
    <div className='banner'>
         <div className="container">
             <Slider {...settings}>
        <div className="banner-inner">
        <div className='banner-info'>
            <h2>Buy & Sell <br/> What's Now & Next</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, dolor. Eos ullam hic saepe quisquam enim a accusamus. Esse, consequatur.</p>
        </div>
          <div className='banner-img'>
            <img src={bannerImg} alt="bannerImg"/>
          </div>
          </div>
          <div className="banner-inner">
        <div className='banner-info'>
            <h2>Buy & Sell <br/> What's Now & Next</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, dolor. Eos ullam hic saepe quisquam enim a accusamus. Esse, consequatur.</p>
        </div>
          <div className='banner-img'>
            <img src={bannerImg} alt="bannerImg"/>
          </div>
          </div>
          <div className="banner-inner">
        <div className='banner-info'>
            <h2>Buy & Sell <br/> What's Now & Next</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, dolor. Eos ullam hic saepe quisquam enim a accusamus. Esse, consequatur.</p>
        </div>
          <div className='banner-img'>
            <img src={bannerImg} alt="bannerImg"/>
          </div>
          </div>
        </Slider>
             </div>
    </div>
  )
}

export default Banner