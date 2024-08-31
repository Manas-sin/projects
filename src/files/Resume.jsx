import React from "react";
import Head from "../component/Head";
import Leftsidebar from "../component/leftsidebar";
import Rightsidebar from "../component/rightsidebar";
import App from "../App";
import Heads from "../component/Heads";
import Bootom from "../component/Bootom";

function resume() {
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
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                      <h2 className="page-title">resume</h2>
                    </div>
                  </div>
                  <div className="section-wrapper pl-60 pr-60 mb-60">
                    <div className="row">
                      <div className="col-xl-6 col-lg-7">
                        <div className="bostami-section-title-wrap mb-20">
                          <h4 className="section-title">
                            <i className="fa-light fa-school" />
                            Education
                          </h4>
                        </div>
                        <div className="bostami-card-wrap">
                          <div className="bostami-card-item bg-prink mb-20">
                            <span className="card-subtitle">2021-2024</span>
                            <h6 className="card-title">
                              Ph.D in Horriblensess <span>- University,</span>
                            </h6>
                            <p className="card-text">Los Angeles, CA</p>
                          </div>
                          <div className="bostami-card-item bg-catkrill mb-20">
                            <span className="card-subtitle">2017-2021</span>
                            <h6 className="card-title">
                              Computer Science <span>- Imperialize</span>
                            </h6>
                            <p className="card-text">Technical Institute</p>
                          </div>
                          <div className="bostami-card-item bg-prink">
                            <span className="card-subtitle">2015-2017</span>
                            <h6 className="card-title">
                              Graphic Designer <span>- Web Graphy,</span>
                            </h6>
                            <p className="card-text">Los Angeles, CA</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-5">
                        <div className="bostami-section-title-wrap mb-20">
                          <h4 className="section-title">
                            <i className="fa-light fa-briefcase" />
                            experience
                          </h4>
                        </div>
                        <div className="bostami-card-item bg-catkrill  mb-20">
                          <span className="card-subtitle">2019 - Present</span>
                          <h6 className="card-title">Sr. Software Tester</h6>
                          <p className="card-text">Google Inc.</p>
                        </div>
                        <div className="bostami-card-item bg-prink mb-20">
                          <span className="card-subtitle">2015-2017</span>
                          <h6 className="card-title">Cr. Web Developer</h6>
                          <p className="card-text">elite-themes24 ltd.</p>
                        </div>
                        <div className="bostami-card-item bg-catkrill ">
                          <span className="card-subtitle">2014 - 2015</span>
                          <h6 className="card-title">Jr. Web Developer</h6>
                          <p className="card-text">Creative Gigs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-wrapper bg-light-white-2 pt-70 pb-60 pl-60 pr-60">
                    <div className="row">
                      <div className="col-xl-6 col-lg-7">
                        <div className="bostami-section-title-wrap mb-20">
                          <h4 className="section-title">Working Skills</h4>
                        </div>
                        <div className="skill-bar-wrap">
                          <div className="skill-bar-item mb-30">
                            <div className="title-wrap">
                              <h5 className="title">Web Design</h5>
                              <span className="count">85%</span>
                            </div>
                            <div className="progress-bar-wrap">
                              <div
                                className="progress-line progress-bg-1"
                                style={{ width: "85%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="skill-bar-item mb-30">
                            <div className="title-wrap">
                              <h5 className="title">Mobile App</h5>
                              <span className="count">55%</span>
                            </div>
                            <div className="progress-bar-wrap">
                              <div
                                className="progress-line progress-bg-2"
                                style={{ width: "55%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="skill-bar-item mb-30">
                            <div className="title-wrap">
                              <h5 className="title">Illustrator</h5>
                              <span className="count">65%</span>
                            </div>
                            <div className="progress-bar-wrap">
                              <div
                                className="progress-line progress-bg-3"
                                style={{ width: "65%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="skill-bar-item">
                            <div className="title-wrap">
                              <h5 className="title">Photoshope</h5>
                              <span className="count">72%</span>
                            </div>
                            <div className="progress-bar-wrap">
                              <div
                                className="progress-line progress-bg-4"
                                style={{ width: "72%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-5">
                        <div className="bostami-section-title-wrap mb-20">
                          <h4 className="section-title">Knowledges</h4>
                        </div>
                        <div className="knowledeges-item-wrap">
                          <span className="gk-item">Digital Design</span>
                          <span className="gk-item">Marketing</span>
                          <span className="gk-item">Communication</span>
                          <span className="gk-item">Social Media</span>
                          <span className="gk-item">Time Management</span>
                          <span className="gk-item">Flexibility</span>
                          <span className="gk-item">Print</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
      </div>
      <Bootom />
    </React.Fragment>
  );
}

export default resume;
