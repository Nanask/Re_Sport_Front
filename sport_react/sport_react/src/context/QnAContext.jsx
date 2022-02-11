import React from "react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useQnAContext = () => {
  return useContext(AppContext);
};

const QnAContext = ({ children }) => {
  const [board, setboard] = useState({
    q_title: "",
    q_center: "",
    q_name: "",
    q_userId: "",
    q_context: "",
  });

  const onBoardClick = (e) => {
    alert("클릭");
  };

  const [boardList, setBoardList] = useState({
    q_seq: "1",
    q_title: "동호회...",
    q_center: "염주 종합체육관",
    q_userId: "배드민턴치러가쟈",
    q_context: "동호회 때문에 배드민턴 칠 수 없...",
  });

  const props = { onBoardClick, boardList };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default QnAContext;
