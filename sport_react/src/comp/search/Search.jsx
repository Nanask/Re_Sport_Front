import React from "react";
import "../../css/search/search.css";

const Search = () => {
  return (
    // <div>Search</div>
    <div>
      <h1>광주광역시 체육시설 찾아보기</h1>
      <table className="search">
        {/* <!-- <caption>광주광역시 체육시설 찾아보기</caption> 표 제목 붙이기 --> */}
        <tr className="search">
          <th className="search">이용료</th>
          <td>
            <input id="ra" type="radio" name="ra" value="무료" /> 무료
            <input id="ra" type="radio" name="ra" value="유료" /> 유료
            <input id="ra" type="radio" name="ra" value="유/무료" /> 유/무료
          </td>
        </tr>
        <tr className="search">
          <th className="search">지역(구)</th>
          <td>
            <input id="ch" type="checkbox" name="ch" value="동구" /> 동구
            <input id="ch" type="checkbox" name="ch" value="서구" /> 서구
            <input id="ch" type="checkbox" name="ch" value="남구" /> 남구
            <input id="ch" type="checkbox" name="ch" value="북구" /> 북구
            <input id="ch" type="checkbox" name="ch" value="광산구" /> 광산구
            <input id="all" type="checkbox" name="ch_all" value="전체" onclick="selectAll" />
            전체
          </td>
        </tr>
        <tr className="search">
          <th className="search">지역(동)</th>
          <td id="t3">
            <input type="text" name="dong" />
          </td>
        </tr>
        <tr className="search">
          <th className="search">검색어</th>
          <td id="t4">
            <input type="text" size="20" name="search" />
          </td>
        </tr>
        <tr className="search">
          {/* <!-- 드롭다운 사용하기 --> */}
          <th className="search">종목</th>
          <td>
            <select className="sports" name="input">
              <option value="1">--- 종목 ---</option>
              <option value="2">배드민턴</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </td>
        </tr>
        <tr className="search">
          <td class="btn_src">
            <button id="btn_search" type="button">
              검색
            </button>
          </td>
        </tr>
      </table>
      <table className="list">
        <tr class="list first">
          <th>번호</th>
          <th>시설 이름</th>
          <th>전화번호</th>
          <th>종목</th>
          <th>위치</th>
        </tr>
        <tr>
          <th>1</th>
          <th>염주 종합체육관</th>
          <th>062) 604 - 1400</th>
          <th>핸드볼, 농구, 배드민턴, 탁구, 배구</th>
          <th>광주광역시 서구 금화로 278</th>
        </tr>
        <tr>
          <th>2</th>
          <th>수완 인라인롤러경기장</th>
          <th></th>
          <th>인라인스케이트</th>
          <th>광주광역시 광산구 장덕로96번길 15</th>
        </tr>
        <tr>
          <th>3</th>
          <th>광주여대시립유니버시아드체육관</th>
          <th></th>
          <th>배구, 농구, 핸드볼, 탁구, 배드민턴, 리듬체조</th>
          <th>광주광역시 광산구 광주여대길 45</th>
        </tr>
        <tr>
          <th>4</th>
          <th>첨단 인라인스케이트장</th>
          <th></th>
          <th>인라인스케이트</th>
          <th>광주 광산구 쌍암동</th>
        </tr>
        <tr>
          <th>5</th>
          <th>인공암벽장</th>
          <th></th>
          <th>인공 야외 암벽</th>
          <th>광주광역시 서구 상무시민공원 내 위치</th>
        </tr>
      </table>
    </div>
  );
};

export default Search;
