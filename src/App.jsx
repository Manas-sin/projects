import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../public/css/index.css";
import Bottom from "./component/Bottom";
import About from "./files/About";
import Contact from "./files/Contact";
import Project from "./files/Project";
import Resume from "./files/Resume";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      console.log("Mouse moved");
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    if (cursor) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorRef]);

  return (
    <>
      {isLoading ? (
        <div id="preloader">
          <div className="loader_line"></div>
        </div>
      ) : (
        <>
          <Bottom />
          <Router>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Router>
          <div
            id="cursor"
            ref={cursorRef}
            style={{
              position: "fixed",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          ></div>
        </>
      )}
    </>
  );
}

export default App;
