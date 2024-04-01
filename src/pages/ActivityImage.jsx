import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import InfoActivy from "../assets/Activy_list.json";
import { Carousel } from "react-bootstrap";

const ActivityImage = () => {
  const [index, setIndex] = useState(0);
  const nameact = useParams();
  const result = InfoActivy[1].OldActivy.filter(
    (activity) => activity.name === nameact.active
  );
  const otherResult = InfoActivy[1].OldActivy.filter(
    (activity) => activity.name !== nameact.active
  );
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
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
              活動花絮
            </a>
          </li>
        </ol>
      </nav>
      {/* breadcrumb-end */}
      {result.map((item, index) => (
        <div className="row d-flex justify-content-center" key={index}>
          <div className="col-9 my-2 d-flex justify-content-center">
            <img
              className="img-fluid recent-activity-img shadow"
              src={item.img}
              alt={item.name}
            />
          </div>
          {/* 標題-start */}
          <div className="col-9 d-flex flex-wrap justify-content-between align-items-center my-2">
            <p className="recent-activity-page-date mt-1">
              <b>{item.date}</b>
            </p>
            <h3 className="recent-activity-page-title mt-1">{item.content}</h3>
          </div>

          {/* <div className="col-9 col-md-6 d-flex justify-content-center my-3">

        </div> */}
          {/* 標題-end */}
          {/* 內文-start */}
          <div className="col-9">
            <p className="my-3">{item.info}</p>
          </div>
          {/* 內文-end */}
        </div>
      ))}
      <div className="row d-flex justify-content-center">
        {/* 其他相關資訊-start */}
        <div className="col-10 d-flex justify-content-center">
          <h5 className="w-50 text-center other-recent-activity-text mt-5 mb-3">
            其他活動花絮 ...
          </h5>
        </div>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="d-block w-50 mx-auto mt-3 "
        >
          {otherResult.map((item, index) => (
            <Carousel.Item key={index} interval={1500}>
              <img
                className="shadow recent-activity-img w-100 h-100 "
                src={item.img} // 使用 item.img 动态设置图片路径
                alt={item.alt} // 你可能也需要动态设置 alt 属性
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {/* 其他相關資訊-end */}
      </div>
    </div>
  );
};

export default ActivityImage;
