// import "./App.css";
import Main from "./comp/main/Main";
import Nav from "./comp/main/Nav";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Search from "./comp/search/Search";
import Map from "./comp/map/Map";
import QnA from "./comp/qna/QnA";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Main />}></Route>
          <Route path="/join" element={<Main />}></Route>
          <Route path="/search/*" element={<Search />}></Route>
          <Route path="/map/*" element={<Map />}></Route>
          <Route path="/qna/*" element={<QnA />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
