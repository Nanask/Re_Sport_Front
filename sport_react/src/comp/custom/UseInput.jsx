import React from "react";
import { useState } from "react";

// validator 유효성검사

const UseInput = ({ name, string, type, label, id }) => {
  const [checkedInput, setCheckedInput] = useState();

  const onChangeHandler = (checked, name) => {
    if (checked) {
      setCheckedInput([...checkedInput, name]);
      console.log(checkedInput);
    } else {
      setCheckedInput(checkedInput.filter((check) => check !== name));
      console.log(checkedInput);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input type={type} name={name} onChange={(e) => onChangeHandler(e.target.checked, e.target.name)} />
      {label && <label htmlfor={id ? id : name}>{label}</label>}
    </div>
  );
};

export default UseInput;
