import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
const NoAuthHeader = () => {
    const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="header">
      <nav className="main-nav">
        <div className="logo">
          <img
            className="imagelogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcG3xqrt_x4XTCzFhvI7MXW4-kwedmf6S1A&usqp=CAU"
            alt="logo"
          ></img>
          <h2>
            <span>B</span>ook
            <span>M</span>yPg
          </h2>
        </div>
        <div
          className={isMobile ? "nav-links-mobile" : "menu-link"}
          onClick={() => setIsMobile(false)}
        >
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/food">Food</Link>
            </li>
            <li>
              <Link to="/pg">pg</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </div>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <ClearIcon /> : <MenuIcon />}
        </button>
      </nav>
    </div>
  )
}

export default NoAuthHeader