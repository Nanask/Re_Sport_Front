import React from "react";
import { BrowserRouter, Link, Route, useHistory } from "react-router-dom";
import "../../css/main/main.css";
import "../../css/main/layout.css";
import Search from "./../search/Search";
import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate;
  // const SearchClick = (e) => {
  //   alert("search");
  //   navigate("/search");
  // };
  return (
    // <BrowserRouter>
    <div className="main_div">
      <div id="s_left"></div>
      <div id="s_right"></div>
      <section class="contents">
        <h2>FIRST PROJECT GPC</h2>
        <div class="sq_box"></div>
        <div class="main_box">
          {/* <Route path="/search" element={<Search />}> */}
          <div id="box1">
            <Link to="/search">
              <i class="fas fa-search fa-7x"></i>
              <h1>search</h1>
            </Link>
          </div>
          {/* </Route> */}
          <div id="box2">
            <Link to="/map">
              <i class="fas fa-map-marked-alt fa-7x"></i>
              <h1>map</h1>
            </Link>
          </div>
          <div id="box3">
            <Link to="/qna">
              <i class="fas fa-edit fa-7x"></i>
              <h1>Q&A</h1>
            </Link>
          </div>
        </div>
        <p class="text1">
          우리 주변에 체육시설을 감색과 위치, 지도를 사용해
          <br />
          빠르고 정확하게 찾을 수 있게 도와드립니다
        </p>
        <footer>CopyRight&copy;GPC2021@gamil.com</footer>
      </section>
    </div>
    // </BrowserRouter>
  );
};

export default Main;
