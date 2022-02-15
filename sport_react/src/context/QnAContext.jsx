import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useErrorContext } from "./ErrorContext";

const AppContext = createContext();

export const useQnAContext = () => {
  return useContext(AppContext);
};

const QnAContext = ({ children }) => {
  const { errorHandler } = useErrorContext();
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

  const updateButton = async (e) => {
    const seq = e.target.closest("TR").dataset.id;
    alert(seq);
    const res = await fetch("http://localhost:8080/qna/list");
    const result = await res.json();
    console.log("update", result);
  };

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
    // alert(qna_seq, qna_id, qna_title, qna_name, qna_text, qna_email, qna_date);
    const res = await fetch("http://localhost:8080/qna/write", {
      method: "POST",
      body: JSON.stringify(qna),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.text();

    const _isError = await errorHandler(res);
    const { isError, message } = _isError;

    if (isError) {
      console.log(message);
    } else {
      console.log(message);
      return;
    }

    // 백엔드 오류 검증
    if (result === "OK") {
      console.log("result", result);
      setQnA({ qna_seq: "", qna_id: "", qna_title: "", qna_name: "", qna_text: "", qna_email: "", qna_date: "", qna_count: "" });
      alert("등록 완료 !!");
      window.location.replace("/qna/list");
    }
  };

  const props = { updateButton, qnaList, getqnaList, qna, writeButton, onChange };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default QnAContext;
