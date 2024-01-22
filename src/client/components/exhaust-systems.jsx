import React from "react";

const ExhaustSystems = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-10 md:my-20">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <div className="w-1/2 flex flex-col gap-y-3 md:gap-y-6">
          <p className="font-montserrat font-medium text-[28px] md:text-[40px] text-mainBlack">
            Выхлопные системы
          </p>
          <p className="text-sm md:text-base text-mainBlack font-montserrat font-normal">
            Изготавливаем дунпайпы и выхлопные системы из нержавеющей стали{" "}
            <br className="md:flex hidden" /> aisi 304 и 321
          </p>
          <ul className="space-y-3 text-sm md:text-base font-normal text-mainBlack">
            <li className="flex gap-x-[10px] items-center">
              <svg
                width="6"
                height="3"
                viewBox="0 0 6 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.912 2.272V0.944H5.216V2.272H0.912Z" fill="black" />
              </svg>
              Фланцы и приемная часть выполнены на ЧПУ станках
            </li>
            <li className="flex gap-x-[10px] items-center">
              <svg
                width="6"
                height="3"
                viewBox="0 0 6 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.912 2.272V0.944H5.216V2.272H0.912Z" fill="black" />
              </svg>
               Все швы выполнены TIG сваркой в среде аргона
            </li>
            <li className="flex gap-x-[10px] items-center">
              <svg
                width="6"
                height="3"
                viewBox="0 0 6 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.912 2.272V0.944H5.216V2.272H0.912Z" fill="black" />
              </svg>
              Расчитаны для оптимального потока
            </li>
          </ul>
          <p className="text-sm md:text-base font-normal text-mainBlack">Можем изготовить абсолютно на любое транспортное средство</p>
        </div>
        <div className="w-1/2 md:h-[428px]">
          <img src="/images/system.png" alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ExhaustSystems;
