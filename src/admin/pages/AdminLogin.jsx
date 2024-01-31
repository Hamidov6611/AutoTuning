import React, { useEffect, useState } from "react";
import MyButton from "../../client/components/ui/button/button";
import { instance } from "../../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminLogin = () => {
  const navigate = useNavigate();
  let token = "";
  const [postData, setPostData] = useState({ username: "", password: "" });
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.post(`/admin/login`, postData);
      toast.success("Success");
      navigate("/admin-news");
      Cookies.set("token", data?.token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    token = Cookies.get("token");
  });
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={loginHandler}
        className="w-[90%] sm:w-[50%] md:w-[30%] min-h-[40%] flex flex-col gap-y-4 lg:gap-y-6"
      >
        <p className="font-semibold font-montserrat text-xl lg:text-3xl text-mainRed text-center uppercase mb-6 sm:mb-12">
          ЧИП-ТЮНИНГ (Админ)
        </p>
        <input
          type="text"
          value={postData.username}
          onChange={(e) =>
            setPostData({ ...postData, username: e.target.value })
          }
          className="h-[76px] bg-[#F5F5F5] w-full px-[18px] md:px-[16px] placeholder:text-mainBlack placeholder:teВойтиxt-base outline-none"
          placeholder="Имя пользователя"
          required
        />
        <input
          type="password"
          value={postData.password}
          onChange={(e) =>
            setPostData({ ...postData, password: e.target.value })
          }
          className="h-[76px] bg-[#F5F5F5] w-full px-[18px] md:px-[16px] placeholder:text-mainBlack placeholder:text-base outline-none"
          placeholder="Пароль"
          required
        />
        <MyButton
          submit={true}
          title={"Войти"}
          class1={`h-[45px] lg:h-[65px] w-auto mx-auto px-12 mt-6 sm:mt-12`}
        />
      </form>
    </div>
  );
};

export default AdminLogin;
