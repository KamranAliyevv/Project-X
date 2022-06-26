import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const DetailsSlider = ({selectImage}) => {
  const settings = {
    customPaging: function (i) {
      return (
      <a href='/'>
      <img src={selectImage[i]?.url} />
    </a>
    );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='details-slider'>
        <Slider {...settings}>
          {selectImage.map(ass=>{
           return (
            <div key={ass.id}>
            <img src={ass.url}  alt="img" />
          </div>
           )
          })}
          
        </Slider>
    </div>
  )
}

export default DetailsSlider