import React from "react";
import MyButton from "./ui/button/button";
import { useNavigate } from "react-router-dom";

const   ChipTuning = () => {
  const navigate = useNavigate()
  return (
    <div className="w-[98%] st:max-w-[1440px] mx-auto flex tl:flex-row flex-col pl-[3%] sl:pl-0 gap-y-6 sl:gap-y-0 items-center gap-x-[129px] h-auto tl:h-[487px] tl:my-20 my-6">
      <div className="tl:w-[50%]">
        <img
          src="/images/tuning.png"
          alt="tuning image"
          className="w-full h-full"
        />
      </div>
      <div className="tl:w-[50%] flex flex-col gap-y-3 md:gap-y-6">
        <p className="font-montserrat text-mainBlack font-medium md:text-[35px] text-[28px] md:text-start text-center">
          ЧИП-ТЮНИНГ
        </p>
        <p className="text-sm md:text-base font-normal font-montserrat text-mainBlack">
          Чип-тюнинг - изменения данных зыписанных в электронном блоке <br className="hidden md:block"/>
          управления
        </p>
        <p className="text-sm md:text-base font-normal font-montserrat text-mainBlack">
          Процедуру чип-тюнинга можно разделить на три этапа:
        </p>
        <ul className="list-disc ml-5 space-y-3 text-sm md:text-base font-normal font-montserrat text-mainBlack">
            <li>Считывание заводской программы из электронного блока управления</li>
            <li>Коррекция считанной программы</li>
            <li>Запись откорретированной программы обратно в электронный блок</li>
        </ul>

        <MyButton callback={() => {
          navigate("/comment")
          window.scrollTo({top: 0})
        }} title={"Подробнее"} class1={`w-[280px] sl:w-[305px] rounded-[5px] text-base font-montserrat h-[50px] text-center tl:h-[75px] md:mt-6`}/>
      </div>
    </div>
  );
};

export default ChipTuning;
