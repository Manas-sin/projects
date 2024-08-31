import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./files/Contact";

import Home from "./files/Home";
import Blog from "./files/Blog";
import Portfolio from "./files/Portfolio";
import Resume from "./files/Resume";
import Bootom from "./component/Bootom";
import "../public/css/main.css";


function App() {

  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    const time = setTimeout(()=>{
      setIsLoading(false);
    },3000);
    return ()=>clearTimeout(time);
  },[]);
  return (
    <>
      {isLoading ? (
        <div id="preloader">
          <div class="loader_line"></div>
        </div>

      ) : (
        <>
          <Bootom />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}
export default App;
