import React, { useRef } from "react";
import { useState } from "react";
import { useSearchContext } from "../../context/SearchContext";

// validator 유효성검사

const UseInput = ({ name, type, label, id, value, propChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <input type={type} name={name} id={id} value={value} onChange={propChange} />
      <label>{label}</label>
    </div>
  );
};

export default UseInput;
