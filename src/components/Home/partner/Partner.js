import React from 'react'
import Slider from "react-slick";
import partner1 from "../../../design/images/partner-1.png";
import partner2 from "../../../design/images/partner-2.png";
import partner3 from "../../../design/images/partner-3.png";
import partner4 from "../../../design/images/partner-4.png";
import partner5 from "../../../design/images/partner-5.png";
import partner6 from "../../../design/images/partner-6.png";
import partner7 from "../../../design/images/partner-7.png";

const Partner = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        swipeToSlide:true,
        initialSlide: 0,
        dots:true,
      };
  return (
    <div className='partners'>
        <div className="container">
                <Slider {...settings}>
                <div className="partner">
                    <img src={partner1} alt="partnerImg" />
                </div>
                <div className="partner">
                    <img src={partner2} alt="partnerImg" />
                </div>
                <div className="partner">
                    <img src={partner3} alt="partnerImg" />
                </div>
                <div className="partner">
                    <img src={partner4} alt="partnerImg" />
                </div>
                <div className="partner">
                    <img src={partner5} alt="partnerImg" />
                </div>
                <div className="partner">
                    <img src={partner6} alt="partnerImg" />
                </div>
                <div className="partner">
                    <img src={partner7} alt="partnerImg" />
                </div>
                </Slider>
        </div>
    </div>
  )
}

export default Partner