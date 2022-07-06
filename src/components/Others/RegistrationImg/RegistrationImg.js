import React from "react";
import loginImg from "../../../design/images/login.png";
import { Link } from 'react-router-dom';

const RegistrationImg = ({btnText,linkText,linkDirection}) => {
  return (
    <div className="login-img-block">
      <img src={loginImg} alt="" />
      <div className="have-account">
        {btnText}
        <Link to={linkDirection}>{linkText}</Link>
      </div>
      <div className="bg-dots">
        {new Array(100).fill("").map((item,index) => {
          return <span key={index}></span>;
        })}
      </div>
    </div>
  );
};

export default RegistrationImg;
