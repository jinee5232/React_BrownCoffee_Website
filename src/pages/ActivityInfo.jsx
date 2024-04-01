import React from "react";
import { useParams, Link } from "react-router-dom";
import InfoActivy from "../assets/Activy_list.json";

const ActivityInfo = () => {
  const nameact = useParams();
  const result = InfoActivy[0].NewActivy.filter(
    (activity) => activity.name === nameact.active
  );
  const otherResult = InfoActivy[0].NewActivy.filter(
    (activity) => activity.name !== nameact.active
  );

  return (
    <div className="container">
      {/* breadcrumb-start */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ms-3 pt-4 ">
          <li className="breadcrumb-item ">
            <a href="#"></a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a className="text-dark" href="#">
              活動資訊
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a className="breadcrumb-text" href="#">
              近期活動
            </a>
          </li>
        </ol>
      </nav>
      {/* breadcrumb-end */}
      {result.map((item, index) => (
        <div className="row d-flex justify-content-center" key={index}>
          <div className="col-9 my-2">
            <img
              className="img-fluid recent-activity-img shadow"
              src="./images/photos/activy/03_activity01/photo01.jpg"
              alt={item.name}
            />
          </div>
          {/* 標題-start */}
          <div className="col-9 d-flex flex-wrap justify-content-between align-items-center my-2">
            <p className="recent-activity-page-date">
              <b>{item.date}</b>
            </p>
            <h3 className="recent-activity-page-title mt-1">{item.name}</h3>
          </div>
          {/* 標題-end */}
          {/* 內文-start */}
          <div className="col-9 col-md-8">
            {item.discount.map((disItem, index) => (
              <div key={index}>
                <p className="my-3">{disItem}</p>
              </div>
            ))}
          </div>
          {/* 內文-end */}
          {/* 其他相關資訊-start */}
        </div>
      ))}

      <div className="row d-flex justify-content-center">
        <div className="col-7 d-flex justify-content-center">
          <h5 className="w-50 text-center other-recent-activity-text mt-5 mb-5">
            其他近期活動 ...
          </h5>
        </div>
        <div className="  col-10 col-md-8 newActivy_bg">
          {otherResult.map((item, index) => (
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

        {/* 其他相關資訊-end */}
      </div>
    </div>
  );
};

export default ActivityInfo;
