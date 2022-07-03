import React from 'react'
import emptyBasket from "../../../../../design/images/shopping-cart.png";

const ProfileEmpty = () => {
  return (
    <div className='profile-empty'>
        <img src={emptyBasket} alt="empty" />
        <p>Səbətinizdə hazırda heç bir sifarişiniz yoxdur</p>
    </div>
  )
}

export default ProfileEmpty