import React from 'react'
import ProfileFull from './ProfileFull/ProfileFull';
// import ProfileEmpty from './ProfileEmpty/ProfileEmpty';

const ProfileOrders = () => {

  return (
    <div className='profile-orders'>
      <div className="profil-title">Sifarişlərim (4 məhsul)</div>
      <ProfileFull/>
      {/* <ProfileEmpty/> */}
    </div>
  )
}

export default ProfileOrders