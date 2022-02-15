import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../../css/qna/qna.css";
// 함수
import { useQnAContext } from "./../../context/QnAContext";
// 컨텍스트

// 내부에 있는 함수를 가져올때만 {}를 사용해서 import

// 목표! useEffect를 사용하지 않고 화면 랜더링해보기
const QnA = () => {
  const { qnaList, onQListClick, getqnaList } = useQnAContext();

  useEffect(getqnaList, []);

  const trList = qnaList.map((sample, index) => {
    return (
      <tr className="border-2" data-id={sample.qna_seq} key={sample.qna_seq}>
        <td>{index + 1}</td>
        <td>{sample.qna_id}</td>
        <td className="overflow-hidden text-ellipsis whitespace-nowrap">{sample.qna_title}</td>
        <td>{sample.qna_name}</td>
        <td className="w-30 overflow-hidden text-ellipsis whitespace-nowrap">{sample.qna_text}</td>
        <td>{sample.qna_email}</td>
        <td>{sample.qna_date}</td>
        <td>{sample.qna_count}</td>
      </tr>
    );
  });

  return (
    <div className="flex flex-col justify-center items-center space-y-5 font-kr">
      <h1 className="mt-10 font-bold text-3xl">1 대 1 문의 게시판</h1>
      <table className="table-fixed text-center border-2 w-600">
        <thead>
          <tr className="bg-slate-100 border-2 ">
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
      <div className="">
        <Link to="/qna/write">
          <button className="mt-10 ml-auto inline-block mr-30 pt-2 pr-3 pl-3 pb-2 hover:bg-slate-200 m-3">작성하기</button>
        </Link>
      </div>
    </div>
  );
};

export default QnA;
