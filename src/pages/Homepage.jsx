import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/homepage.css";
import InfoHome from "../assets/Homepage_list.json";
import style from "../styles/style.module.css";

const Homepage = () => {
  const [scollstart, setScoll] = useState(false);
  const ProductList = InfoHome.find((item) => item.Type === "Productlist");
  const STList = InfoHome.find((item) => item.Type === "Storelist");
  const ActList = InfoHome.find((item) => item.Type === "Activity");
  const ScollOpen = () => {
    setScoll(!scollstart);
  };

  return (
    <div className="index_bg">
      <div className="container  ">
        {/* <!-- section01-start --> */}
        {/* <!-- 第一組相對 --> */}
        <div className="row d-flex justify-content-center align-items-center position-relative overflow-hidden">
          {/* <!-- banner-gif-start --> */}
          <div className="col-12 d-flex justify-content-center align-items-center g-0">
            <img
              className="col-12 object-fit-cover"
              src="../../public/images/photos/gif/coffee_gif.gif"
              alt="banner"
            />
          </div>
          {/* <!-- banner-gif-end --> */}
          {/* <!-- 手機版banner-start --> */}
          {/* <!-- 第一組絕對-mb --> */}
          <div className="col-6 position-absolute z-1 mb-banner-fill-bg d-block d-md-none">
            <p className="mt-3 text-white mb-banner-text-1">【卡友獨享】</p>
            <h2 className="text-white mb-banner-text-2">飲品買一送一</h2>
            <p className="text-white mb-banner-text-3">
              生活從遇見Mr.Brown Coffee開始...
            </p>
            <div className="d-flex justify-content-center mt-2">
              <button type="button" className="btn btn-light">
                開始探索
              </button>
            </div>
            <div className="col-6 position-absolute z-2 mb-banner-storke-bg"></div>
          </div>
          {/* <!-- 手機版banner-end --> */}
          {/* <!-- 平板版banner-start --> */}
          {/* <!-- 第一組絕對-tb --> */}
          <div className="col-12 position-absolute z-1 d-none d-md-block tb-banner-gradient-bg">
            <div className="position-absolute z-3 tb-text-position">
              <p className="text-white tb-banner-text-1">【卡友獨享】</p>
              <h2 className="text-white tb-banner-text-2">飲品買一送一</h2>
              <p className="text-white tb-banner-text-3">
                生活從遇見Mr.Brown Coffee開始...
              </p>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <img
                src="../../public/images/photos/index/tablet-only/section01_taiwan.png"
                alt="section01_taiwan"
              />
            </div>
          </div>
          <div className="col-10 h-25 position-absolute z-3 d-none d-md-block"></div>
          {/* <!-- 平板版banner-end --> */}
        </div>
        {/* <!-- section01-end --> */}
        {/* <!-- section02-start --> */}
        <div>
          {/* <!-- 第二組相對 --> */}
          <div className="d-flex justify-content-center align-content-center position-relative">
            {/* <!-- 首頁大標題（記得設父層絕對）-start --> */}
            <img
              className="pt-5"
              src="../../public/images/photos/index/section02-title-design.png"
              alt="title-design"
            />
            {/* <!-- 第二組絕對 --> */}
            <a href="#section-start">
              <h2 className="position-absolute z-1 section-title ">特色門市</h2>
            </a>
            {/* <!-- 首頁大標題（記得設父層絕對）-end --> */}
          </div>
          {/* <!-- 手機版carousel-start --> */}
          {/* <!-- ??平板版放button位置?? --> */}
          {/* <!-- ??調整輪播圖位置與平板版第一個比例與其他比例不同?? --> */}
          <div className="row row-cols-1 row-cols-md-3 g-5 d-flex justify-content-center align-content-center mt-5">
            {STList.StoreList.map((item, index) => (
              <div className="col-7 col-md-4" key={index}>
                <div className="card h-100 shadow">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.imgalt}
                  />
                  <div className="card-body">
                    <p className="card-text text-center">{item.where}</p>
                    <h5 className="card-title text-center">{item.name}</h5>
                    <div className="d-flex justify-content-center align item-center mt-3">
                      <button type="button" className="btn btn-danger">
                        查看更多
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- 手機版carousel-end --> */}
          {/* <!-- section02-end --> */}
          {/* <!-- section03-start --> */}
          <div className="row d-flex justify-content-center align-items-center">
            {/* <!-- 首頁大標題（記得設父層絕對）-start --> */}
            {/* <!-- 第三組相對 --> */}
            <div className=" col-12 d-flex justify-content-center align-content-center position-relative">
              <img
                className="pt-5"
                src="../../public/images/photos/index/section02-title-design.png"
                alt="title-design"
              />
              {/* <!-- 第三組絕對 --> */}
              <h2 className="position-absolute z-1 section-title">商品資訊</h2>
            </div>
            {/* <!-- 首頁大標題（記得設父層絕對）-end --> */}
            {/* <!-- 商品資訊卡片區-start --> */}
            {/* <!-- 手機版+平板版card-start --> */}
            <div className="col-12 mt-5">
              <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                {ProductList.HotList.map((item, index) => (
                  <div className="col-7" key={index}>
                    {/* <!-- 第四組相對-1 --> */}
                    <div
                      className={`card h-100 position-relative  ${style.CardShadow}`}
                    >
                      {/* <!-- 第四組絕對-1 --> */}
                      <img
                        className="position-absolute z-1 hot-tag-position"
                        src={item.Statesrc}
                        alt={item.Statealt}
                      />
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt={item.Tag}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">{item.name}</h5>
                        <p className="card-text text-center">{item.En_name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <!-- 手機版+平板版card-end --> */}
            {/* <!-- 平板版card-start --> */}
            <div className="col-12 d-none d-md-block mt-5">
              <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                {ProductList.NewList.map((item, index) => (
                  <div className="col-7" key={index}>
                    {/* <!-- 第五組相對-1 --> */}
                    <div
                      className={`card h-100 position-relative  ${style.CardShadow}`}
                    >
                      {/* <!-- 第五組絕對-1 --> */}
                      <img
                        className="position-absolute z-1 hot-tag-position"
                        src={item.Statesrc}
                        alt={item.Statealt}
                      />
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt={item.Tag}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">{item.name}</h5>
                        <p className="card-text text-center">{item.En_name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <!-- 平板版card-end --> */}
            <div className="col-3 d-flex justify-content-center">
              <button type="button" className="btn btn-danger mt-3">
                查看更多
              </button>
            </div>
            {/* <!-- 商品資訊卡片區-end --> */}
          </div>
          {/* <!-- section03-end --> */}
          {/* <!-- section04-start --> */}
          <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-4 row d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center align-content-center w-100">
                <button>
                  <img
                    src="../../public/images/photos/index/section04-btn-poke-in.png"
                    alt="poke-in"
                  />
                </button>
              </div>
              <div className="col-12 d-flex justify-content-center align-content-center mt-3">
                <h2 className="text-center section-sutitle">POKE IN</h2>
              </div>
            </div>
            <div className="col-9 d-flex justify-content-center mt-3">
              <img
                className="img-fluid"
                src="../../public/images/photos/index/section04.gif"
                alt="poke-in"
              />
            </div>
            <div className="col-6 d-flex justify-content-center mt-5">
              <button className="scoll_btn" onClick={ScollOpen}>
                <img
                  src="../../public/images/photos/index/section04-btn-scrolldown.png"
                  alt="btn-scroll-down"
                />
              </button>
            </div>
          </div>
          {/* <!-- section04-end --> */}
          {/* <!-- 以下為點擊btn-scroll-down後才出現的畫面 --> */}
          {/* <!-- section05-start --> */}
          {scollstart ? (
            <>
              <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
                {/* <!-- section05-1-start --> */}
                {/* <!-- 標題-start --> */}
                <div className="col-9 row d-flex justify-content-center mt-5">
                  <div className="col-12 d-flex justify-content-center">
                    <h1 className="text-center s5-title-1">01</h1>
                  </div>
                  <div className="col-6 d-flex justify-content-center mb-5">
                    <img
                      src="../../public/images/photos/index/section04-title.png"
                      alt="title-design"
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <h3 className="text-center s5-title-2">我們的熱情</h3>
                  </div>
                </div>
                {/* <!-- 標題-end --> */}
                {/* <!-- 內文-start --> */}
                <div className="col-9 mt-5 mb-5">
                  <p>
                    伯朗咖啡股份有限公司，成立於1998年12月，是金車公司秉持著三十年的咖啡飲品經驗與品牌信譽，跨足餐飲服務業的首度嘗試，伯朗咖啡館使用精選的Arabica豆與優質莊園單品豆，堅持每週適量烘焙新鮮咖啡豆。從創始店開始，伯朗咖啡館以「提供顧客好咖啡，深耕本土咖啡文化」為企業目標，並以高品質咖啡的市場定位，搭配藝術裝潢基調，開創出屬於自己的風格。
                  </p>
                </div>
                {/* <!-- 內文-end --> */}
                <div className="col-9 d-flex justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center s5-circle position-relative">
                    <img
                      className="position-absolute z-1 "
                      src="../../public/images/photos/index/section04-photo.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* <!-- section05-1-end --> */}
                {/* <!-- section05-2-start --> */}
                {/* <!-- 標題-start --> */}
                <div className="col-9 row d-flex justify-content-center mt-5">
                  <div className="col-12 d-flex justify-content-center">
                    <h1 className="text-center s5-title-1">02</h1>
                  </div>
                  <div className="col-6 d-flex justify-content-center mb-5">
                    <img
                      src="../../public/images/photos/index/section04-title.png"
                      alt="title-design"
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <h3 className="text-center s5-title-2">我們的使命</h3>
                  </div>
                </div>
                {/* <!-- 標題-end --> */}
                {/* <!-- 內文-start --> */}
                <div className="col-9 mt-5 mb-5">
                  <p>
                    伯朗咖啡館專注於服務、環境、產品的完美呈現，讓消費者不管到哪間伯朗咖啡館，都可以享受到新鮮烘焙的咖啡，是放鬆心靈的最佳選擇。
                  </p>
                </div>
                {/* <!-- 內文-end --> */}
                <div className="col-9 d-flex justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center s5-circle position-relative">
                    <img
                      className="position-absolute z-1 "
                      src="../../public/images/photos/index/section04-photo02.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* <!-- section05-2-end --> */}
                {/* <!-- section05-3-start --> */}
                {/* <!-- 標題-start --> */}
                <div className="col-9 row d-flex justify-content-center mt-5">
                  <div className="col-12 d-flex justify-content-center">
                    <h1 className="text-center s5-title-1">03</h1>
                  </div>
                  <div className="col-6 d-flex justify-content-center mb-5">
                    <img
                      src="../../public/images/photos/index/section04-title.png"
                      alt="title-design"
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <h3 className="text-center s5-title-2">服務理念</h3>
                  </div>
                </div>
                {/* <!-- 標題-end --> */}
                {/* <!-- 內文-start --> */}
                <div className="col-9 mt-5 mb-5">
                  <p>
                    親切：發揮本土文化，予人親切的服務態度。
                    信任：擁有商品專業知識，以及爲客人解決問題的能力。
                    感動：來自於貼心商品與貼心的服務人員。
                    榮耀：透過所有夥伴的努力，共同提升品牌附加價值。
                  </p>
                </div>
                {/* <!-- 內文-end --> */}
                <div className="col-9 d-flex justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center s5-circle position-relative">
                    <img
                      className="position-absolute z-1 "
                      src="../../public/images/photos/index/section04-photo03.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* <!-- section05-3-end --> */}
              </div>
              {/* <!-- section05-end --> */}
              {/* <!-- section06-start --> */}
              <div className="row d-flex justify-content-center align-items-center mt-5">
                {ActList.ActList.map((item, index) => (
                  <div
                    className="col-9 d-flex justify-content-center"
                    key={index}
                  >
                    <img
                      className="img-fluid"
                      src={item.img}
                      alt="activity-photo"
                    />
                  </div>
                ))}

                <div className="col-9 d-flex justify-content-center morebtn mt-5">
                  <img
                    className="img-fluid"
                    src="../../public/images/photos/index/section05-btn-more.png"
                    alt="btn-more"
                  />
                </div>
              </div>
              {/* <!-- section06-end --> */}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
