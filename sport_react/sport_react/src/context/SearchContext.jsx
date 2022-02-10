import React, { useState } from "react";
import { createContext, useContext } from "react";

const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

const [search, setSearch] = useState({
  s_radioCheck: "",
  s_checkBox: "",
  s_local: "",
  q_select: "",
});

const props = {};

const SearchContext = ({ children }) => {
  return <SearchContext.Provider value={props}>{children}</SearchContext.Provider>;
};

export default SearchContext;
