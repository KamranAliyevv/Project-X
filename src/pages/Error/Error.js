import React from 'react'
import {useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate=useNavigate();

  return (
    <div className='error'>
        <img src='https://ebaba.az/public/frontend/images/error404.gif' alt=""/>
        <p>Səhifə tapılmadı</p>
        <button onClick={()=>navigate("/")}>Ana səhifə</button>
    </div>
  )
}

export default Error