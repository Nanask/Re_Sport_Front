import React, { useState } from "react";
import { createContext, useContext } from "react";

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

  const GetDList = async () => {
    const res = await fetch("http://localhost:8080/search/");
    const result = await res.json();
    // console.log("result", result);
    return result;
  };

  // const dtList = GetDList.forEach((item) => {
  //   console.log(item);
  // });

  const props = { detailList, GetDList };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default SearchContext;
