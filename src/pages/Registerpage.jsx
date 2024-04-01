import React from "react";

const Registerpage = () => {
  return (
    <div className="container container-md">
      {/* breadcrumb-start */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ms-3 pt-4 ">
          <li className="breadcrumb-item ">
            <a href="#"></a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a className="text-dark" href="#">
              會員專區
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a className="breadcrumb-text" href="#">
              會員註冊
            </a>
          </li>
        </ol>
      </nav>
      {/* breadcrumb-end */}
      {/* input-start */}
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-md-8">
          <div className="input-group mt-3 mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              會員帳號：
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              會員密碼：
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              確認密碼：
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              真實姓名：
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="d-flex justify-content-start mb-3">
            <p className="me-2">性別：</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label className="form-check-label me-2" for="flexRadioDefault1">
                男
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label " for="flexRadioDefault2">
                女
              </label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              電子郵件：
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="d-flex justify-content-start align-items-center mb-3">
            <p className="me-2">生日：</p>
            <div className="dropdown me-3">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                年
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    2000
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1999
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1998
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1997
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1996
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1995
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1994
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1993
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1992
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1991
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1990
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1989
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    1988
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdown me-3">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                月
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    01
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    02
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    03
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    04
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    05
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    06
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    07
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    08
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    09
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    10
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    11
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    12
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdown me-3">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                日
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    01
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    02
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    03
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    04
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    05
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    06
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    07
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    08
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    09
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    10
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    11
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    12
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    13
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    14
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    15
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-3">
            <p className="me-2">地址：</p>
            <div className="dropdown me-3">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                選擇縣市
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    基隆市
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    台北市
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    新北市
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    桃園市
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    新竹縣
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                選擇鄉鎮市區
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    桃園區
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    中壢區
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    八德區
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    觀音區
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    楊梅區
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              詳細地址：
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              手機號碼：
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="d-flex justify-content-start mb-3">
            <p className="me-2">訂閱電子報：</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault02"
                id="flexRadioDefault1"
                checked
              />
              <label className="form-check-label me-2" for="flexRadioDefault1">
                是
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault02"
                id="flexRadioDefault2"
              />
              <label className="form-check-label " for="flexRadioDefault2">
                否
              </label>
            </div>
          </div>
          <ul className="list-group mb-4">
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                id="firstCheckbox"
              />
              <label className="form-check-label" for="firstCheckbox">
                已同意伯朗咖啡館網站會員相關條款
              </label>
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-danger mb-5">
              確認送出
            </button>
          </div>
        </div>
      </div>
      {/* input-end */}
    </div>
  );
};

export default Registerpage;
