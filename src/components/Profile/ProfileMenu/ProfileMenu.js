import React from 'react'
import {FiShoppingCart} from "react-icons/fi";
import {CgHeart} from "react-icons/cg";
import {RiUserLine} from "react-icons/ri";
import {GrLocation} from "react-icons/gr";
import {MdExitToApp} from "react-icons/md";

const ProfileMenu = () => {
  return (
    <div className='profile-menu'>
        <h3>Profilim</h3>
        <div className="profile-menu-list">
            <div className="profile-menu-item">
            <FiShoppingCart/>
            <span>Sifarişlərim</span>
            </div>
            <div className="profile-menu-item">
            <CgHeart/>
            <span>Favorilərim</span>
            </div>
            <div className="profile-menu-item">
            <RiUserLine/>
            <span>Şəxsi məlumatlar</span>
            </div>
            <div className="profile-menu-item">
            <GrLocation/>
            <span>Çatdırılma ünvanı</span>
            </div>
            <div className="profile-menu-item">
            <MdExitToApp/>
            <span>Çıxış</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileMenu