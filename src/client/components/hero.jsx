import React, { useState } from "react";
import MyButton from "./ui/button/button";
import FeedbackModal from "./feedback-modal";

const Hero = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="st:max-w-[1440px] mx-auto mt-5 ol:mt-10 pl-[3%] tl:pl-0">
      <div className="st:max-w-[1360px] ml-[1%] nor:h-[526px] gap-y-6 sl:gap-y-0 st:ml-auto flex nor:flex-row flex-col sl:flex-row tl:flex-col relative">
        <div className="w-full sl:w-[50%] nor:w-[40%] h-full flex flex-col">
          <p className="font-medium font-montserrat text-mainRed mb-2 tl:mb-4 ol:mb-0 text-[18px] sm:text-[24px]  tl:text-[32px] ol:text-[20px]  tracking-[5px] nor:tracking-[18px]">
            ИНДИВИДУАЛЬНЫЙ
          </p>
          <p className="font-semibold  md:font-bold text-mainBlack mb-6 ol:mb-0 text-[24px] sm:text-[28px] tl:text-[40px] nor:text-[65px] font-montserrat">
            ЧИП-ТЮНИНГ
          </p>

          {isModal && <FeedbackModal setIsModal={setIsModal}/>}

          <div className="gap-y-[10px] nor:gap-y-[40px] mb-6 ol:mb-0 flex flex-col ol:absolute top-[120px] nor:top-[194px]">
            <div className="flex gap-x-6 items-center">
              <svg
                width="59"
                height="1"
                viewBox="0 0 59 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nor:flex hidden"
              >
                <line
                  y1="0.5"
                  x2="59"
                  y2="0.5"
                  stroke="black"
                  stroke-opacity="0.3"
                />
              </svg>
              <p className="font-normal  w-full text-mainBlack text-base">
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
                className="nor:flex hidden"
              >
                <line
                  y1="0.5"
                  x2="59"
                  y2="0.5"
                  stroke="black"
                  stroke-opacity="0.3"
                />
              </svg>
              <p className="font-normal  w-full text-mainBlack text-base">
                Опытные сотрудники в штате компании
              </p>
            </div>
          </div>

          <div className="ol:absolute top-[225px] w-full nor:top-[375px]">
            <MyButton
              callback={() => setIsModal(true)}
              title={"Связаться с нами"}
              class1={`w-[280px] sl:w-[305px] rounded-[5px] text-base font-montserrat h-[50px] text-center tl:h-[75px]`}
            />
          </div>
        </div>
        <div className="h-auto ml-auto nor:w-[60%] tl:h-full flex justify-end">
          <img src="/images/hero-img.png" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
