import React from "react";
import Head from "../component/Head";
import Leftsidebar from "../component/leftsidebar";
import Rightsidebar from "../component/Rightsidebar";
import App from "../App";
import Heads from "../component/Heads";
import Bootom from "../component/Bootom";

function Home() {
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

              <div className="col-xxl-8 col-xl-9">
                <div className="bostami-page-content-wrap">
                  {/* page title */}
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-35">
                      <h2 className="page-title">about</h2>
                      <p>
                        I'm Creative Director and UI/UX Designer from Sydney,
                        Australia, working in web development and print media. I
                        enjoy turning complex problems into simple, beautiful
                        and intuitive designs.
                      </p>
                      <p>
                        My aim is to bring across your message and identity in
                        the most creative way. I created web design for many
                        famous brand companies.
                      </p>
                    </div>
                  </div>
                  {/* what-do */}
                  <div className="section-wrapper pl-60 pr-60">
                    <div className="bostami-section-title-wrap mb-30">
                      <h3 className="section-title">What I do!</h3>
                    </div>
                    <div className="bostami-what-do-wrap mb-30">
                      <div className="row">
                        {/* single item */}
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="bostami-what-do-item bg-prink">
                            <div className="icon">
                              <i className="fa-light fa-swatchbook" />
                            </div>
                            <div className="text">
                              <h4 className="title">Ui/Ux Design</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam euismod tincidunt
                                volutpat.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* single item */}
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="bostami-what-do-item bg-catkrill">
                            <div className="icon">
                              <i className="fa-regular fa-grid-2" />
                            </div>
                            <div className="text">
                              <h4 className="title">App Development</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam euismod tincidunt
                                volutpat.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* single item */}
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="bostami-what-do-item  bg-catkrill">
                            <div className="icon">
                              <i className="fa-regular fa-camera-retro" />
                            </div>
                            <div className="text">
                              <h4 className="title">Photography</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam euismod tincidunt
                                volutpat.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* single item */}
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="bostami-what-do-item bg-prink bg-blue">
                            <div className="icon">
                              <i className="fa-regular fa-code" />
                            </div>
                            <div className="text">
                              <h4 className="title">Web Development</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam euismod tincidunt
                                volutpat.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* client */}
                  <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
                    <div className="bostami-section-title-wrap text-center mb-50">
                      <h3 className="section-title">clinet</h3>
                    </div>
                    <div className="bostami-client-slider">
                      <div className="swiper-container client_slide_active">
                        <div className="swiper-wrapper">
                          {/* single item */}
                          <div className="swiper-slide">
                            <img
                              className="bostami-client-slider-logo"
                              src="assets/img/client/client-logo-1.png"
                              alt=""
                            />
                          </div>
                          {/* single item */}
                          <div className="swiper-slide">
                            <img
                              className="bostami-client-slider-logo"
                              src="assets/img/client/client-logo-2.png"
                              alt=""
                            />
                          </div>
                          {/* single item */}
                          <div className="swiper-slide">
                            <img
                              className="bostami-client-slider-logo"
                              src="assets/img/client/client-logo-3.png"
                              alt=""
                            />
                          </div>
                          {/* single item */}
                          <div className="swiper-slide">
                            <img
                              className="bostami-client-slider-logo"
                              src="assets/img/client/client-logo-4.png"
                              alt=""
                            />
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
              <Rightsidebar />
            </div>
          </div>
        </div>
      </div>{" "}
      <Bootom />
    </React.Fragment>
  );
}

export default Home;
