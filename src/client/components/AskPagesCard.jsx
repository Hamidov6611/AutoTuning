import React from "react";
import Paragraph from "./ui/tag/paragraph";

const AskPagesCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-y-2 lg:gap-y-4">
      <div className="flex items-center justify-between">
        <p className="font-medium text-[18px] font-montserrat text-black">{title}</p>
        <svg
          width="55"
          height="2"
          viewBox="0 0 55 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="8.74228e-08"
            y1="1"
            x2="55"
            y2="1"
            stroke="black"
            stroke-width="2"
          />
        </svg>
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
      <Paragraph>{desc}</Paragraph>
    </div>
  );
};

export default AskPagesCard;


