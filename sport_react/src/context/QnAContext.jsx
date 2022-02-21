import React, { createContext, useContext, useState, useParams } from "react";
import { useNavigate } from "react-router-dom";
import UseInput from "../comp/custom/UseInput";
import { DeleteFetchOption, PostFetchOption } from "../modules/FetchOption";
import { useErrorContext } from "./ErrorContext";
import { PutFetchOption } from "./../modules/FetchOption";

const AppContext = createContext();

export const useQnAContext = () => {
  return useContext(AppContext);
};

const QnAContext = ({ children }) => {
  const { errorHandler } = useErrorContext();
  const navigate = useNavigate();

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

  const qnaItems = [
    {
      type: "text",
      name: "qna_title",
      id: "qna_title",
      label: "제목",
    },
    {
      type: "text",
      name: "qna_id",
      id: "qna_id",
      label: "ID",
    },
    {
      type: "text",
      name: "qna_email",
      id: "qna_email",
      label: "E-Mail",
    },
    {
      type: "text",
      name: "qna_center",
      id: "qna_center",
      label: "시설 이름",
    },
    {
      type: "text",
      name: "qna_text",
      id: "qna_text",
      label: "문의 내용",
    },
  ];

  const qnaInput = qnaItems.map((item) => {
    return <UseInput type={item.type} name={item.name} id={item.id} label={item.label}></UseInput>;
  });

  // const fetchOption = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(qna),
  // };

  const errorCheck = async (res) => {
    const _isError = await errorHandler(res);
    const { isError, message } = _isError;

    if (isError) {
      console.log(message);
    } else {
      console.log(message);
      return;
    }
  };

  // Table을 클릭한 seq값을 찾아 vo 보여주기
  const findByIdButton = async (e) => {
    writeOnClick();
    const qna_seq = e.target.closest("TR").dataset.id;
    console.log("seq", qna_seq);
    const res = await fetch(`http://localhost:8080/qna/${qna_seq}`);
    const result = await res.json();
    setQnA(result);
    console.log("update", result);
    // alert("qna", qna);
  };

  // update
  const updateButton = async () => {
    const { qna_seq, qna_title, qna_id, qna_name, qna_email, qna_text } = qna;

    // console.log("qna", qna_seq, qna_title, qna_id, qna_name, qna_email, qna_text);
    PutFetchOption.body = JSON.stringify(qna);
    const res = await fetch(`http://localhost:8080/qna/${qna_seq}`, PutFetchOption);
    const result = await res.json();
    console.log("result", result);
    setQnA(result);
    console.log("qna", qna);
    window.location.replace("/qna/");

    // errorCheck();

    // if (result?.ok) {
    // console.log("result", result);
    //   setQnA({ result });
    // }
  };

  const deleteButton = async () => {
    const { qna_seq } = qna;
    DeleteFetchOption.body = JSON.stringify(qna);
    const res = await fetch(`http://localhost:8080/qna/${qna_seq}`, DeleteFetchOption);
    const result = await res.text();
    console.log("result", result);
    window.location.replace("/qna/");
  };

  // qna 데이터 전체 보여주기
  const getqnaList = async () => {
    const res = await fetch("http://localhost:8080/qna/");
    const result = await res.json();
    setQnAList(result);
  };

  // /qna/write url로 이동
  const writeOnClick = (e) => {
    navigate("/qna/write");
  };

  // 글 추가하기
  const writeButton = async () => {
    writeOnClick();
    PostFetchOption.body = JSON.stringify(qna);
    const res = await fetch("http://localhost:8080/qna/", PostFetchOption);
    const result = await res.text();
    errorCheck();

    // 백엔드 오류 검증
    if (result === "OK") {
      console.log("result", result);
      setQnA({ qna_seq: "", qna_id: "", qna_title: "", qna_name: "", qna_text: "", qna_email: "", qna_date: "", qna_count: "" });
      alert("등록 완료 !!");
      window.location.replace("/qna/");
    }
  };

  const props = { findByIdButton, qnaList, getqnaList, qnaInput, qna, writeButton, onChange, writeOnClick, updateButton, deleteButton };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default QnAContext;
