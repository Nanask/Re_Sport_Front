import React, { useRef } from "react";
import { useState } from "react";
import { useSearchContext } from "../../context/SearchContext";

const UseInput = ({ name, type, label, id, value, propChange }) => {
  return (
    <td className="">
      <input className="" type={type} name={name} id={id} value={value} onChange={propChange} />
      <label className="m-1 p-2 ">{label}</label>
    </td>
  );
};

export default UseInput;
