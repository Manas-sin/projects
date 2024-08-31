import React from "react";
import { Link } from "react-router-dom";
import PersonPinCircleSharpIcon from "@mui/icons-material/PersonPinCircleSharp";
import AssignmentIndSharpIcon from "@mui/icons-material/AssignmentIndSharp";
import EmojiEmotionsSharpIcon from "@mui/icons-material/EmojiEmotionsSharp";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useTheme } from "@mui/material/styles";

function Rightsidebar() {
  const theme = useTheme();
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
                    <PersonPinCircleSharpIcon
                      style={{ color: "red", fontSize: "3rem" }}
                    />
                  </span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/resume">
                  <span>
                    <AssignmentIndSharpIcon
                      style={{ color: "green", fontSize: "2rem" }}
                    />
                  </span>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <span>
                    <EmojiEmotionsSharpIcon
                      style={{
                        color:
                          theme.palette.mode === "dark" ? "#f5c71a" : "#f5c71a",
                        fontSize: "2rem",
                      }}
                    />
                  </span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <span>
                    <i
                      className="fa-light fa-newspaper"
                      style={{ color: "#8e44ad" }}
                    />
                  </span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span>
                    <ContactPhoneIcon
                      style={{ color: "#16a085", fontSize: "1.8rem" }}
                    />
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
