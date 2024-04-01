import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "hamburgers/dist/hamburgers.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";

const header = () => {
  const [hamlistOpen, setListOpen] = useState(null);
  const [hamburOpen, setHamburOpen] = useState(false);
  const hamburClick = () => {
    if (hamburOpen === false) {
      setHamburOpen(true);
      setListOpen(true);
    } else {
      setHamburOpen(false);
      setListOpen(false);
    }
  };
  return (
    <div className="bg-color">
      {/* <!-- header content-start --> */}
      <div className="container pb-3 text-white d-flex justify-content-center hamburger-position overflow-x-hidden">
        <div className="row d-flex justify-content-center mt-5">
          {/* <!-- header 1st line-start --> */}
          <div className="col-10 col-md-12 pb-3 d-flex justify-content-between align-items-center">
            <Link to="/">
              <img src={"../../public/images/Logo/logo.png"} alt="logo" />
            </Link>

            <img src={"../../public/images/Logo/logo2.png"} alt="logo-slogan" />
            <div className="d-none d-sm-none d-md-block">
              <Link to="/member">
                <img
                  src={"../../public/images/icons/tablet_member.png"}
                  alt="member"
                />
              </Link>

              {/* 點擊搜尋頁之後的畫面??? */}
              <a href="#">
                <img
                  src={"../../public/images/icons/tablet_search.png"}
                  alt="search"
                />
              </a>
            </div>

            {/* <!-- hamburger 套件-start --> */}
            <div className="d-block d-md-none">
              <button
                // className={`hamburger hamburger--squeeze ${sharebtn? "share-animation-back": shareMove? "share_animation": ""
                //   }`}
                className={`hamburger hamburger--squeeze ${
                  hamburOpen ? "is-active" : ""
                }`}
                type="button"
                onClick={hamburClick}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
            {/* <!-- hamburger 套件-end --> */}
          </div>
          {/* <!-- header 1st line-end --> */}
          {/* <!-- header 2nd line-start --> */}
          <div className="col-9 col-md-12 d-flex justify-content-between">
            <div>
              <Link
                className="col d-flex flex-column justify-content-center align-items-center"
                to={"/store"}
              >
                <img
                  className="pb-2"
                  src={"../../public/images/icons/store.png"}
                />
                門市資訊
              </Link>
            </div>
            <div>
              <Link
                className="col d-flex flex-column justify-content-center align-items-center"
                to="/shopping"
              >
                <img
                  className="pb-2"
                  src={"../../public/images/icons/shopping.png"}
                />
                線上購物
              </Link>
            </div>
            <div>
              <Link
                className="col d-flex flex-column justify-content-center align-items-center"
                to="/product"
              >
                <img
                  className="pb-2"
                  src={"../../public/images/icons/product.png"}
                />
                商品資訊
              </Link>
            </div>
            <div>
              <Link
                className="col d-flex flex-column justify-content-center align-items-center"
                to="activity"
              >
                {" "}
                <img
                  className="pb-2"
                  src={"../../public/images/icons/activity.png"}
                />
                活動資訊
              </Link>
            </div>
          </div>
          {/* <!-- header 2nd line-end --> */}
        </div>
      </div>
      {/* <!-- header content-end --> */}
      {/* <!-- hamburger list-start --> */}
      <div
        className={`hamburger-list d-md-none ${
          hamlistOpen === null
            ? ""
            : hamlistOpen
            ? "share-animation"
            : "share-animation-back"
        }`}
      >
        {/* <!-- search bar-start --> */}
        <div className="d-flex justify-content-center mt-5">
          <div className="search-bar">
            <div className="ms-2 search-detail">
              <img
                src={"../../public/images/icons/mobile_search.png"}
                alt="icon-search"
              />
              <p className="ps-3">輸入關鍵字 ...</p>
            </div>
            <div className="d-flex align-items-center me-2">
              <button className="search-btn">搜尋</button>
            </div>
          </div>
        </div>
        {/* <!-- search bar-end --> */}
        {/* <!-- hamburgerlist item-start --> */}
        <div className="d-flex justify-content-center hamburger-list-item">
          <a href="#" className="mt-1 hamburger-list-item-line">
            <img className="pe-2" src={"../../public/images/icons/store.png"} />
            門市資訊
          </a>
          <a href="#" className="mt-1 hamburger-list-item-line">
            <img className="pe-2" src={"../../public/images/icons/store.png"} />
            線上購物
          </a>
          <a href="#" className="mt-1 hamburger-list-item-line">
            <img
              className="pe-2"
              src={"../../public/images/icons/product.png"}
            />
            商品資訊
          </a>
          <a href="#" className="mt-1">
            <img
              className="pe-2"
              src={"../../public/images/icons/activity.png"}
            />
            活動資訊
          </a>
        </div>
        {/* <!-- hamburgerlist item-end --> */}
        {/* <!-- hamburgerlist bottom item-start --> */}
        <div className="d-flex justify-content-center hamburger-list-bottom-item">
          <a href="#">
            {" "}
            <img
              className="pe-2"
              src={"../../public/images/icons/mobile_member.png"}
            />
            會員專區{" "}
          </a>
        </div>
        {/* <!-- hamburgerlist bottom item-end --> */}
        {/* <!-- hamburger logo-start --> */}
        <div className="d-flex justify-content-center">
          <img src={"../../public/images/Logo/logo2.png"} alt="logo-slogan" />
        </div>
        {/* <!-- hamburger logo-end --> */}
      </div>
      {/* <!-- hamburger list-end --> */}
    </div>
  );
};

export default header;
