import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../styles/style.module.css";

const Storepage = () => {
  const StoreContent = [
    {
      img: "../../public/images/photos/store/photo.jpg",
      imgalt: "member",
      order: "order-0",
      Name: ["門市", "查詢"],
      TbName: "門市查詢",
    },
    {
      img: "../../public/images/photos/store/photo02.jpg",
      imgalt: "member",
      order: "order-1",
      Name: ["特色", "門市"],
      TbName: "特色門市",
    },
  ];
  return (
    <div className="container container-md">
      {/* breadcrumb-start  */}
      <nav>
        <ol className="breadcrumb ms-3 pt-4 ">
          <li className="breadcrumb-item ">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            &lt;
            <Link className="breadcrumb-text" to="store">
              店家資訊
            </Link>
          </li>
        </ol>
      </nav>
      {/* breadcrumb-end  */}
      {/* content-start  */}
      <div className="row d-flex justify-content-center">
        {StoreContent.map((item, index) => (
          <div
            className="row col-10 d-flex justify-content-center position-relative"
            key={index}
          >
            {/* 左區塊-start  */}
            <div
              className={`col-6 d-flex justify-content-center align-items-center ${item.order}`}
            >
              {/* 圖片區塊-start  */}
              <img className="img-size" src={item.img} alt={item.imgalt} />
              {/* 圖片區塊-end  */}
            </div>
            {/* 左區塊-end  */}
            {/* 右區塊-start  */}
            <div className="col-6 d-flex justify-content-center align-items-center">
              {/* 文字區塊-start  */}
              <div>
                {/* 手機版title-start  */}
                <div className="d-block d-md-none">
                  <h1 className="mob-subpage-title text-center">
                    {item.Name[0]}
                    <br />
                    {item.Name[1]}
                  </h1>
                  <div className="cta">
                    <span>View More</span>
                    <svg width="30px" height="30px" viewBox="0 0 20 10">
                      <path d="M1,9 L20,9"></path>
                      <polyline points="16 5 20 9 5 9"></polyline>
                    </svg>
                  </div>
                </div>
                {/* 手機版title-end  */}
                {/* 平板版title-start  */}
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
                {/* 平板版title-end  */}
              </div>
              {/* 文字區塊-end  */}
            </div>
            {/* 右區塊-end  */}
          </div>
        ))}
      </div>
      {/* content-end  */}
    </div>
    //   {/* container-end  */}
  );
};

export default Storepage;
