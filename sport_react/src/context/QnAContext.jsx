import React from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const useQnAContext = () => {
  return useContext(AppContext);
};

let navigate = useNavigate;

const QnAContext = ({ children }) => {
  const [qna, QnA] = useState({
    qna_seq: "",
    qna_id: "",
    qna_title: "",
    qna_name: "",
    qna_text: "",
    qna_email: "",
    qna_date: "",
    qna_count: "",
  });

  const onQListClick = (e) => {
    const seq = e.target.closest("TR").dataset.id;
    alert(seq);
  };

  const [qnaList, setQnAList] = useState([
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

  const GetqnaList = async () => {
    const res = await fetch("http://localhost:8080/qna/list");
    const result = await res.json();
    setQnAList(result);
    console.log("result", result);
    console.log("qnaList", qnaList);
    // return result;
  };

  const WriteButton = (e) => {
    alert("detail");
    navigate("/qna/detail");
  };

  const props = { onQListClick, qnaList, WriteButton, GetqnaList };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default QnAContext;
