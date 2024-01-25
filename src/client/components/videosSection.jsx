import React from "react";
import MyButton from "./ui/button/button";

const VideosSection = () => {
  return (
    <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 sl:gap-y-10 mb-6 md:mb-20 px-[3%] sl:px-0">
      <p className="text-[28px] md:text-[40px] text-center text-mainBlack font-medium font-montserrat">
        Видео
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 tl:grid-cols-3 gap-x-[20px] md:gap-y-6 gap-y-4">
        <div className="relative">
          <div className="bg-gray-300 h-[400px]"></div>
          <img src="/images/video.png" alt="" className="st:h-[400px] hidden st:hidden" />
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="w-[152px] h-[152px] bg-white rounded-full flex items-center justify-center">
              <img src="/images/Vector.png" className="z-[1]" alt="vector" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gray-300 h-[400px]"></div>
          <img src="/images/video.png" alt="" className="st:h-[400px] hidden st:hidden" />
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="w-[152px] h-[152px] bg-white rounded-full flex items-center justify-center">
              <img src="/images/Vector.png" className="z-[1]" alt="vector" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gray-300 h-[400px]"></div>
          <img src="/images/video.png" alt="" className="st:h-[400px] hidden st:hidden" />
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="w-[152px] h-[152px] bg-white rounded-full flex items-center justify-center">
              <img src="/images/Vector.png" className="z-[1]" alt="vector" />
            </div>
          </div>
        </div>
      </div>
      <MyButton title={"Смотреть больше"} class1={`w-[270px] h-[50px] sl:h-[75px] md:w-[305px] mx-auto mt-12`} />
    </div>
  );
};

export default VideosSection;
