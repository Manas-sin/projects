import React from "react";
import Head from "../component/Head";
import Leftsidebar from "../component/leftsidebar";
import Rightsidebar from "../component/rightsidebar";

function Home() {
  return (
    <React.Fragment>
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
                <div className="section-wrapper bg-light-white-2 pt-50 pb-60 pl-40 pr-40">
                  {/* page title */}
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-35">
                      <h2 className="page-title">about</h2>
                      <p>
                        With a passion for building innovative solutions, I
                        specialize in developing efficient, scalable software
                        applications. My experience spans across various
                        technologies including front-end, Back-end, and many
                        more, allowing me to turn complex challenges into
                        elegant solutions. Whether it’s designing intuitive user
                        interfaces or implementing robust backend systems, I
                        thrive on creating impactful experiences that drive
                        success.
                      </p>
                      <p>
                        Driven by curiosity and a love for continuous learning,
                        I stay on the cutting edge of industry trends and
                        technologies. My goal is to not just write code, but to
                        craft experiences that enhance lives and businesses
                        alike.
                      </p>
                    </div>
                  </div>
                  {/* what-do */}
                  <div className="section-wrapper pl-60 pr-60">
                    <div className="bostami-section-title-wrap mb-30">
                      <h3 className="section-title">What I do!</h3>
                    </div>
                    <div className="bostami-what-do-wrap mb-30">
                      <div className="row equal-height">
                        {/* Front-End Development */}
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="bostami-what-do-item bg-prink">
                            <div className="icon">
                              <i className="fa-light fa-swatchbook" />
                            </div>
                            <div className="text">
                              <h4 className="title">Front-End Development</h4>
                              <p>
                                I create responsive and interactive user
                                interfaces using modern web technologies like
                                React, HTML, and CSS, ensuring a seamless user
                                experience.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Back-End Development */}
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="bostami-what-do-item bg-catkrill">
                            <div className="icon">
                              <i className="fa-regular fa-grid-2" />
                            </div>
                            <div className="text">
                              <h4 className="title">Back-End Development</h4>
                              <p>
                                I build and maintain the server-side logic,
                                databases, and APIs that power web applications,
                                ensuring security and scalability and efficient
                                performance..
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Networking
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="bostami-what-do-item bg-catkrill">
                            <div className="icon">
                              <i className="fa-regular fa-network-wired" />
                            </div>
                            <div className="text">
                              <h4 className="title">Networking</h4>
                              <p>
                                I design, implement, and manage network systems to ensure reliable and secure connectivity for both personal and business applications.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Games (Chess) */}
                        {/* <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="bostami-what-do-item bg-prink bg-blue">
                            <div className="icon">
                              <i className="fa-regular fa-chess" />
                            </div>
                            <div className="text">
                              <h4 className="title">Games (Chess)</h4>
                              <p>
                                Chess is a game of strategy and foresight. I enjoy playing and teaching chess, which helps develop analytical and problem-solving skills.
                              </p>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  {/* client */}
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

    </React.Fragment>
  );
}

export default Home;
