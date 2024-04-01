import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "../styles/activity.css";
import "react-calendar/dist/Calendar.css";
import InfoActivy from "../assets/Activy_list.json";

const Activitypage = ({ ActivityToInfo }) => {
  const ActivityContent = InfoActivy.find((item) => item.Type === "NewActive");
  const ActivityAfter = InfoActivy.find((item) => item.Type === "ActiveImg");

  return (
    // {/* container-start */}
    <div className="container">
      {/* breadcrumb-start */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ms-3 pt-4 ">
          <li className="breadcrumb-item ">
            <a href="#"></a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            &lt;
            <a className="breadcrumb-text" href="#">
              活動資訊
            </a>
          </li>
        </ol>
      </nav>
      {/* breadcrumb-end */}
      {/* content-start */}
      <div className="row d-flex justify-content-center my-5 position-relative">
        {/* 近期活動-start */}
        <div className="  col-10 col-md-8 newActivy_bg">
          {ActivityContent.NewActivy.map((item, index) => (
            <Link to={`/activity/${item.name}`} key={index}>
              <div className="w-100 px-3 py-2 recent-activity-bg">
                <div className="d-flex justify-content-start align-items-center">
                  <h3 className="mt-2 recent-activity-title">{item.name}</h3>

                  <button>{">"}</button>
                </div>
                <div className="my-1">
                  <p>{item.date}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <img
          className=" position-absolute recent-activity-position"
          src="../../public/images/photos/activy/03_activity/title.png"
          alt="recent-activity-title"
        />
        <div className="col-10 mt-3 d-flex justify-content-center">
          <button>
            <img
              src="../../public/images/photos/activy/03_activity/Ellipse 201.png"
              alt=""
            />
          </button>
          <button>
            <img
              src="../../public/images/photos/activy/03_activity/Ellipse 201.png"
              alt=""
            />
          </button>
          <button>
            <img
              src="../../public/images/photos/activy/03_activity/Ellipse 201.png"
              alt=""
            />
          </button>
        </div>
        {/* 輪播圖點點還沒放 */}
        {/* 近期活動-end */}
      </div>
      <div className="row d-flex justify-content-center my-5">
        {/* 活動花絮-start */}
        <div className="col-10 d-flex mt-5 justify-content-around align-items-center">
          <img
            className="w-25"
            src="../../public/images/photos/activy/03_activity/title02.png"
            alt="activity"
          />
          <div>
            <p>請點擊下方行事曆</p>
            <p>尋找屬於伯朗與你之間的回憶 ...</p>
          </div>
        </div>
        {/* 日曆區塊-待放-start */}
        <div className="py-2">
          <Calendar className="Act_calender" />
        </div>
        {/* 日曆區塊-待放-end */}
        {/* 活動花絮-點擊後顯示-start */}
        <div className="  col-10 col-md-8 newActivy_bg">
          {ActivityAfter.OldActivy.map((item, index) => (
            <Link to={`/activityPhoto/${item.name}`} key={index}>
              <div
                className="w-100  px-3 py-2 recent-activity-bg position-relative"
                key={index}
              >
                <div className="d-flex justify-content-start align-items-center">
                  <h3 className="mt-2 recent-activity-title">{item.name}</h3>
                  <button>{">"}</button>
                </div>
                <div className="my-1">
                  <p>活動時間：{item.date}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 活動花絮-點擊後顯示-end */}

        {/* 活動花絮-end */}
      </div>
      {/* content-end */}
    </div>
    // {/* container-end */};
  );
};

export default Activitypage;
