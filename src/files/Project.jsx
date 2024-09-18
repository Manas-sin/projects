import { Card } from "antd";
import React from "react";
import Head from "../component/Head";
import Leftsidebar from "../component/leftsidebar";
import Rightsidebar from "../component/rightsidebar";
const { Meta } = Card;

function blog() {
  return (
    <React.Fragment>
      <div
        className="page-wrapper home-1 "
        style={{ backgroundImage: "url('/public/img/bg/page-bg-1.jpg')" }}
      >
        <Head />
        <div>
          <div className="container z-index-3">
            <div className="row">
              <Leftsidebar />
              {/* blog */}
              {/* blog-page-start */}
              <div className="col-xxl-8 col-xl-9">
                <div className="bostami-page-content-wrap">
                  {/* page title */}
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                      <h2 className="page-title">Project</h2>
                    </div>
                  </div>
                  <div className="section-wrapper pr-60 pl-60 mb-60">
                    {/* blog slider */}
                    {/* single slider */}
                    <div className="swiper-slide">
                      <div className="row">
                        {/* single blog */}
                        <div className="col-lg-6 col-md-6">
                          <div className="blog-slider-single bg-prink">
                            <Card
                              style={{ width: 300, height: 400 }}
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                  style={{ height: 300 }}
                                />
                              }
                            >
                              <Meta
                                title="Resume ATS"
                                description="I have working on the Resume-ATS"
                                style={{ fontSize: 12 }} // Make the meta size smaller
                              />
                            </Card>
                          </div>
                        </div>
                        {/* single blog */}
                        <div className="col-lg-6 col-md-6">
                          <div className="blog-slider-single bg-catkrill">
                            <Card
                              style={{ width: 300, height: 400 }}
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                  style={{ height: 300 }} // Make the image section large
                                />
                              }
                            >
                              <Meta
                                title="Card Title"
                                description="This is the description"
                                style={{ fontSize: 12 }} // Make the meta size smaller
                              />
                            </Card>
                          </div>
                        </div>
                        {/* single blog */}
                        <div className="col-lg-6 col-md-6">
                          <div className="blog-slider-single bg-catkrill">
                            <Card
                              style={{ width: 300, height: 400 }}
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                  style={{ height: 300 }} // Make the image section large
                                />
                              }
                            >
                              <Meta
                                title="Card Title"
                                description="This is the description"
                                style={{ fontSize: 12 }} // Make the meta size smaller
                              />
                            </Card>
                          </div>
                        </div>
                        {/* single blog */}
                        <div className="col-lg-6 col-md-6">
                          <div className="blog-slider-single bg-prink">
                            <Card
                              style={{ width: 300, height: 400 }}
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                  style={{ height: 300 }} // Make the image section large
                                />
                              }
                            >
                              <Meta
                                title="Card Title"
                                description="This is the description"
                                style={{ fontSize: 12 }} // Make the meta size smaller
                              />
                            </Card>
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
      </div>
    </React.Fragment>
  );
}

export default blog;
