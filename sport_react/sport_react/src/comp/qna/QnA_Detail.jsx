import React from "react";

const QnA_Detail = () => {
  return (
    <div>
      <div class="h2">
        <h2>문의사항</h2>
      </div>
      <div class="table">
        <table>
          <tr>
            <th class="sec1">제목</th>
            <th>
              <input type="text" />
            </th>
          </tr>
          <tr>
            <th class="sec1">글쓴이</th>
            <th>
              <input type="text" />
            </th>
          </tr>
          <tr>
            <th class="sec1">E-mail</th>
            <th>
              <input type="email" />
            </th>
          </tr>
          <tr>
            <th class="sec1">시설 이름</th>
            <th>
              <input type="text" />
            </th>
          </tr>
          <tr>
            <th class="sec1">문의 내용</th>
            <th>
              <textarea rows="5"></textarea>
            </th>
          </tr>
        </table>
      </div>
      <div class="button">
        <button id="enter">등록</button>
        <button id="reset" type="reset">
          다시 쓰기
        </button>
      </div>
    </div>
  );
};

export default QnA_Detail;
