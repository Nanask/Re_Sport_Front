import React from "react";

const Button = ({ type, button, propClick }) => {
  return (
    <div className="">
      <button className="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600" type={type} onClick={propClick}>
        {button}
      </button>
    </div>
  );
};

export default Button;
