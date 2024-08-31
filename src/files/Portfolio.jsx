import React from "react";
import Head from "../component/Head";
import Leftsidebar from "../component/leftsidebar";
import Rightsidebar from "../component/Rightsidebar";
import App from "../App";
import Heads from "../component/Heads";
import Bootom from "../component/Bootom";

function portfolio() {
  return (
    <React.Fragment>
      <Heads />
      <div
        className="page-wrapper home-1"
        style={{ backgroundImage: "url('/public/img/bg/page-bg-1.jpg')" }}
      >
        <Head />
        <div>
          <div className="container z-index-3">
            <div className="row">
              <Leftsidebar />
              {/* PORTFOLIO */}

              <div className="col-xxl-8 col-xl-9">
                <div className="bostami-page-content-wrap">
                  {/* page title */}
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                      <h2 className="page-title">Portfolio</h2>
                    </div>
                  </div>
                  <div className="section-wrapper pr-60 pl-60 mb-60">
                    <div className="row">
                      <div className="col-12">
                        <ul className="fillter-btn-wrap buttonGroup isotop-menu-wrapper mb-30">
                          <li
                            className="fillter-btn is-checked "
                            data-filter="*"
                          >
                            All
                          </li>
                          <li className="fillter-btn" data-filter=".mockup">
                            Mockup
                          </li>
                          <li className="fillter-btn" data-filter=".design">
                            {" "}
                            Graphic Design
                          </li>
                          <li className="fillter-btn" data-filter=".logo">
                            {" "}
                            logo
                          </li>
                        </ul>
                      </div>
                      <div className="col-12">
                        <div
                          id="fillter-item-active"
                          className="fillter-item-wrap"
                        >
                          <div className="grid-sizer" />
                          {/* signle item */}
                          <div className=" isotop-item  logo">
                            <div className="fillter-item bg-prink">
                              <a
                                className="img"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#portfolio-1"
                              >
                                <img
                                  src="public/img/work/work-img-1.png"
                                  alt=""
                                />
                              </a>
                              <span className="item-subtitle">
                                Travel Landing , UX/UI{" "}
                              </span>
                              <h6 className="item-title">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#portfolio-1"
                                >
                                  Chul urina
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* signle item */}
                          <div className=" isotop-item design mockup">
                            <div className="fillter-item bg-catkrill">
                              <a
                                className="img"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#portfolio-1"
                              >
                                <img
                                  src="public/img/work/work-img-2.png"
                                  alt=""
                                />
                              </a>
                              <span className="item-subtitle">
                                Travel Landing , UX/UI{" "}
                              </span>
                              <h6 className="item-title">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#portfolio-1"
                                >
                                  Aura Dione
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* signle item */}
                          <div className=" isotop-item logo mockup">
                            <div className="fillter-item bg-catkrill ">
                              <a
                                className="img"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#portfolio-1"
                              >
                                <img
                                  src="public/img/work/work-img-3.png"
                                  alt=""
                                />
                              </a>
                              <span className="item-subtitle">
                                Travel Landing , UX/UI{" "}
                              </span>
                              <h6 className="item-title">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#portfolio-1"
                                >
                                  T-Shirt Design
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* signle item */}
                          <div className=" isotop-item mockup">
                            <div className="fillter-item bg-prink">
                              <a
                                className="img"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#portfolio-1"
                              >
                                <img
                                  src="public/img/work/work-img-4.png"
                                  alt=""
                                />
                              </a>
                              <span className="item-subtitle">
                                Travel Landing , UX/UI{" "}
                              </span>
                              <h6 className="item-title">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#portfolio-1"
                                >
                                  Packaging Box
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* signle item */}
                          <div className="isotop-item design logo">
                            <div className="fillter-item bg-prink">
                              <a
                                className="img"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#portfolio-1"
                              >
                                <img
                                  src="public/img/work/work-img-5.png"
                                  alt=""
                                />
                              </a>
                              <span className="item-subtitle">
                                Travel Landing , UX/UI{" "}
                              </span>
                              <h6 className="item-title">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#portfolio-1"
                                >
                                  Modern Bag Design
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* signle item */}
                          <div className="isotop-item mockup design">
                            <div className="fillter-item bg-catkrill">
                              <a
                                className="img"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#portfolio-1"
                              >
                                <img
                                  src="public/img/work/work-img-6.png"
                                  alt=""
                                />
                              </a>
                              <span className="item-subtitle">
                                Travel Landing , UX/UI{" "}
                              </span>
                              <h6 className="item-title">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#portfolio-1"
                                >
                                  Chul urina
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* footer copyright */}
                  <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
                    <span>
                      © 2024 All Rights Reserved by Manas Singh
                      <a target="_blank" rel="noopener noreferrer" href="#"></a>
                    </span>
                  </div>
                </div>
              </div>
              {/* resume-page-end */}
              {/* portfolio-modal-end */}
              <Rightsidebar />
            </div>
          </div>
        </div>
      </div>{" "}
      <Bootom />
    </React.Fragment>
  );
}

export default portfolio;
