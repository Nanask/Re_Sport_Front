import React, { createContext, useContext, useState, useParams, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UseInput from "../comp/custom/UseInput";
import { DeleteFetchOption, PostFetchOption } from "../modules/FetchOption";
import { useErrorContext } from "./ErrorContext";
import { PutFetchOption } from "./../modules/FetchOption";
import Button from "./../comp/custom/Button";


const AppContext = createContext();

export const useQnAContext = () => {
  return useContext(AppContext);
};

const QnAContext = ({ children }) => {
  const { errorHandler } = useErrorContext();
  const navigate = useNavigate();

  // const newDate = moment.formet('YYYY-MM-DD HH:mm:ss')
  // console.log("newDate", newDate)

  let today = new Date();
  // let time = {
  //   year: today.getFullYear(),  //현재 년도
  //   month: today.getMonth() + 1, // 현재 월
  //   date: today.getDate(), // 현제 날짜
  //   hours: today.getHours(), //현재 시간
  //   minutes: today.getMinutes(), //현재 분
  // };

  let year = today.getFullYear(); //현재 년도
  let month = today.getMonth() + 1; // 현재 월
  let date = today.getDate(); // 현제 날짜
  let hours = today.getHours(); //현재 시간
  let minutes = today.getMinutes(); //현재 분
  // let daystring = `${time.year}-${time.month}-${time.date} `;
  const daystring = year + "-" + month + "-" + date + " " + hours + ":" + minutes;
  // let timestring = ` ${time.hours}:${time.minutes}`

  // console.log("today", today.now())

  // console.log("timestring", timestring)
  const onChange = (e) => {
    const { value, name } = e.target;
    // console.log("name", value);

    setQnA({ ...qna, [name]: value });
  };
  const [qna, setQnA] = useState({
    id: "",
    email: "",
    title: "",
    centername: "",
    content: "",
    date: "",
    count: "",
  });


  const [qnaList, setQnAList] = useState([

  ]);

  const qnaItems = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "제목",
    },
    {
      type: "text",
      name: "email",
      id: "email",
      label: "ID",
    },
    {
      type: "text",
      name: "centername",
      id: "centername",
      label: "시설 이름",
    },
    {
      type: "text",
      name: "content",
      id: "content",
      label: "문의 내용",
    },
  ];

  const qnaInput = qnaItems.map((item) => {
    return <UseInput type={item.type} name={item.name} id={item.id} label={item.label}></UseInput>;
  });

  const resetButton = (e) => {
    setQnA({ qna_title: "", qna_id: "", qna_email: "", qna_name: "", qna_text: "" });
  };

  // const writeButtons = (qna) => [
  //   {
  //     type: "button",
  //     button: "수정",
  //   },
  //   {
  //     type: "button",
  //     button: "등록",
  //   },
  //   {
  //     type: "button",
  //     button: "삭제",
  //   },
  //   {
  //     type: "reset",
  //     button: "다시 작성",
  //   },
  // ];

  // const writebutton = writeButtons.map((item) => {
  //   return <Button type={item.type} button={item.button}></Button>;
  // });

  // 오류체크
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
    const id = e.target.closest("TR").dataset.id;
    console.log("seq", id);
    const res = await fetch(`http://localhost:3000/qna/${id}`);
    const result = await res.json();

    // await errorCheck(res);

    if (res?.ok) {
      setQnA(result);
      console.log("update", result);
    } else {
      return [];
    }
  };

  // update
  const updateButton = async (id) => {
    if (window.confirm("수정할까요?")) {
      // const { id,
      //   email,
      //   title,
      //   centername,
      //   content,
      //   date,
      //   count, } = qna;
      PutFetchOption.body = JSON.stringify(qna);
      const res = await fetch(`http://localhost:3000/qna/${id}`, PutFetchOption);
      const result = await res.json();
      console.log("result", result);

      errorCheck(res);

      if (res?.ok) {
        console.log("result", result);
        setQnA(result);
        navigate("/qna/", true);
      } else {
        return [];
      }
    }
  };

  // delete
  const deleteButton = async () => {
    if (window.confirm("삭제할까요?")) {
      const { id } = qna;
      DeleteFetchOption.body = JSON.stringify(qna);
      const res = await fetch(`http://localhost:3000/qna/${id}`, DeleteFetchOption);
      const result = await res.json();

      errorCheck(res);

      if (res?.ok) {
        console.log("result", result);
        navigate("/qna/", true);
      } else {
        return [];
      }
    }
  };

  // qna 데이터 전체 보여주기
  const getqnaList = async () => {
    const res = await fetch("http://localhost:3000/qna/");
    const result = await res.json();

    errorCheck(res);

    if (res?.ok) {
      setQnAList(result);
    } else {
      return [];
    }
  };

  // /qna/write url로 이동
  const writeOnClick = (e) => {
    alert("작성");
    setQnA({});
    navigate("/qna/write", true);
  };

  const checkData = (value) => {
    console.log();
  };

  // insert
  const writeButton = async (
    // qna_email,
    // qna_title,
    // qna_centername,
    // qna_content,
  ) => {
    // if (qna.qna_title === "") {
    //   alert("제목을 입력해주세요");
    //   qna.qna_title.focus();
    //   return;
    // } else if (qna.qna_id === "") {
    //   alert("ID를 입력해주세요");
    //   return;
    // } else if (qna.qna_email === "") {
    //   alert("email를 입력해주세요");
    //   return;
    // } else if (qna.qna_name === "") {
    //   alert("시설이름을 입력해주세요");
    //   return;
    // } else if (qna.qna_text === "") {
    //   alert("내용을 입력해주세요");
    //   return;
    // }

    // const qna = {

    //   email: qna_email,
    //   title: qna_title,
    //   centername: qna_centername,
    //   content: qna_content,
    //   date: JSON.stringify(daystring)
    // };

    console.log("qna 날짜", qna.date)

    PostFetchOption.body = JSON.stringify(qna);
    const res = await fetch("http://localhost:3000/qna/", PostFetchOption);
    const result = await res.json();
    // console.log("result", result)

    errorCheck(res);

    // 백엔드 오류 검증
    if (res?.ok) {
      console.log("result", result);
      setQnA({ result, qna_date: daystring });
      alert("등록 완료 !!");
      navigate("/qna/", true);
    }
  };

  const props = { findByIdButton, qnaList, getqnaList, qnaInput, qna, writeButton, onChange, writeOnClick, updateButton, deleteButton, resetButton };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default QnAContext;
