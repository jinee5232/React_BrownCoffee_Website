import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";

import "./styles/layout.css";

const Layout = () => {
  return (
    <div className="index_bg">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
