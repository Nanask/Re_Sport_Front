import React from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const useQnAContext = () => {
  return useContext(AppContext);
};

const QnAContext = ({ children }) => {
  const navigate = useNavigate;
  const date = new Date();

  let time = {
    year: date.getFullYear(), //현재 년도
    month: date.getMonth() + 1, // 현재 월
    date: date.getDate(), // 현제 날짜
    hours: date.getHours(), //현재 시간
    minutes: date.getMinutes(), //현재 분
  };

  time = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;

  const onChange = (e) => {
    const { value, name } = e.target;
    // console.log("name", value);
    setQnA({ ...qna, [name]: value });
  };
  const [qna, setQnA] = useState({
    qna_seq: "",
    qna_id: "",
    qna_title: "",
    qna_name: "",
    qna_text: "",
    qna_email: "",
    qna_date: "",
    qna_count: "",
  });

  // console.log("time", time);

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

  const updateButton = (qna_seq) => {};

  const deleteButton = () => {};

  const getqnaList = async () => {
    const res = await fetch("http://localhost:8080/qna/list");
    const result = await res.json();
    setQnAList(result);
    // console.log("result", result);
    // console.log("qnaList", qnaList);
    // return result;
  };

  const writeButton = async () => {
    // const { qna_seq, qna_id, qna_title, qna_name, qna_text, qna_email, qna_date } = qna;
    alert("등록");
    // alert(qna_seq, qna_id, qna_title, qna_name, qna_text, qna_email, qna_date);
    const res = await fetch("http://localhost:8080/qna/write", {
      method: "POST",
      body: JSON.stringify(qna),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.text();

    if (res) {
      console.log("result", result);
      setQnA({ qna_seq: "", qna_id: "", qna_title: "", qna_name: "", qna_text: "", qna_email: "", qna_date: "", qna_count: "" });
      // navigate("/qna/list");
      window.location.href = "/qna/list";
    }
  };

  const props = { onQListClick, qnaList, getqnaList, qna, writeButton, onChange };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default QnAContext;
