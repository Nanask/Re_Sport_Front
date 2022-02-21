import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "../../css/main/nav.css";
import MainLogo from "../../image/logo.png";
import Main from "./Main";

const Nav = () => {
  return (
    // <Routes>
    <nav id="main_nav" className="flex items-center justify-between text-2xl text-stone-500 font-bold m-0 border-2">
      <Link to="/">
        {/* <img src={MainLogo} className="w-34 h-16"></img> */}
        <div className="font-bold text-4xl m-5">GPC</div>
        {/* </Route> */}
      </Link>
      <ul className="flex space-x-10 m-5 ">
        <li className="hover:text-red-500 transition">
          <Link to="/search">Search</Link>
        </li>
        <li className="hover:text-red-500 transition">
          <Link to="/map">Map</Link>
        </li>
        <li className="hover:text-red-500 transition">
          <Link to="/qna/">QnA</Link>
        </li>
        <li className="hover:text-red-500 transition">
          <Link to="/login">Login </Link>
          {/* <i class="fas fa-user-circle fa-lg"></i>  */}
        </li>
        <li className="hover:text-red-500 transition">
          <Link to="/join">Join</Link>
          {/* <i class="fas fa-pencil-alt fa-lg"></i> */}
        </li>
      </ul>
    </nav>
    // </Routes>
  );
};

export default Nav;
