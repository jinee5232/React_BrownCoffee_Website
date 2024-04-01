import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";

const footer = () => {
  return (
    <>
      {/*  footer BG-start*/}
      <footer className="bg-color">
        {/* footer content-start  */}
        <div className="container pt-3 pb-3 text-white">
          {/* 平板-start*/}
          <div className="row">
            {/* 手機-start  */}
            <div className="row col-md-5 justify-content-center">
              {/* footer logo-start */}
              <div className="col-12 d-flex justify-content-center align-items-center">
                <img src={"./images/Logo/header_Logo.png"} alt="brand-slogan" />
              </div>
              {/* footer logo-end */}
              {/* footer hyperlink-start*/}
              <div className="col-9 pb-2 d-block d-sm-block d-md-none">
                <ul className="d-flex justify-content-between">
                  <li>
                    <a href="#">關於我們</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="#">聯絡我們</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="#">門市地圖</a>
                  </li>
                </ul>
              </div>
              {/* <!-- footer hyperlink-end --> */}
              {/* <!-- footer social icon-start--> */}
              <div className="col-4 col-md-9 d-flex justify-content-between align-items-center">
                <p className="d-none d-sm-block d-sm-none d-md-block">
                  Follow us
                </p>

                <img src={"./images/icons/facebook.png"} alt="fb" />
                <img src={"./images/icons/instragram.png"} alt="ig" />
                <img src={"./images/icons/line.png"} alt="line" />
              </div>
              {/* <!-- footer social icon-end --> */}
            </div>
            <div
              className="col-md-7 d-none d-sm-block d-sm-none d-md-block"
              id="border"
            >
              <div className="row row-cols-3">
                <div className="col">
                  <ul className="text-center">
                    <div className="fw-bold pb-2">關於我們</div>
                    <li>企業沿革</li>
                    <li>經營理念</li>
                    <li>企業責任</li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="text-center">
                    <div className="fw-bold pb-2">友站連結</div>
                    <li>金車關係事業</li>
                    <li>台灣咖啡協會</li>
                    <li>金車知性之旅</li>
                  </ul>
                </div>
                <div className="col text-center">
                  <ul className="fw-bold pb-2">聯絡我們</ul>
                  <ul className="fw-bold pb-2">門市地圖</ul>
                </div>
              </div>
            </div>
            {/* <!-- 手機-end --> */}
          </div>
          {/* <!-- 平板-end --> */}
          {/* <!-- footer content-end --> */}
          {/* <!-- footer copyright-start --> */}
          <hr />
          <p className="d-flex justify-content-center copyright">
            版權所有 ©2023 Mr. Brown Coffee Company. All Rights Reserved
          </p>
          {/* <!-- footer copyright-end --> */}
        </div>
        {/* <!-- footer content-end --> */}
      </footer>
      {/* //   <!-- footer BG-end --> */}
    </>
  );
};

export default footer;
