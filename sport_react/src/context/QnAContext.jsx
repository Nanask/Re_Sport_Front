import React from "react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useQnAContext = () => {
  return useContext(AppContext);
};

const QnAContext = ({ children }) => {
  const [board, setboard] = useState({
    qna_seq: "",
    qna_id: "",
    qna_title: "",
    qna_name: "",
    qna_text: "",
    qna_email: "",
    qna_date: "",
    qna_count: "",
  });

  const onBoardClick = (e) => {
    const seq = e.target.closest("TR").dataset.id;
    alert(seq);
  };

  const [boardList, setBoardList] = useState([
    // {
    //   qna_seq: "",
    //   qna_id: "",
    //   qna_title: "",
    //   qna_name: "",
    //   qna_text: "",
    //   qna_email: "",
    //   qna_date: "",
    //   qna_count: "",
    // },
  ]);

  // const qnaList = async () => {
  //   const res = await fetch("http://localhost:8080/qna/list");
  //   const result = await res.json();
  //   setBoardList(result);
  //   console.log("result", result);
  //   console.log("board", boardList);
  //   // console.log("boardList", boardList);
  // };

  const props = { onBoardClick, boardList, setBoardList, board, setboard };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default QnAContext;
