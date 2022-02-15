import React from "react";
import { BrowserRouter, Link, Route, useHistory } from "react-router-dom";
import "../../css/main/main.css";
// import "../../css/main/layout.css";
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
    <div className="flex justify-center space-y-4">
      <h2 className="text-6xl mt-28">Gwangju Project Center</h2>
      <section className="flex justify-center">
        <div class="main_box">
          {/* <Route path="/search" element={<Search />}> */}
          <div className="border-2 flex items-center justify-center hover:cursor-pointer hover:text-white hover:bg-red-500 transition">
            <Link to="/search">
              <i class="fas fa-search fa-5x"></i>
              <h1 className="mt-5 text-3xl">Search</h1>
            </Link>
          </div>
          {/* </Route> */}
          <div className="border-2 flex items-center justify-center hover:cursor-pointer hover:text-white hover:bg-red-500 transition">
            <Link to="/map">
              <i class="fas fa-map-marked-alt fa-5x"></i>
              <h1 className="mt-5 text-3xl mx-3">Map</h1>
            </Link>
          </div>
          <div className="border-2 flex items-center justify-center hover:cursor-pointer hover:text-white hover:bg-red-500 transition">
            <Link to="/qna/list">
              <i class="fas fa-edit fa-5x"></i>
              <h1 className="mt-5 text-3xl mx-3">Q&A</h1>
            </Link>
          </div>
        </div>
      </section>
    </div>
    // </BrowserRouter>
  );
};

export default Main;
