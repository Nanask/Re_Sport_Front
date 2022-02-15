import React from "react";
// import "../../css/qna/qna_detail.css";

const QnA_Detail = () => {
  return (
    <div>
      <div className="qna_detail">
        <h2>문의사항</h2>
      </div>
      <div className="detail_table_div">
        <table className="detail_table">
          <tr>
            <th className="sec1">제목</th>
            <tr>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tr>
          <tr>
            <th className="sec1">글쓴이</th>
            <tr>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tr>
          <tr>
            <th className="sec1">E-mail</th>
            <tr>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tr>
          <tr>
            <th className="sec1">시설 이름</th>
            <tr>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tr>
          <tr>
            <th className="sec1">문의 내용</th>
            <tr>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tr>
        </table>
      </div>
      <div className="detail_btn">
        <button id="enter">등록</button>
        <button id="reset" type="reset">
          다시 쓰기
        </button>
      </div>
    </div>
  );
};

export default QnA_Detail;
