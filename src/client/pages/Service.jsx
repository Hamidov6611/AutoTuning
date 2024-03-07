import React, { useEffect, useState } from "react";
import { Feedback, Layout } from "../components";
import Title from "../components/ui/tag/title";
import Loader from "../components/ui/loader/loader";
import { BASE_URL, instance } from "../../api/axios";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Service = () => {
  const [data, setData] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [card, setCard] = useState([]);
  const [isHide, setIsHide] = useState(true);
  const [isService, setIsService] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let categoryId = queryParams.get("id");

  const getCategory = async () => {
    try {
      const { data } = await instance(`/category/?page=1&limit=4`);
      console.log(data);
      setCategory(data?.data);
      !categoryId && setCard(data?.data[0]);
      !categoryId && changeService(data?.data[0]?.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    categoryId && changeService(parseInt(categoryId));

    async function getCategoryById() {
      const { data } = await instance.get(`/category/${categoryId}`);
      setCard(data);
    }

    categoryId && getCategoryById();
  }, [categoryId]);
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
      const { data } = await instance.get(
        `/service/find/?id=${categoryId ? categoryId : id}`
      );
      setData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllService = async () => {
    setIsLoading(true);
    try {
      const { data } = await instance.get(`/service/?page=1&limit=98`);
      setData(data?.data);
      setIsLoading(false);
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
                  <img
                    src={`${BASE_URL}${c.img}`}
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <p className="text-lg mt-3 text-mainBlack font-normal text-center px-8 line-clamp-4 h-[115px]">
                  {c?.title}
                </p>
                <p className="flex text-center w-full justify-center my-[30px] gap-x-[10px] text-[#FF0000] font-medium text-[20px] lg:text-[30px] items-center">
                  {c?.price} ₽
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
                <FaArrowRight />
              </button>
            </div>
          )}

          <Feedback />
        </div>
      )}
    </Layout>
  );
};

export default Service;
