import React from 'react'


function Head() {
  return (
    <>
    {/* header-start */}
    <div className="bostami-header-area mb-30 z-index-5">
      <div className="container">
        <div className="bostami-header-wrap">
          <div className="row align-items-center">
            {/* logo */}
            <div className="col-6">
              <div className="bostami-header-logo">
                <a
                  className="site-logo"
                  href=""
                >
                  <img src="public/img/logo/logo-2.png"   alt="" />
                </a>
              </div>
            </div>
            {/* menu btn */}
            <div className="col-6">
              <div className="bostami-header-menu-btn text-right">
                <div className="dark-btn dark-btn-stored dark-btn-icon">
                  <i className="fa-light fa-moon" />
                  <i className="fa-light fa-sun" />
                </div>
                <div className="menu-btn toggle_menu">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className="mobile-menu-wrap">
          <div className="mobile-menu mobile_menu"></div>
        </div>
      </div>
    </div>
    {/* header-end */}
  </>
  )
}

export default Head