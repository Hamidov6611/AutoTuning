import React from "react";
import "./button.css";
const MyButton = ({ callback, title, class1, submit, }) => {
  return (
    <button
    type={submit ?"submit" : "button"}
      onClick={callback}
      className={`font-medium md:font-semibold text-[16px] md:text-[18px] my-button2 ${class1}`}
    >
      {title}
    </button>
  );
};

export default MyButton;