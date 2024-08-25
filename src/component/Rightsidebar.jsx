import React from 'react';
import { Link } from 'react-router-dom';

function Rightsidebar() {
  return (
    <>
      {/* main-menu-start */}
      <div className="col-xxl-1 d-xxl-block d-none">
        <div className="bostami-main-menu-wrap">
          <nav className="bastami-main-menu main_menu">
            <ul>
              <li>
                <Link to="/">
                  <span>
                    <i className="fa-light fa-address-card" />
                  </span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resume">
                  <span>
                    <i className="fa-light fa-file-user" />
                  </span>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <span>
                    <i className="fa-light fa-briefcase" />
                  </span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <span>
                    <i className="fa-light fa-newspaper" />
                  </span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span>
                    <i className="fa-light fa-address-book" />
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* main-menu-end */}
    </>
  );
}

export default Rightsidebar;
