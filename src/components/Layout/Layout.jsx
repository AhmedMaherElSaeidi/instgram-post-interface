import React from "react";
import AsideBar from "../AsideBar/AsideBar";
import PostCards from "../PostCards/PostCards";

import "./Layout.css";

const Layout = () => {
  return (
    <div className="home-view">
      <div className="home-posts">
        <PostCards />
      </div>
      <div className="home-users">
        <AsideBar />
      </div>
    </div>
  );
};

export default Layout;
