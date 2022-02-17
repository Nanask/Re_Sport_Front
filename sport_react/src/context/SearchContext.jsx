import React, { useState } from "react";
import { createContext, useContext } from "react";
import UseInput from "./../comp/custom/UseInput";

const AppContext = createContext();

export const useSearchContext = () => {
  return useContext(AppContext);
};

const SearchContext = ({ children }) => {
  const [search, setSearch] = useState({
    sp_seq: "",
    sp_money: "",
    sp_district: "",
    sp_search: "",
    sp_sport: "",
  });

  const [detail, setDetail] = useState({
    al_seq: "",
    al_code: "",
    al_name: "",
    al_tel: "",
    al_sport: "",
    al_addr: "",
    al_free: "",
  });

  const [detailList, setDetailList] = useState([
    {
      al_seq: "1",
      al_code: "염주 종합체육관",
      al_tel: "062) 604 - 1400",
      al_sport: "핸드볼, 농구, 배드민턴, 탁구, 배구",
      al_addr: "광주광역시 서구 금화로 278",
      al_free: "",
    },
    {
      al_seq: "2",
      al_code: "수완 인라인롤러경기장",
      al_tel: "062) 604 - 1400",
      al_sport: "인라인스케이트",
      al_addr: "광주광역시 광산구 장덕로96번길 15",
      al_free: "",
    },
  ]);

  const onChangeHandler = (e) => {
    // const { name, value } = e.target;
    const { checked, value, name } = e.target;
    console.log("value", value);
    console.log("checkId", checked);
    // console.log("dddddd");
    // }
    // if (type === "checkbox") {
    //   if (checked) {
    //     setCheckedInput([...checkedInput, name]);
    //     console.log(checkedInput);
    //   } else {
    //     setCheckedInput(checkedInput.filter((check) => check !== name));
    //     console.log(checkedInput);
    // }
    // }
    // console.log("라라라라라라");
  };

  // radio List 만들기
  const radioItems = [
    {
      type: "radio",
      name: "radio",
      value: "pay",
      label: "유료",
    },
    {
      type: "radio",
      name: "radio",
      value: "free",
      label: "무료",
    },
    {
      type: "radio",
      name: "radio",
      value: "payFree",
      label: "유/무료",
    },
  ];

  const radioList = radioItems.map((item) => {
    return <UseInput type={item.type} name={item.name} value={item.value} label={item.label} propChange={onChangeHandler}></UseInput>;
  });

  // checkBox List 만들기
  const checkBoxItems = [
    {
      type: "checkbox",
      name: "check1",
      id: "check1",
      label: "동구",
    },
    {
      type: "checkbox",
      name: "check2",
      id: "check2",
      label: "서구",
    },
    {
      type: "checkbox",
      name: "check3",
      id: "check3",
      label: "남구",
    },
    {
      type: "checkbox",
      name: "check4",
      id: "check4",
      label: "북구",
    },
    {
      type: "checkbox",
      name: "check5",
      id: "check5",
      label: "광산구",
    },
    {
      type: "checkbox",
      name: "check6",
      id: "check6",
      label: "전체",
    },
  ];

  const checkBoxList = checkBoxItems.map((item) => {
    return <UseInput type={item.type} name={item.name} id={item.id} label={item.label} propChange={onChangeHandler}></UseInput>;
  });

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

  const [checkedInput, setCheckedInput] = useState([]);

  const getDList = async () => {
    const res = await fetch("http://localhost:8080/search/");
    const result = await res.json();
    // console.log("result", result);

    let resultArray = [];
    for (let i = 0; i < 5; i++) {
      resultArray.push(result[i]);
    }

    setDetailList(resultArray);
  };

  const props = { detailList, getDList, onChangeHandler, dtList, checkBoxList, radioList };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default SearchContext;
