import React from "react";
import Checkbox from "./ui/checkbox/checkbox";
import MyButton from "./ui/button/button";

const Feedback = () => {
  return (
    <div className="w-[98%] st:max-w-[1280px] mx-auto flex md:flex-row flex-col items-start gap-y-6 md:gap-y-10 mb-6 md:mb-20 px-[3%] sl:px-0">
      <div className="w-full sl:w-2/5 tl:w-1/2 flex flex-col gap-y-4 md:gap-y-6">
        <p className="text-[28px] md:text-[40px] text-mainBlack font-medium font-montserrat md:mb-4">
          Наши контакты
        </p>
        <div className="flex items-center gap-x-[32px]">
          <div className="w-[45px] h-[45px] flex items-center justify-center z-[1] bg-secondRed rounded-full">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.26645 7.43645L3.00972 7.69317L3.17437 8.01675C4.66275 10.9418 7.05952 13.3276 9.982 14.825L10.3061 14.991L10.5636 14.7336L12.7636 12.5336C12.899 12.3981 13.099 12.3551 13.2678 12.413L13.2678 12.413L13.2732 12.4148C14.4436 12.8014 15.7066 13.01 17 13.01C17.2739 13.01 17.5 13.2361 17.5 13.51V17C17.5 17.2739 17.2739 17.5 17 17.5C7.88614 17.5 0.5 10.1139 0.5 1C0.5 0.726142 0.726142 0.5 1 0.5H4.5C4.77386 0.5 5 0.726142 5 1C5 2.30213 5.20815 3.55368 5.5939 4.7228C5.6492 4.90217 5.6082 5.09469 5.46645 5.23645L3.26645 7.43645Z"
                stroke="white"
              />
            </svg>
          </div>
          <p className="text-sm font-montserrat font-normal md:text-base text-black">
            Номер телефона
          </p>
        </div>
        <div className="flex items-center gap-x-[32px]">
          <div className="w-[45px] h-[45px] flex items-center justify-center z-[1] bg-secondRed rounded-full">
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5ZM7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8 2 10 7 16.71C12 10 12 8 12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-sm font-montserrat font-normal md:text-base text-black">
            Адрес
          </p>
        </div>
        <div className="flex items-center gap-x-[32px]">
          <div className="w-[45px] h-[45px] flex items-center justify-center z-[1] bg-secondRed rounded-full">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196001 19.413 0.588001C19.805 0.980001 20.0007 1.45067 20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-sm font-montserrat font-normal md:text-base text-black">
            Почта
          </p>
        </div>
      </div>
      <div className="w-full sl:w-3/5 tl:w-1/2 flex flex-col gap-y-[24px]">
        <div className="flex md:flex-row flex-col gap-y-[24px] gap-x-4 md:justify-between w-full">
          <input
            type="text"
            className="h-[76px] bg-[#F5F5F5] w-full px-[8px] md:px-[16px] placeholder:text-mainBlack placeholder:text-base outline-none"
            placeholder="Ваше имя"
          />
          <input
            type="text"
            className="h-[76px] bg-[#F5F5F5] w-full px-[8px] md:px-[16px] placeholder:text-mainBlack placeholder:text-base outline-none"
            placeholder="Телефон"
          />
        </div>
        <textarea
          className="h-[138px] bg-[#F5F5F5] w-full outline-none py-[16px] px-[16px] resize-none placeholder:text-mainBlack placeholder:text-base"
          placeholder="Комментарий"
        ></textarea>
        <div className="flex items-center gap-x-4">
          <Checkbox />
          <p className="text-sm md:text-base font-montserrat font-normal">
            Ознакомлен(на) с пользовательским соглашением
          </p>
        </div>
        <MyButton
          title={"Отправить заявку"}
          class1={`mr-auto w-[270px] h-[50px] sl:h-[75px] md:w-[305px]`}
        />
      </div>
    </div>
  );
};

export default Feedback;
