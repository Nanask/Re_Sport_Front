import React, { useEffect } from "react";
// import "../../css/search/search.css";
import { useSearchContext } from "./../../context/SearchContext";

const Search = () => {
  const { detailList, GetDList } = useSearchContext();

  // useEffect(GetDList, []);

  const dtList = detailList.map((list, index) => {
    return (
      <tr className="border-2 text-center" key={list.seq}>
        <td className="p-5 text-center space-x-8">{index + 1}</td>
        <td>{list.al_code}</td>
        <td>{list.al_tel}</td>
        <td>{list.al_sport}</td>
        <td>{list.al_addr}</td>
        <td>{list.al_free}</td>
      </tr>
    );
  });

  return (
    // <div>Search</div>
    <div className="flex flex-col justify-center items-center space-y-5 font-kr">
      <h1 className="mt-10 font-bold text-3xl">광주광역시 체육시설 찾아보기</h1>
      <div className="inline-block w-300 text-center border-2">
        <div className="flex space-x-10 p-5">
          <div className="">이용료</div>
          {/* <div className="flex space-x-3 "> */}
          <div className="flex items-center space-x-2">
            <input id="ra" type="radio" name="ra1" value="무료" />
            <label>무료</label>
          </div>
          <div className="flex items-center space-x-2">
            <input id="ra" type="radio" name="ra2" value="유료" />
            <label>유료</label>
          </div>
          <div className="flex items-center space-x-2">
            <input id="ra" type="radio" name="ra3" value="유/무료" />
            <label>유/무료</label>
          </div>
          {/* </div> */}
        </div>
        <div className="flex space-x-10 p-5">
          <div>지역(구)</div>
          <div className="flex space-x-3">
            <div className="flex items-center space-x-2">
              <input id="ch" type="checkbox" name="ch1" value="동구" />
              <label>동구</label>
            </div>
            <div className="flex items-center space-x-2">
              <input id="ch" type="checkbox" name="ch2" value="서구" />
              <label>서구</label>
            </div>
            <div className="flex items-center space-x-2">
              <input id="ch" type="checkbox" name="ch3" value="남구" />
              <label>남구</label>
            </div>
            <div className="flex items-center space-x-2">
              <input id="ch" type="checkbox" name="ch4" value="북구" />
              <label>북구</label>
            </div>
            <div className="flex items-center space-x-2">
              <input id="ch" type="checkbox" name="ch5" value="광산구" />
              <label>광산구</label>
            </div>
            <div className="flex items-center space-x-2">
              <input id="all" type="checkbox" name="ch_all" value="전체" onclick="selectAll" />
              <label>전체</label>
            </div>
          </div>
        </div>
        <div className="flex space-x-10 p-5">
          <div>지역(동)</div>
          <div className="flex space-x-3 ">
            <input className="border-2" type="text" name="dong" />
          </div>
        </div>
        {/* <!-- 드롭다운 사용하기 --> */}
        <div className="flex space-x-10 p-5">
          <div className="m-30">종목</div>
          {/* <div className="flex space-x-3"> */}
          <select className="border-2">
            <option value="1">--- 종목 ---</option>
            <option value="2">배드민턴</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {/* </div> */}
        </div>
        <div>
          <button type="button" className="pt-2 pr-3 pl-3 pb-2 hover:bg-slate-200 m-3">
            검색
          </button>
        </div>
      </div>
      <table>
        {/* 배열 데이터 만들어서 map 돌려서 출력하기 !! 제발제발제발제발제발제발 */}
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
