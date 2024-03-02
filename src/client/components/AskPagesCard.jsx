import React from "react";
import Paragraph from "./ui/tag/paragraph";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";

const AskPagesCard = ({ title, desc, callback, visible, id }) => {
  return (
    <div className="flex flex-col gap-y-2 lg:gap-y-4">
      <div className="flex items-center justify-between">
        <p className="font-medium text-[18px] font-montserrat text-black">
          {title}
        </p>
        {!visible ? (
          <IoRemoveCircleOutline fontSize={"24px"} cursor={'pointer'} color="#FF0000" onClick={() => callback(id)} />
        ) : (
          <IoAddCircleOutline fontSize={"24px"} cursor={'pointer'} onClick={() => callback(id)}/>
        )}
      </div>
      <svg
        width="100%"
        height="1"
        viewBox="0 0 1280 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="1280" y2="0.5" stroke="black" />
      </svg>
      {!visible && <Paragraph>{desc}</Paragraph>}
    </div>
  );
};

export default AskPagesCard;
