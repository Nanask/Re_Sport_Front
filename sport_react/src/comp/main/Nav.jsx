import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../../css/main/nav.css";
import MainLogo from "../../image/logo.png";

const Nav = () => {
  return (
    // <BrowserRouter>
    <nav id="main_nav">
      <Link to="/">
        <img src={MainLogo}></img>
      </Link>
      <ul>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/qna">qna</Link>
        </li>
        <li>
          <Link to="/login">Login </Link> <i class="fas fa-user-circle fa-lg"></i>
        </li>
        <li>
          <Link to="/join">Join</Link>
          <i class="fas fa-pencil-alt fa-lg"></i>
        </li>
      </ul>
    </nav>
    // </BrowserRouter>
  );
};

export default Nav;
