import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/catogory.css";
import "../styles/button.css";
import style from "../styles/style.module.css";

const Shoppingpage = () => {
  const ShopContent = [
    {
      img: "../../public/images/photos/shopping/LINE_gift.jpg",
      imgalt: "member",
      order: "order-0",
      Name: ["LINE", "禮物"],
      TbName: "LINE 禮物",
    },
    {
      img: "../../public/images/photos/shopping/PChome.jpg",
      imgalt: "member",
      order: "order-1",
      Name: ["PChome", ""],
      TbName: "PC home",
    },
    {
      img: "../../public/images/photos/shopping/momo.jpg",
      imgalt: "member",
      order: "order-0",
      Name: ["MOMO ", "購物"],
      TbName: "MOMO 購物",
    },
    {
      img: "../../public/images/photos/shopping/Rakuten.jpg",
      imgalt: "member",
      order: "order-1",
      Name: ["樂天", "購物"],
      TbName: "樂天購物",
    },
  ];

  return (
    <div className="container container-md">
      {/* breadcrumb-start */}
      <nav>
        <ol className="breadcrumb ms-3 pt-4">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            &lt;
            <Link className="breadcrumb-text" to="/shopping">
              線上購物專區
            </Link>
          </li>
        </ol>
      </nav>
      {/* breadcrumb-end */}
      {/* content-start */}
      <div className="row d-flex justify-content-center">
        {/* 第一階-start */}
        {ShopContent.map((item, index) => (
          <div
            className="row col-10 d-flex justify-content-center position-relative mb-4"
            key={index}
          >
            {/* 左區塊-start */}

            <div
              className={`col-6 d-flex justify-content-center align-items-center ${item.order}`}
            >
              {/* 圖片區塊-start */}
              <div className="d-flex justify-content-center align-content-center photo-frame">
                <img
                  className={style.imgsize}
                  src={item.img}
                  alt={item.imgalt}
                />
              </div>
              {/* 圖片區塊-end */}
            </div>
            {/* 左區塊-end */}
            {/* 右區塊-start */}
            <div className="col-6 d-flex justify-content-center align-items-center ">
              {/* 文字區塊-start */}
              <div>
                {/* 手機版title-start */}
                <div className="d-block d-md-none">
                  <h1 className="text-center mob-subpage-title">
                    {item.Name[0]}
                    <br />
                    {item.Name[1]}
                  </h1>
                  <div className="cta">
                    <span>View More</span>
                    <svg width="30px" height="30px" viewBox="0 0 20 10">
                      <path d="M1,9 L20,9"></path>
                      <polyline points="16 5 20 9 5 9 "></polyline>
                    </svg>
                  </div>
                  {/* <button>
                    <img
                      className="me-4 img-fluid"
                      src="../../public/images/icons/more_btn.png"
                    />
                  </button> */}
                </div>
                {/* 手機版title-end */}
                {/* 平板版title-start */}
                <div className="d-none d-md-block">
                  <h1 className="text-center tab-subpage-title">
                    {item.TbName}
                  </h1>
                  <div className="cta">
                    <span>View More</span>
                    <svg width="30px" height="30px" viewBox="0 0 20 10">
                      <path d="M1,9 L20,9"></path>
                      <polyline points="16 5 20 9 5 9"></polyline>
                    </svg>
                  </div>

                  {/* <button>
                    <img
                      className="me-4 img-fluid"
                      src="../../public/images/icons/more_btn.png"
                    />
                  </button> */}
                </div>
                {/* 平板版title-end */}
              </div>
              {/* 文字區塊-end */}
            </div>
            {/* 右區塊-end */}
            {/* btn-view-more-start */}
            {/* <div className="col-5 d-flex justify-content-end mt-3 view-more-position"></div> */}
            {/* btn-view-more-end */}
          </div>
        ))}
      </div>
      {/* content-end */}
    </div>
    // {/* container-end */}
  );
  // section-end
};

export default Shoppingpage;
