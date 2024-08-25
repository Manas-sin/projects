import React from "react";
import Head from "../component/head";
import Leftsidebar from "../component/leftsidebar";
import Rightsidebar from "../component/rightsidebar";
import App from "../App";
import Heads from "../component/Heads";
import Bootom from "../component/Bootom";

function blog() {
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
              {/* blog */}
                {/* blog-page-start */}
                <div className="col-xxl-8 col-xl-9">
                  <div className="bostami-page-content-wrap">
                    {/* page title */}
                    <div className="section-wrapper pl-60 pr-60 pt-60">
                      <div className="bostami-page-title-wrap mb-15">
                        <h2 className="page-title">blogs</h2>
                      </div>
                    </div>
                    <div className="section-wrapper pr-60 pl-60 mb-60">
                      {/* blog slider */}
                      <div className="blog-slider-wrap">
                        <div className="swiper-container blog-slider-active">
                          <div className="swiper-wrapper">
                            {/* single slider */}
                            <div className="swiper-slide">
                              <div className="row">
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-prink">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-1.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        27 April
                                      </span>
                                      <span className="blog-cetagory">
                                        Inspiration
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        How to Own Your Audience by Creating an
                                        Email List.
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-catkrill">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-2.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        06 october
                                      </span>
                                      <span className="blog-cetagory">
                                        web design
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        the window know to say beside you
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-catkrill">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-3.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        12 March
                                      </span>
                                      <span className="blog-cetagory">
                                        Travel Landing
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        Everything You Need to Know About Web
                                        Accessibility.
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-prink">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-4.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        15 november
                                      </span>
                                      <span className="blog-cetagory">
                                        webdesign
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        Top 10 Toolkits for Deep Learning in
                                        2021.
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single slider */}
                            <div className="swiper-slide">
                              <div className="row">
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-prink">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-1.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        27 April
                                      </span>
                                      <span className="blog-cetagory">
                                        Inspiration
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        How to Own Your Audience by Creating an
                                        Email List.
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-catkrill">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-2.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        06 october
                                      </span>
                                      <span className="blog-cetagory">
                                        web design
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        the window know to say beside you
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-catkrill">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-3.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        12 March
                                      </span>
                                      <span className="blog-cetagory">
                                        Travel Landing
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        Everything You Need to Know About Web
                                        Accessibility.
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-prink">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-4.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        15 november
                                      </span>
                                      <span className="blog-cetagory">
                                        webdesign
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        Top 10 Toolkits for Deep Learning in
                                        2021.
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single slider */}
                            <div className="swiper-slide">
                              <div className="row">
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-prink">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-1.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        27 April
                                      </span>
                                      <span className="blog-cetagory">
                                        Inspiration
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        How to Own Your Audience by Creating an
                                        Email List.
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-catkrill">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-2.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        06 october
                                      </span>
                                      <span className="blog-cetagory">
                                        web design
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        the window know to say beside you
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-catkrill">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-3.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        12 March
                                      </span>
                                      <span className="blog-cetagory">
                                        Travel Landing
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        Everything You Need to Know About Web
                                        Accessibility.
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/* single blog */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="blog-slider-single bg-prink">
                                    <a
                                      href="#"
                                      className="img"
                                      data-bs-toggle="modal"
                                      data-bs-target="#h1-blog-1"
                                    >
                                      <img
                                        src="/img/blog/blog-img-4.png"
                                        alt=""
                                      />
                                    </a>
                                    <div className="blog-meta">
                                      <span className="blog-date">
                                        15 november
                                      </span>
                                      <span className="blog-cetagory">
                                        webdesign
                                      </span>
                                    </div>
                                    <h6 className="blog-title">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#h1-blog-1"
                                      >
                                        Top 10 Toolkits for Deep Learning in
                                        2021.
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="blog-progation" />
                        </div>
                      </div>
                    </div>
                    {/* footer copyright */}
                    <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
                      <span>
                        © 2024 All Rights Reserved by{" "}
                        <a
                          href="https://themeforest.net/user/elite-themes24"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          elite-themes24
                        </a>
                        .
                      </span>
                    </div>
                  </div>
                </div>
              <Rightsidebar />
            </div>
          </div>
        </div>
        <Bootom />
      </div>
    </React.Fragment>
  );
}

export default blog;
