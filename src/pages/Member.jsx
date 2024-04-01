import React, { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Member = () => {
  const MmberContent = [
    {
      img: "./images/photos/member/sign_in_img.png",
      link: "login",
      handle: "handleloginClick",
      imgalt: "member",
      order: "order-0",
      Name: ["會員", "登入"],
      TbName: "會員登入",
      TbNameB: "歡迎會員登入後，不定期領取會員優惠！",
    },
    {
      img: "./images/photos/member/refister_img.png",
      link: "register",
      handle: "handleregisterClick",
      imgalt: "member",
      order: "order-1",
      Name: ["註冊", "會員"],
      TbName: "註冊會員",
      TbNameB: "歡迎會員登入後，不定期領取會員優惠！",
    },
  ];
  const navigate = useNavigate();
  const handleloginClick = () => {
    // 点击按钮后进行页面导航
  };
  const handleregisterClick = () => {
    // 点击按钮后进行页面导航
    navigate("/member/register");
  };

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
            <Link className="breadcrumb-text" to="/member">
              會員專區
            </Link>
          </li>
        </ol>
      </nav>
      {/* breadcrumb-end  */}
      {/* content-start  */}
      <div className="row d-flex justify-content-center">
        {MmberContent.map((item, index) => (
          <div
            className="row col-10 d-flex justify-content-center position-relative"
            key={index}
          >
            {/* 左區塊-start  */}
            <div
              className={`col-6 d-flex justify-content-center align-items-center ${item.order}`}
            >
              {/* 圖片區塊-start  */}
              <img className="img-size2" src={item.img} alt={item.imgalt} />
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
                  <div className="cta" onClick={() => handleloginClick}>
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
                  <p className="text-center">{item.TbNameB}</p>
                  <Link to={`/member/${item.link}`}>
                    <div className="cta">
                      <span>View More</span>
                      <svg width="30px" height="30px" viewBox="0 0 20 10">
                        <path d="M1,9 L20,9"></path>
                        <polyline points="16 5 20 9 5 9"></polyline>
                      </svg>
                    </div>
                  </Link>
                  {/* <button>
                    <img
                      className="me-4 img-fluid"
                      src="./images/icons/more_btn.png"
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

export default Member;
