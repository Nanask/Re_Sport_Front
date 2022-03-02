import React, { useEffect, useState } from "react";
import Button from "../custom/Button";
import { useSearchContext } from "./../../context/SearchContext";
import UseInput from "./../custom/UseInput";

const Search = () => {
  const { getDList, dtList, onSearchClick, checkBoxList, radioList } = useSearchContext();

  useEffect(getDList, []);

  return (
    <div className="flex flex-col justify-center items-center space-y-5 font-kr">
      <h1 className="mt-10 font-bold text-3xl">광주광역시 체육시설 찾아보기</h1>
      <div className="inline-block w-300 border-2">
        <table className="border-collapse">
          <colgroup>
            <col className="w-40"></col>
            <col className="w-auto"></col>
          </colgroup>
          <tbody className="table-row-group align-middle">
            <tr className="h-10">
              <th className="border-r-2">이용료</th>
              <td className=" pl-3 mb-3">{radioList}</td>
            </tr>
            <tr className="h-10">
              <th className="border-r-2">지역(구)</th>
              <td className=" pl-3 mb-3">{checkBoxList}</td>
            </tr>
            <tr className="h-10">
              <th className="border-r-2">지역(동)</th>
              <td className="pl-3">
                <input className="border-2 outline-none p-1 mb-2 mt-2" type="text" name="dong"></input>
              </td>
            </tr>
            <tr className="h-10">
              <th className="border-r-2 align-middle">종목</th>
              <td className="pl-3">
                <select className="border-2 outline-none p-1 mb-2 mt-2">
                  <option value="1">--- 종목 ---</option>
                  <option value="2">배드민턴</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button type="button" className="inline-flex m-5  px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600" onClick={onSearchClick}>
          작성하기
        </button>
      </div>
      <table>
        <thead>
          <tr className="border-2 text-center p-4">
            <th className="p-4">번호</th>
            <th className="p-4">시설 이름</th>
            <th className="p-4">전화번호</th>
            <th className="p-4">종목</th>
            <th className="p-4">위치</th>
            <th className="p-4">이용료</th>
          </tr>
        </thead>
        <tbody>{dtList}</tbody>
      </table>
    </div>
  );
};

export default Search;
