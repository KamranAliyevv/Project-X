import React from 'react'
import successImg from "../../design/images/success.png";
import {Link} from "react-router-dom";

const SuccessRegister = () => {
  return (
    <div className='register-success'>
        <div className="container">
            <div className="register-success-inner">
            <img src={successImg} alt="" />
            <h4>Təbriklər</h4>
            <p>Hesabınız uğurla yaradıldı</p>
            <Link to="/login">Daxil ol</Link>
            </div>
        </div>
    </div>
  )
}

export default SuccessRegister