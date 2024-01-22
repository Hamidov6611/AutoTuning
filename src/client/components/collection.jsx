import React from "react";

const Collection = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-10">
      <div className="w-[1280px] mx-auto flex flex-col gap-y-[80px]">
        <div className="flex justify-between w-full items-end">
          {col1?.map((c, idx) => (
            <img
              src={c}
              alt="c"
              key={idx}
              className={`${idx == 4 ? "h-[84px]" : "h-[57px]"}`}
            />
          ))}
        </div>
        <div className="flex justify-between w-full items-center">
          {col2?.map((c, idx) => (
            <img src={c} alt={c} key={idx} className={``} />
          ))}
        </div>
        <div className="flex gap-x-[35px] items-center w-full">
          {col3?.map((c, idx) => (
            <img src={c} alt={c} key={idx} className={``} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

const col1 = [
  "/images/col1.png",
  "/images/col2.png",
  "/images/col3.png",
  "/images/col4.png",
  "/images/col5.png",
  "/images/col6.png",
];

const col2 = [
  "/images/ol1.png",
  "/images/ol2.png",
  "/images/ol3.png",
  "/images/ol4.png",
  "/images/ol5.png",
  "/images/ol6.png",
  "/images/ol7.png",
  "/images/ol8.png",
  "/images/ol9.png",
  "/images/ol10.png",
  "/images/ol11.png",
];

const col3 = [
  "/images/rew1.png",
  "/images/rew2.png",
  "/images/rew3.png",
  "/images/rew4.png",
  "/images/rew5.png",
  "/images/rew6.png",
  "/images/rew7.png",
  "/images/rew8.png",
];
