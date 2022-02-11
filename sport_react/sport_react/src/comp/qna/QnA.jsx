import React from "react";
// 함수
import { useQnAContext } from "./../../context/QnAContext";
// 컨텍스트

// 내부에 있는 함수를 가져올때만 {}를 사용해서 import

const QnA = () => {
  const { boardList, onBoardClick } = useQnAContext();

  // q_seq: "1",
  //   q_title: "동호회...",
  //   q_center: "염주 종합체육관",
  //   q_userId: "배드민턴치러가쟈",
  //   q_context: "동호회 때문에 배드민턴 칠 수 없...",
  // 와타시노 슈미와 게-무데스

  const trList = boardList.map((sample) => {
    return (
      <tr data-id={sample.q_seq}>
        <td>{sample.q_seq}</td>
        <td>{sample.q_title}</td>
        <td>{sample.q_center}</td>
        <td>{sample.q_userId}</td>
        <td>{sample.q_context}</td>
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
            <th>제목</th>
            <th>시설이름</th>
            <th>아이디</th>
            <th>문의내용</th>
          </tr>
        </thead>
        <tbody onClick={onBoardClick}>{trList}</tbody>
      </table>
    </div>
  );
};

export default QnA;
