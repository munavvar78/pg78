import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import Avatar from '@mui/joy/Avatar';
import Login from "../pages/Login";
<script
  src="https://kit.fontawesome.com  /a076d05399.js"
  crossorigin="anonymous"
></script>;

const Header = ({user}) => {
  const [isMobile, setIsMobile] = useState(false);
  console.log(user);
  return (
    <div className="header">
      <nav className="main-nav">
        <div className="logo">
          <img
            className="imagelogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcG3xqrt_x4XTCzFhvI7MXW4-kwedmf6S1A&usqp=CAU"
            alt="logo"
          ></img>
          <Link to='/'>
          <h2>
            <span>B</span>ook
            <span>M</span>yPg
          </h2>
          </Link>
        </div>
        <div
          className={isMobile ? "nav-links-mobile" : "menu-link"}
          onClick={() => setIsMobile(false)}
        >
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            {user.pgowner ?
              <li>
              <Link to="/pginsert">pginsert</Link>
            </li>:""
            }
            {user.pgowner ?
              <li>
              <Link to="/pglist">PgOwner</Link>
            </li>:""
            }
            <li>
              <Link to="/pg">pg</Link>
            </li>
            {user && user._id ?<li><h1 color="blue">Welcome {user.name}</h1></li>:<li><Link to='/login'>Login</Link></li>}
            {user && user._id ?<li></li>:<li><Link to='/register'>Register</Link></li>}
           {user && user._id ?<Avatar>{user.name[0].toUpperCase()}</Avatar>:"" }
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
  );
};

export default Header;
