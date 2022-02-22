import React from "react";

const Button = ({ type, button, propClcik }) => {
  const buttonStyle = {
    webkitTransition: "all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360)",
    mozTransition: "all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360)",
    msTransition: "all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360)",
    oTransition: "all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360)",
    transition: "all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360)",
    display: "block",
    margin: "20px auto",
    maxWidth: "180px",
    textDecoration: "none",
    borderRadius: "4px",
    padding: "20px 30px",
  };

  return (
    <div className="po-absolute text-center content-center top-1/3 left-1/2 ">
      <button style={buttonStyle} className=" text-slate-900 shadow-sm hover:text-indigo-50 hover:bg-indigo-900 hover:shadow-indigo-900" type={type} onClick={propClcik}>
        {button}
      </button>
    </div>
  );
};
export default Button;
