import React, { useEffect, useState } from "react";
import { useSearchContext } from "./../../context/SearchContext";
import UseInput from "./../custom/UseInput";

const Search = () => {
  const { detailList, getDList, onChangeHandler, dtList, checkBoxList, radioList } = useSearchContext();

  useEffect(getDList, []);

  return (
    <div className="flex flex-col justify-center items-center space-y-5 font-kr">
      <h1 className="mt-10 font-bold text-3xl">광주광역시 체육시설 찾아보기</h1>
      <div className="inline-block w-300 text-center border-2">
        <div className="flex space-x-10 p-5">
          <div className="">이용료</div>
          {radioList}
        </div>
        <div className="flex space-x-10 p-5">
          <div>지역(구)</div>
          <div className="flex space-x-3">{checkBoxList}</div>
        </div>
        <div className="flex space-x-10 p-5">
          <div>지역(동)</div>
          <div className="flex space-x-3 ">
            <input className="border-2" type="text" name="dong" />
          </div>
        </div>
        <div className="flex space-x-10 p-5">
          <div className="m-30">종목</div>
          <select className="border-2">
            <option value="1">--- 종목 ---</option>
            <option value="2">배드민턴</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <button type="button" className="pt-2 pr-3 pl-3 pb-2 hover:bg-slate-200 m-3">
            검색
          </button>
        </div>
      </div>
      <table>
        <tr className="border-2 text-center">
          <th className="p-4">번호</th>
          <th>시설 이름</th>
          <th>전화번호</th>
          <th>종목</th>
          <th>위치</th>
        </tr>
        <tbody>{dtList}</tbody>
      </table>
    </div>
  );
};

export default Search;
