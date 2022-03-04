import React, { useCallback, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Button from "../custom/Button";
// 함수
import { useQnAContext } from "./../../context/QnAContext";
// 컨텍스트

// 내부에 있는 함수를 가져올때만 {}를 사용해서 import
import QnA_Write from "./QnA_Write";

// 목표! useEffect를 사용하지 않고 화면 랜더링해보기
const QnA = () => {
  const { qnaList, findByIdButton, getqnaList, writeOnClick } = useQnAContext();

  useEffect(getqnaList, []);

  const trList = qnaList.map((sample, index) => {
    return (
      <tr className="border-b-2 border-slate-200 h-12 font-kr" data-id={sample.id} key={sample.qna_seq} onClick={findByIdButton}>
        <td className=" w-1/12 ">{index + 1}</td>
        <td className=" w-2/5 overflow-hidden text-ellipsis whitespace-nowrap">{sample.title}</td>
        <td className=" w-1/6">{sample.centername}</td>
        <td className="w-1/6">{sample.email}</td>
        <td className="w-1/12">{sample.date}</td>
        <td className="w-1/12">{sample.count}</td>
      </tr>
    );
  });

  return (
    // <Routes>
    <div className="flex flex-col justify-center items-center space-y-5 font-kr">
      <h1 className="mt-20 font-bold text-3xl mb-20">1 대 1 문의 게시판</h1>
      <table className="text-center border-none font-kr  w-3/5">
        <thead>
          <tr className="  h-10 border-b-2  border-gray-300   ">
            <th>번호</th>
            <th>제목</th>
            <th>시설이름</th>
            <th>Email</th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>{trList}</tbody>
      </table>
      <div className="">
        <button className="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600" onClick={writeOnClick}>
          작성하기
        </button>
      </div>
      <Button type="button" propClick={writeOnClick} button="작성하기" />
    </div>
  );
};

export default QnA;
