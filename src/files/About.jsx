import React from "react";
import Head from "../component/Head";
import LeftBar from "../component/LeftBar";
import RightBar from "../component/RightBar";

function Home() {
  return (
    <React.Fragment>
      <div
        className="page-wrapper home-1"
        style={{ backgroundImage: "url('/img/bg/page-bg-1.jpg')" }}
      >
        <Head />
        <div>
          <div className="container z-index-3">
            <div className="row">
              <LeftBar />
              <div className="col-xxl-8 col-xl-9">
                <div className="bostami-page-content-wrap">
                  <div className="section-wrapper bg-light-white-2 pt-50 pb-60 pl-40 pr-40">
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                      <h2 className="page-title">About</h2>
                    </div>
                  </div>
                    <div className="section-wrapper pl-60 pr-60">
                      <h2 className="h2-typewriter" align="center">
                        Hi👋, I'm Manas Singh...
                      </h2>
                      <h5 className="fade-in" align="center">
                        Full Stack Developer | Tech Enthusiast | Lifelong
                        Learner
                      </h5>
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
              <RightBar />
            </div>
          </div>
        </div>
      </div>{" "}
    </React.Fragment>
  );
}

export default Home;
