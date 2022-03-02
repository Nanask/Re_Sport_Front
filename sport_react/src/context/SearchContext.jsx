import React, { useState } from "react";
import { createContext, useContext } from "react";
import { PostFetchOption } from "../modules/FetchOption";
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

  const [checkedItems, setCheckedItems] = useState([]);

  const onChangeHandler = (checked, id) => {
    // const { checked, value, id } = e.target;
    if (checked) {
      console.log("checked", id);
      setCheckedItems([...checkedItems, id]);
      console.log("checkedItems", checkedItems);
      // alert("checkedItems" + checkedItems);
      // 체크해제
    } else {
      setCheckedItems(checkedItems.filter((check) => check !== id));
      console.log("checkedItems 체크해제", checkedItems);
    }
    // console.log("value", value);
    // console.log("checkId", checked);
    // console.log("id", id);

    // if (checked) {
    //   setCheckedInput([...checkedInput, id, value]);
    // }

    // setCheckedInput([...checkedInput]);
    // console.log("checked", checkedInput);
  };

  const onSearchClick = async (e) => {
    // const { checked, value, id } = search;

    console.log("search", checkedItems);
    PostFetchOption.body = JSON.stringify(checkedItems);
    const res = await fetch("http://localhost:8080/search/", PostFetchOption);

    const result = await res.text();
    console.log("result", result);
    alert("검색");
  };

  // radio List 만들기
  const radioItems = [
    {
      type: "radio",
      name: "radio",
      value: "pay",
      label: "유료",
      id: "pay",
    },
    {
      type: "radio",
      name: "radio",
      value: "free",
      label: "무료",
      id: "free",
    },
    {
      type: "radio",
      name: "radio",
      value: "payFree",
      label: "유/무료",
      id: "payFree",
    },
  ];

  const radioList = radioItems.map((item, index) => {
    return (
      <UseInput
        key={item.id}
        type={item.type}
        name={item.name}
        id={item.id}
        value={item.value}
        label={item.label}
        propChange={(e) => onChangeHandler(e.target.checked, e.target.id)}
        checked={checkedItems.includes(`${item.id}`) ? true : false}
        // propChange={onChangeHandler}
      ></UseInput>
    );
  });

  // checkBox List 만들기
  const checkBoxItems = [
    {
      type: "checkbox",
      name: "donggu",
      id: "donggu",
      label: "동구",
    },
    {
      type: "checkbox",
      name: "seogu",
      id: "seogu",
      label: "서구",
    },
    {
      type: "checkbox",
      name: "namgu",
      id: "namgu",
      label: "남구",
    },
    {
      type: "checkbox",
      name: "bukgu",
      id: "bukgu",
      label: "북구",
    },
    {
      type: "checkbox",
      name: "gwangsan",
      id: "gwangsan",
      label: "광산구",
    },
    {
      type: "checkbox",
      name: "all",
      id: "all",
      label: "전체",
    },
  ];

  const checkBoxList = checkBoxItems.map((item) => {
    return (
      <UseInput
        type={item.type}
        name={item.name}
        id={item.id}
        label={item.label}
        propChange={(e) => onChangeHandler(e.target.checked, e.target.id)}
        checked={checkedItems.includes(`${item.id}`) ? true : false}
      ></UseInput>
    );
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

  const props = { detailList, getDList, onChangeHandler, dtList, onSearchClick, checkBoxList, radioList };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default SearchContext;
