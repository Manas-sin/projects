import React, { useEffect, useState } from 'react';
import '/public/css/main.css';

const Head = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the saved dark mode preference from local storage
    const savedDarkMode = localStorage.getItem('darkTheme') === 'true';
    setIsDarkMode(savedDarkMode);
    document.body.classList.toggle('dark-theme', savedDarkMode);

    // Update background images based on dark mode preference
    const home1bgimg = document.querySelector('.page-wrapper');
    const home2bgimg = document.querySelector('.page-wrapper-2');
    if (home1bgimg) {
      home1bgimg.style.backgroundImage = savedDarkMode
        ? "url('/img/bg/page-bg-dark-1.jpg')"
        : "url('/img/bg/page-bg-1.jpg')";
    }
    if (home2bgimg) {
      home2bgimg.style.backgroundImage = savedDarkMode
        ? "url('/img/bg/page-bg-dark-2.jpg')"
        : "url('/img/bg/page-bg-1.jpg')";
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkTheme', newMode);
      document.body.classList.toggle('dark-theme', newMode);

      // Update background images based on new dark mode state
      const home1bgimg = document.querySelector('.page-wrapper');
      const home2bgimg = document.querySelector('.page-wrapper-2');
      if (home1bgimg) {
        home1bgimg.style.backgroundImage = newMode
          ? "url('/img/bg/page-bg-dark-2.jpg')"
          : "url('/img/bg/page-bg-1.jpg')";
      }
      if (home2bgimg) {
        home2bgimg.style.backgroundImage = newMode
          ? "url('/img/bg/page-bg-dark-1.jpg')"
          : "url('/img/bg/page-bg-1.jpg')";
      }
      return newMode;
    });
  };

  return (
    <div className="bostami-header-area mb-30 z-index-5">
      <div className="container">
        <div className="bostami-header-wrap">
          <div className="row align-items-center">
            {/* logo */}
            <div className="col-6">
              <div className="bostami-header-logo">
                <a className="site-logo" href="/">
                <span className="example-text">ManasSingh</span> {/* Apply the CSS class here */}
                </a>
              </div>
            </div>
            {/* menu btn */}
            <div className="col-6">
              <div className="bostami-header-menu-btn text-right">
                <div
                  className="dark-btn dark-btn-stored dark-btn-icon"
                  onClick={toggleDarkMode}
                >
                  <i className={`fa-light ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} />
                </div>
               
              </div>
            </div>
          </div>
        </div>
        {/* mobile menu */}
      
      </div>
    </div>
  );
};


export default Head;
