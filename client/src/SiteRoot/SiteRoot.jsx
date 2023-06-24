import React from "react";
import Header from "../layout/Site/Header/Header";
import Footer from "../layout/Site/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
const SiteRoot = () => {
  const location = useLocation();
  
  console.log(location);
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/regist" &&<Header />}

      <Outlet />
      {location.pathname !== "/login" &&location.pathname !== "/regist"  &&<Footer />}

    </div>
  );
};

export default SiteRoot;
