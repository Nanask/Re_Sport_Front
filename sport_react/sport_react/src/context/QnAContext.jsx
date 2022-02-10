import React from "react";
import { createContext, useContext } from "react";

const QnAContext = createContext();
export const useQnAContext = () => {
  return useContext(QnAContext);
};

const [board, setboard] = useState({
  q_title: "",
  q_name: "",
  q_id: "",
  q_context: "",
});

const props = {};

const QnAContext = ({ children }) => {
  return <QnAContext.Provider value={p}>{children}</QnAContext.Provider>;
};

export default QnAContext;
