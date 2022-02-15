import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../../css/qna/qna.css";
// 함수
import { useQnAContext } from "./../../context/QnAContext";
// 컨텍스트

// 내부에 있는 함수를 가져올때만 {}를 사용해서 import

// 목표! useEffect를 사용하지 않고 화면 랜더링해보기
const QnA = () => {
  const { qnaList, onQListClick, WriteButton, GetqnaList } = useQnAContext();

  useEffect(GetqnaList, []);

  const trList = qnaList.map((sample, index) => {
    return (
      <tr data-id={sample.qna_seq} key={sample.qna_seq}>
        <td>{index + 1}</td>
        <td>{sample.qna_id}</td>
        <td>{sample.qna_title}</td>
        <td>{sample.qna_name}</td>
        <td>{sample.qna_text}</td>
        <td>{sample.qna_email}</td>
        <td>{sample.qna_date}</td>
        <td>{sample.qna_count}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>1 대 1 문의 게시판</h1>
      <table>
        <thead>
          <tr className="first">
            <th>번호</th>
            <th>ID</th>
            <th>제목</th>
            <th>시설이름</th>
            <th>내용</th>
            <th>E-mail</th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody onClick={onQListClick}>{trList}</tbody>
      </table>
      <div className="btn_qna">
        <Link to="/qna/detail">
          <button className="btn_write">작성하기</button>
        </Link>
      </div>
    </div>
  );
};

export default QnA;
