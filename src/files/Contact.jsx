import React from "react";
import Head from "../component/Head";
import Leftsidebar from "../component/leftsidebar";
import Rightsidebar from "../component/rightsidebar";
import App from "../App";
import Heads from "../component/Heads";
import Bootom from "../component/Bootom";

function Contact() {
  return (
    <React.Fragment>
      <Heads />
      <div
        className="page-wrapper home-1"
        style={{ backgroundImage: "url('/img/bg/page-bg-1.jpg')" }} // Updated path
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
                      <h2 className="page-title">Contact</h2>
                    </div>
                  </div>
                  <div className="section-wrapper pr-60 pl-60 mb-60">
                    <div className="contact-area bg-light-white-2">
                      <h5 className="contact-title">
                        I'm always open to discussing product 
                      </h5>
                      <h5 className="contact-title-b">
                        design work or partnerships.
                      </h5>
                      <form
                        className="contact-form"
                        action="https://formspree.io/f/xoqrgaab"
                        method="post"
                      >
                        <div className="form-input-item mb-60">
                          <label className="input-lebel name">Name *</label>
                          <input
                            name="name"
                            className="input-box name"
                            type="text"
                            required
                          />
                        </div>
                        <div className="form-input-item mb-60">
                          <label className="input-lebel gmail">Email *</label>
                          <input
                            name="email"
                            className="input-box gmail"
                            type="email"
                            required
                          />
                        </div>
                        <div className="form-input-item mb-40">
                          <label className="input-lebel message">
                            Message *
                          </label>
                          <textarea
                            name="message"
                            className="input-box message"
                            cols={30}
                            rows={10}
                            defaultValue=""
                          />
                        </div>
                        <div className="form-btn-wrap">
                          <button type="submit" className="form-btn">
                            Submit
                          </button>
                        </div>
                      </form>
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

export default Contact;
