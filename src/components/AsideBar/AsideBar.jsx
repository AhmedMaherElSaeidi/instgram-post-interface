import React from "react";
import users from "../../core/Data";

import { BsDot, BsGenderFemale, BsGenderMale } from "react-icons/bs";

import "./AsideBar.css";

const AsideBar = () => {
  return (
    <div className="ig-aside-bar">
      {users.map((user, index) => {
        return (
          <div key={index} className="user-info">
            <div>
              <img src={user.profile} alt="profile_img" />
            </div>
            <div>
              <p className="mb-1">{user.name}</p>
              <div>
                <p>{user.origin}</p>
                <BsDot />
                <p>
                  {user.Gender === "M" ? <BsGenderMale /> : <BsGenderFemale />}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AsideBar;
