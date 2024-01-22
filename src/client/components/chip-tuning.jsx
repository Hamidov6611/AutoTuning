import React from "react";

const ChipTuning = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex items-center gap-x-[129px] h-[487px] my-20 md:my-40">
      <div className="md:w-[50%]">
        <img
          src="/images/tuning.png"
          alt="tuning image"
          className="w-full h-full"
        />
      </div>
      <div className="md:w-[50%] flex flex-col gap-y-3 md:gap-y-6">
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
      </div>
    </div>
  );
};

export default ChipTuning;
