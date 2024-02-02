import React, { useEffect, useState } from "react";
import { instance } from "../../api/axios";
import toast from "react-hot-toast";
import MyButton from "./ui/button/button";
import Checkbox from "./ui/checkbox/checkbox";
import AOS from "aos";
import "aos/dist/aos.css";

const FeedbackModal = ({ setIsModal }) => {
  const [postData, setPostData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const postFeedback = async (e) => {
    e.preventDefault();
    try {
      await instance.post(`/feedback`, postData);
      toast.success("заявка была отложена");
      setIsModal(false);
      setPostData({ ...postData, name: "", phone: "", comment: "" });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Change when the element triggers the animation (0 = at the top of the window)
    });
  }, []);
  return (
    <div className="fixed top-0 z-50 left-0 w-full h-screen flex items-center justify-center bg-modal">
      <div
        data-aos="flip-left"
        className="w-[96%] sm:w-[58%] flex md:flex-row flex-col"
      >
        <form
          onSubmit={postFeedback}
          className="w-full relative bg-black p-12 md:p-24 flex overflow-y-auto min-h-[500px] flex-col gap-y-[24px]"
        >
          <div
            onClick={() => setIsModal(false)}
            className="w-[24px] sm:w-[54px] cursor-pointer h-[24px] sm:h-[54px] flex items-center justify-center bg-white absolute top-0 right-0"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:hidden"
            >
              <path
                d="M0.659322 0.659322C0.868035 0.450311 1.11591 0.284497 1.38876 0.171365C1.66161 0.0582322 1.95409 0 2.24946 0C2.54484 0 2.83732 0.0582322 3.11017 0.171365C3.38302 0.284497 3.63089 0.450311 3.8396 0.659322L12.0003 8.81705L20.1611 0.659322C20.3699 0.450502 20.6178 0.284856 20.8906 0.171843C21.1635 0.0588306 21.4559 0.000663822 21.7512 0.000663816C22.0465 0.000663811 22.3389 0.0588306 22.6118 0.171843C22.8846 0.284856 23.1325 0.450502 23.3413 0.659322C23.5502 0.868142 23.7158 1.11605 23.8288 1.38888C23.9418 1.66172 24 1.95415 24 2.24946C24 2.54478 23.9418 2.83721 23.8288 3.11004C23.7158 3.38288 23.5502 3.63078 23.3413 3.8396L15.1836 12.0003L23.3413 20.1611C23.7631 20.5828 24 21.1548 24 21.7512C24 22.3476 23.7631 22.9196 23.3413 23.3413C22.9196 23.7631 22.3476 24 21.7512 24C21.1548 24 20.5828 23.7631 20.1611 23.3413L12.0003 15.1836L3.8396 23.3413C3.41787 23.7631 2.84588 24 2.24946 24C1.65304 24 1.08105 23.7631 0.659322 23.3413C0.23759 22.9196 0.000663816 22.3476 0.000663816 21.7512C0.000663816 21.1548 0.23759 20.5828 0.659322 20.1611L8.81705 12.0003L0.659322 3.8396C0.450311 3.63089 0.284497 3.38302 0.171365 3.11017C0.0582322 2.83732 0 2.54484 0 2.24946C0 1.95409 0.0582322 1.66161 0.171365 1.38876C0.284497 1.11591 0.450311 0.868035 0.659322 0.659322Z"
                fill="black"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:flex hidden"
            >
              <path
                d="M0.659322 0.659322C0.868035 0.450311 1.11591 0.284497 1.38876 0.171365C1.66161 0.0582322 1.95409 0 2.24946 0C2.54484 0 2.83732 0.0582322 3.11017 0.171365C3.38302 0.284497 3.63089 0.450311 3.8396 0.659322L12.0003 8.81705L20.1611 0.659322C20.3699 0.450502 20.6178 0.284856 20.8906 0.171843C21.1635 0.0588306 21.4559 0.000663822 21.7512 0.000663816C22.0465 0.000663811 22.3389 0.0588306 22.6118 0.171843C22.8846 0.284856 23.1325 0.450502 23.3413 0.659322C23.5502 0.868142 23.7158 1.11605 23.8288 1.38888C23.9418 1.66172 24 1.95415 24 2.24946C24 2.54478 23.9418 2.83721 23.8288 3.11004C23.7158 3.38288 23.5502 3.63078 23.3413 3.8396L15.1836 12.0003L23.3413 20.1611C23.7631 20.5828 24 21.1548 24 21.7512C24 22.3476 23.7631 22.9196 23.3413 23.3413C22.9196 23.7631 22.3476 24 21.7512 24C21.1548 24 20.5828 23.7631 20.1611 23.3413L12.0003 15.1836L3.8396 23.3413C3.41787 23.7631 2.84588 24 2.24946 24C1.65304 24 1.08105 23.7631 0.659322 23.3413C0.23759 22.9196 0.000663816 22.3476 0.000663816 21.7512C0.000663816 21.1548 0.23759 20.5828 0.659322 20.1611L8.81705 12.0003L0.659322 3.8396C0.450311 3.63089 0.284497 3.38302 0.171365 3.11017C0.0582322 2.83732 0 2.54484 0 2.24946C0 1.95409 0.0582322 1.66161 0.171365 1.38876C0.284497 1.11591 0.450311 0.868035 0.659322 0.659322Z"
                fill="black"
              />
            </svg>
          </div>
          <p className="w-full text-center text-white font-montserrat text-[24px] md:text-[32px] font-semibold">
            Связаться с нами
          </p>
          <div className="flex md:flex-row flex-col gap-y-[24px] gap-x-4 md:justify-between w-full">
            <input
              type="text"
              value={postData.name}
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
              className="h-[45px] sm:h-[76px] bg-[#F5F5F5] w-full px-[8px] md:px-[16px] placeholder:text-mainBlack placeholder:text-base outline-none"
              placeholder="Ваше имя"
              required
            />
            <input
              type="text"
              value={postData.phone}
              onChange={(e) =>
                setPostData({ ...postData, phone: e.target.value })
              }
              className="h-[45px] sm:h-[76px] bg-[#F5F5F5] w-full px-[8px] md:px-[16px] placeholder:text-mainBlack placeholder:text-base outline-none"
              placeholder="Телефон"
              required
            />
          </div>
          <textarea
            value={postData.comment}
            onChange={(e) =>
              setPostData({ ...postData, comment: e.target.value })
            }
            className="h-[100px] sm:h-[138px] bg-[#F5F5F5] w-full outline-none py-2 sm:py-[16px] px-[8px] sm:px-[16px] resize-none placeholder:text-mainBlack placeholder:text-base"
            placeholder="Комментарий"
            required
          ></textarea>
          <div className="flex items-center gap-x-4">
            <Checkbox color={true} />
            <p className="text-sm md:text-base font-montserrat font-normal text-white">
              Ознакомлен(на) с пользовательским соглашением
            </p>
          </div>
          <MyButton
            submit={true}
            title={"Отправить заявку"}
            class1={`mr-auto w-[270px] h-[50px] sl:h-[75px] md:w-[305px]`}
          />
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
