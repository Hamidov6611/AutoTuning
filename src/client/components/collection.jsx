import React, { useEffect, useState } from "react";
import { BASE_URL, instance } from "../../api/axios";

const Collection = () => {
  const [catalog, setCatalog] = useState([]);

  const getCatalog = async () => {
    try {
      const { data } = await instance.get(`/catalog/?page=1&limit=10`);
      setCatalog(data?.data);
      toggleCard(data?.data[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatalog();
    
  }, []);
  const toggleCard = (item) => {
    // changeService(item?.id);
    // setCard(item);
    setCatalog((prevCards) =>
      prevCards.map((card) =>
        card?.id === item?.id
          ? { ...card, visible: !card.visible }
          : { ...card, visible: false }
      )
    );
  };
  return (
    <div className="max-w-[1440px] mx-auto my-5 ol:my-10 px-[3%] tl:px-0">
      <div className="w-[98%] st:w-[1280px] mx-auto flex flex-col gap-y-[20px] tl:gap-y-[80px]">
        <div className="w-full flex border border-[#FF0000] transition-all ease-linear duration-500 h-[100px] rounded-[10px] overflow-x-auto ol:overflow-x-hidden gap-x-6 ol:gap-x-0 justify-between  items-center">
          {catalog?.map((c, idx) => (
            <div
              className={`h-full w-[213px] cursor-pointer sm:w-auto flex items-center px-[20px] transition-all ease-in-out duration-500 ${c?.visible && "bg-[#FF0000]"}`}
            >
              <img
                onClick={() => toggleCard(c)}
                src={BASE_URL + c?.img}
                alt="c"
                key={idx}
                className={`w-[213px] sm:w-auto ${
                  idx == 4 ? "h-[84px]" : "h-[57px]"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="flex overflow-x-auto ol:overflow-x-hidden gap-x-6 ol:gap-x-0 justify-between w-full items-center">
          {col2?.map((c, idx) => (
            <img src={c} alt={c} key={idx} className={``} />
          ))}
        </div>
        <div className="flex overflow-x-auto ol:overflow-x-hidden gap-x-6 ol:gap-x-[35px] items-center w-full">
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
