import React from "react";
import ProfileMenu from "../../components/Profile/ProfileMenu/ProfileMenu";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="profile-inner">
          <ProfileMenu />
          <div className="profile-body">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
