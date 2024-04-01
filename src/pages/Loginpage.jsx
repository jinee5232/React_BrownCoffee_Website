import React from "react";

const Loginpage = () => {
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
              登入會員
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
              帳號：
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
              密碼：
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div className="col-10 col-md-8">
          <hr />
        </div>
        <div className="col-8 col-md-6">
          <a href="#" className="text-dark me-3">
            忘記密碼？
          </a>
          <a href="#" className="text-dark me-3">
            忘記帳號？
          </a>
          <a href="#" className="text-dark me-3">
            註冊會員？
          </a>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <button type="button" className="btn btn-danger mb-5">
            登入
          </button>
        </div>
      </div>
      {/* input-end */}
    </div>
  );
};

export default Loginpage;
