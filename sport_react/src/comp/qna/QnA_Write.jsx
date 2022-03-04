import React from "react";
// import "../../css/qna/qna_detail.css";
import { useQnAContext } from "./../../context/QnAContext";

const QnA_Write = () => {
  const { qna, writeButton, onChange, updateButton, deleteButton, buttons, resetButton } = useQnAContext();
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-5 font-kr p-5">
        <h2 className="mt-10 font-bold text-3xl ">문의사항</h2>
      </div>
      <div className="border-2 pt-5 flex-col  ">
        <div>
          <div className="flex space-x-2 pb-3 justify-center ">
            <label className="flex-1 text-center">제목</label>
            <input onChange={onChange} name="title" className="flex-1 bg-slate-200 " value={qna.title} />
          </div>
          <div className="flex items-center space-x-2 pb-3">
            <label className="flex-1 text-center">E-mail</label>
            <input onChange={onChange} name="email" className="flex-1 bg-slate-200" value={qna.email} />
          </div>
          <div className="flex items-center space-x-2 pb-3">
            <label className="flex-1 text-center">시설 이름</label>
            <input onChange={onChange} name="centername" className="flex-1 bg-slate-200" value={qna.centername} />
          </div>
          <div className="flex items-center space-x-2 pb-3">
            <label className="flex-1 text-center">문의 내용</label>
            <input onChange={onChange} name="content" className="flex-1 bg-slate-200" value={qna.content} />
          </div>
        </div>
      </div>
      <div className="pt-2 pr-3 pl-3 pb-2  m-3 flex justify-end">
        <button className="mr-10 hover:bg-slate-200 pt-2 pr-3 pl-3 pb-2" onClick={writeButton}>
          등록
        </button>
        <button className="mr-10 hover:bg-slate-200 pt-2 pr-3 pl-3 pb-2" onClick={updateButton}>
          수정
        </button>
        <button className="mr-10 hover:bg-slate-200 pt-2 pr-3 pl-3 pb-2" onClick={deleteButton}>
          삭제
        </button>
        <button className="mr-10 hover:bg-slate-200 pt-2 pr-3 pl-3 pb-2" type="button" onClick={resetButton}>
          다시 쓰기
        </button>
        {/* {buttons} */}
      </div>
    </div>
  );
};

export default QnA_Write;
