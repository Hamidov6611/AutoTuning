import React from "react";
import "./red-button.css";
const MyRedButton = ({ callback, title, class1, submit, }) => {
  return (
    <button
    type={submit ?"submit" : "button"}
      onClick={callback}
      className={`font-medium md:font-semibold text-[16px] md:text-[18px] my-button ${class1}`}
    >
      {title}
    </button>
  );
};

export default MyRedButton;