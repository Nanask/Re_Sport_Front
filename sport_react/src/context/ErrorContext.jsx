import React, { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const AppContext = createContext();

export const useErrorContext = () => {
  return useContext(AppContext);
};

const ErrorHandlerContext = ({ children }) => {
  const errorHandler = (res) => {
    if (res.status === 200) {
      console.log("Http Response 200");
      return { isError: true, message: "Http Response 200" };
    } else if (res.status === 400) {
      return { isError: false, message: "Http Response 400" };
    } else if (res.status === 401) {
      return { isError: false, message: "Http Response 401" };
    } else if (res.status === 403) {
      return { isError: false, message: "Http Response 403" };
    } else if (res.status === 404) {
      return { isError: false, message: "Http Response 404" };
    } else if (res.status === 405) {
      return { isError: false, message: "Http Response 405" };
    }
  };

  const prop = { errorHandler };
  return <AppContext.Provider value={prop}>{children}</AppContext.Provider>;
};

export default ErrorHandlerContext;
