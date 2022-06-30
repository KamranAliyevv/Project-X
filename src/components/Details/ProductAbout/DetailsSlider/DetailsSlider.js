import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const DetailsSlider = ({selectImage}) => {
  const settings = {
    customPaging: function (i) {
      return (
      <a href='/'>
      <img src={selectImage[i]?.url} alt="img"/>
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

  // const [state,setState] =useState( {
  //   backgroundPosition: '0% 0%'
  // })

  // const handleMouseMove = e => {
  //   const { left, top, width, height } = e.target.getBoundingClientRect()
  //   const x = (e.pageX - left) / width * 100
  //   const y = (e.pageY - top) / height * 100
  //   setState({ backgroundPosition: `${x}% ${y}%` })
  // }
 
  return (
    <div className='details-slider'>
        <Slider {...settings}>
          {selectImage.map(ass=>{
              return (
            <div key={ass.id}>
           <img src={ass.url} alt="" />
          </div>
           )
          })}
          
        </Slider>
    </div>
  )
}

export default DetailsSlider