import React, { useEffect, useState } from "react";
import { Feedback, Layout } from "../components";
import Title from "../components/ui/tag/title";
import Loader from "../components/ui/loader/loader";
import { BASE_URL, instance } from "../../api/axios";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import CloseIcon from "@mui/icons-material/Close";

const Service = () => {
  const [data, setData] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [card, setCard] = useState([]);
  const [isHide, setIsHide] = useState(true);
  const [isService, setIsService] = useState(false);

  const getCategory = async () => {
    try {
      const { data } = await instance(`/category/?page=1&limit=4`);
      console.log(data);
      setCategory(data?.data);
      setCard(data?.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getService = async () => {
    setIsLoading(true);
    try {
      const { data } = await instance.get(`/service/?page=1&limit=8`);
      setData(data?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
    getService();
  }, []);
  const toggleCard = (item) => {
    changeService(item?.id);
    setCard(item);
    setCategory((prevCards) =>
      prevCards.map((card) =>
        card?.id === item?.id
          ? { ...card, visible: !card.visible }
          : { ...card, visible: false }
      )
    );
  };
  const changeService = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await instance.get(`/service/find/?id=${id}`);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllService = async () => {
    try {
      const { data } = await instance.get(`/service/all`);
      setData(data);
      setIsHide(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout
      title={`Наши работы`}
      subtitle={`Наши работы`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/works`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
          <div className="w-full flex flex-row gap-y-4 justify-between items-center">
            <Title>Сервис</Title>
            {/* Service section */}
            <div className="hidden lg:flex items-center gap-x-[66px]">
              {category?.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleCard(c)}
                  className={`${
                    c?.visible
                      ? "bg-white border border-[#9B1616] text-mainBlack"
                      : "bg-[#9B1616] text-white"
                  } h-[49px] px-8 text-base font-normal font-montserrat cursor-pointer`}
                >
                  {c.title}
                </button>
              ))}
            </div>

            <div className="lg:hidden mr-2 relative">
              {!isService ? (
                <ClearAllIcon
                  onClick={() => setIsService(true)}
                  color="#9B1616"
                  fontSize="medium"
                  className="text-[#FF0000] font-semibold"
                />
              ) : (
                <CloseIcon
                  onClick={() => setIsService(false)}
                  color="#9B1616"
                  fontSize="medium"
                  className="text-[#FF0000] font-semibold"
                />
              )}
              {isService && (
                <div className="flex absolute right-0 p-2 gap-y-2 border border-black top-8 bg-[#FF0000] flex-col items-start w-[220px]">
                  {category?.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        toggleCard(c);
                        setIsService(false);
                      }}
                      className={` text-base font-medium font-montserrat cursor-pointer`}
                    >
                      {c.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full">
            <p className="text-[24px] md:text-[28px] font-normal lg:font-medium text-mainBlack">
              {card?.title}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 tl:grid-cols-4 gap-x-5">
            {data?.map((c, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-y-3 shadow-md md:shadow-lg xl:shadow-xl border py-4 px-3 rounded-[10px]"
              >
                <div className="h-[147px] max-w-[282px]">
                  <img src={`${BASE_URL}${c.img}`} alt="" />
                </div>
                <p className="text-lg mt-3 text-mainBlack font-normal text-center px-8 line-clamp-4 h-[115px]">
                  {c?.title}
                </p>
                <p className="flex text-center w-full justify-center my-[30px] gap-x-[10px] text-[#FF0000] font-medium text-[20px] lg:text-[30px] items-center">
                  {c?.price}{" "}
                  <svg
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7368 18.0833C14.2978 18.0846 12.8861 17.7043 11.6563 16.9841C10.4265 16.2639 9.42599 15.2315 8.76421 14H15.7368L16.9474 11.6667H7.96526C7.90474 11.2817 7.86842 10.8967 7.86842 10.5C7.86842 10.1033 7.90474 9.71834 7.96526 9.33334H15.7368L16.9474 7H8.76421C9.42717 5.76938 10.428 4.73781 11.6575 4.01776C12.887 3.29772 14.2981 2.91684 15.7368 2.91667C17.6858 2.91667 19.4774 3.605 20.8574 4.74834L23 2.68334C21.0068 0.953715 18.419 -0.00232947 15.7368 4.26246e-06C10.9916 4.26246e-06 6.97263 2.92834 5.47158 7H1.21053L0 9.33334H4.91474C4.8167 10.1082 4.8167 10.8918 4.91474 11.6667H1.21053L0 14H5.47158C6.97263 18.0717 10.9916 21 15.7368 21C18.5332 21 21.0753 19.985 23 18.3167L20.8453 16.2517C19.4774 17.395 17.6979 18.0833 15.7368 18.0833Z"
                      fill="#FF0000"
                    />
                  </svg>
                </p>
              </div>
            ))}
          </div>
          {data?.length < 1 && (
            <div className="w-full flex justify-center text-center mb-12 lg:mb-16 text-[#9B1616] font-semibold text-xl">
              Данная услуга не найдена!
            </div>
          )}

          {data?.length > 0 && isHide && (
            <div className="w-full flex justify-center">
              <button
                onClick={getAllService}
                className="font-montserrat font-normal text-base text-white flex gap-x-3 h-[67px] bg-[#9B1616] items-center justify-center md:w-[403px]"
              >
                Смотреть больше
                <svg
                  width="30"
                  height="23"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5 11.5L18.375 1.5M28.5 11.5L18.375 21.5M28.5 11.5L10.7812 11.5M1.5 11.5L5.71875 11.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* <div className="flex w-full justify-end">
            <Pagination
              count={
                data?.count % 10 != 0
                  ? Math.floor(data?.count / 10) + 1
                  : Math.floor(data?.count / 10)
              }
              onChange={(e, value) => setPageId(value)}
              onClick={() => window.scrollTo({ top: 0 })}
              variant="outlined"
              shape="rounded"
            />
          </div> */}
          <Feedback />
        </div>
      )}
    </Layout>
  );
};

export default Service;
