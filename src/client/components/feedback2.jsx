import React, { useState } from "react";
import MyButton from "./ui/button/button";
import { instance } from "../../api/axios";
import toast from "react-hot-toast";

const Feedback2 = ({text}) => {
  const [postData, setPostData] = useState({ name: "", phone: "", date: null });
  const createFeedback = async (e) => {
    e.preventDefault();
    try {
      await instance.post(`/call`, postData);
      toast.success("заявка была отложена");
    } catch (error) {
      toast.error("Failed");
      console.log(error);
    }
  };
  return (
    <form onSubmit={createFeedback} className="min-h-[455px] border border-[#FF0000] w-full flex flex-col gap-y-4 lg:gap-y-7 lg:py-[55px] px-4 py-4 lg:px-[161px]">
      <p className="font-normal text-lg lg:text-[32px] font-montserrat">
        Отправить заявку {text}
      </p>
      <p className="font-montserrat font-medium text-base text-mainBlack/40">
        Перезвоним в течение 5 минут
      </p>
      <div className="flex lg:flex-row flex-col gap-y-3 gap-x-6">
        <div className="lg:w-[50%] w-full flex flex-col gap-y-2">
          <p className="font-medium text-base font-montserrat">Имя:</p>
          <input
            type="text"
            onChange={(e) => setPostData({...postData, name: e.target.value})}
            className="w-full outline-none border border-mainBlack/40 h-[53px] px-4"
            placeholder="Введите имя"
            required
          />
        </div>
        <div className="lg:w-[50%] w-full flex flex-col gap-y-2">
          <p className="font-medium text-base font-montserrat">Телефон:</p>
          <input
            type="text"
            onChange={(e) => setPostData({...postData, phone: e.target.value})}
            className="w-full outline-none border border-mainBlack/40 h-[53px] px-4"
            placeholder="+7 999 999 99 99 "
            required
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-y-3 gap-x-6 items-end">
        <div className="lg:w-[50%] w-full flex flex-col gap-y-2">
          <p className="font-medium text-base font-montserrat">
            Удобное время для звонка
          </p>
          <input
            type="date"
            onChange={(e) => setPostData({...postData, date: e.target.value})}
            className="w-full outline-none border border-mainBlack/40 h-[53px] px-4"
            required
          />
        </div>
        <div className="lg:w-[50%] w-full flex flex-col gap-y-2">
          <MyButton
            submit={true}
            title={"Отправить заявку"}
            class1={`h-[53px]`}
          />
        </div>
      </div>
    </form>
  );
};

export default Feedback2;
