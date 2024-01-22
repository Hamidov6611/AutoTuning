import React from "react";
import MyButton from "./ui/button/button";

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto mt-10">
      <div className="max-w-[1360px] md:h-[526px] ml-auto flex relative">
        <div className="w-[40%] h-full flex flex-col">
          <p className="font-medium font-montserrat text-mainRed md:text-[20px] tracking-[18px]">
            ИНДИВИДУАЛЬНЫЙ
          </p>
          <p className="font-semibold md:font-bold text-mainBlack md:text-[65px] font-montserrat">
            ЧИП-ТЮНИНГ
          </p>

          <div className="md:gap-y-[40px] flex flex-col absolute top-[194px]">
            <div className="flex gap-x-6 items-center">
              <svg
                width="59"
                height="1"
                viewBox="0 0 59 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="0.5"
                  x2="59"
                  y2="0.5"
                  stroke="black"
                  stroke-opacity="0.3"
                />
              </svg>
              <p className="font-normal text-mainBlack text-base">
                Большой опыт работы в сфере автотюнинга
              </p>
            </div>
            <div className="flex gap-x-6 items-center">
              <svg
                width="59"
                height="1"
                viewBox="0 0 59 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="0.5"
                  x2="59"
                  y2="0.5"
                  stroke="black"
                  stroke-opacity="0.3"
                />
              </svg>
              <p className="font-normal text-mainBlack text-base">
                Опытные сотрудники в штате компании
              </p>
            </div>
          </div>

          <div className="absolute top-[375px]">
            <MyButton title={"Связаться с нами"} class1={`md:w-[305px] rounded-[5px] text-base font-montserrat h-[75px]`} />
          </div>
        </div>
        <div className="w-[60%] h-full">
          <img src="/images/hero-img.png" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
