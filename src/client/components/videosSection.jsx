import React from "react";
import MyButton from "./ui/button/button";

const VideosSection = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col gap-y-6 md:gap-y-10 mb-6 md:mb-20">
      <p className="text-[28px] md:text-[40px] text-center text-mainBlack font-medium font-montserrat">
        Видео
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-[20px] gap-y-4">
        <div className="relative">
          <img src="/images/video.png" alt="" className="h-[400px]" />
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="w-[152px] h-[152px] bg-white rounded-full flex items-center justify-center">
              <img src="/images/Vector.png" className="z-[1]" alt="vector" />
            </div>
          </div>
        </div>

        <div className="relative">
          <img src="/images/video.png" alt="" className="h-[400px]" />
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="w-[152px] h-[152px] bg-white rounded-full flex items-center justify-center">
              <img src="/images/Vector.png" className="z-[1]" alt="vector" />
            </div>
          </div>
        </div>

        <div className="relative">
          <img src="/images/video.png" alt="" className="h-[400px]" />
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="w-[152px] h-[152px] bg-white rounded-full flex items-center justify-center">
              <img src="/images/Vector.png" className="z-[1]" alt="vector" />
            </div>
          </div>
        </div>
      </div>
      <MyButton title={"Смотреть больше"} class1={`w-[270px] md:w-[305px] mx-auto mt-12`} />
    </div>
  );
};

export default VideosSection;
