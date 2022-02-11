// import "./App.css";
import Main from "./comp/main/Main";
import Nav from "./comp/main/Nav";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Search from "./comp/search/Search";
import Map from "./comp/map/Map";
import QnA from "./comp/qna/QnA";
import Login from "./comp/member/Login";
import Join from "./comp/member/Join";
import QnAContext from "./context/QnAContext";

function App() {
  return (
    <BrowserRouter>
      <QnAContext>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/search/*" element={<Search />}></Route>
            <Route path="/map/*" element={<Map />}></Route>
            <Route path="/qna/*" element={<QnA />}></Route>
          </Routes>
        </div>
      </QnAContext>
    </BrowserRouter>
  );
}

export default App;
