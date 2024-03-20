import React from "react";

const NoContent = () => {
  return (
    <div className="w-[522px] flex justify-center">
      <div className="w-[200px] mt-[40px] h-[300px]">
        <img
          src="/images/no.png"
          alt=""
          className="object-scale-down rounded-xl"
        />
      </div>
    </div>
  );
};

export default NoContent;
