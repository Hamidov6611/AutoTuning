import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL, instance } from "../../api/axios";
import Title from "../components/ui/tag/title";
import { TbArrowBackUpDouble } from "react-icons/tb";
import MyButton from "../components/ui/button/button";
import FeedbackModal from "../components/feedback-modal";

const carsType = ["model", "year", "engine"];

const ModelDetails = () => {
  const [isModal, setIsModal] = useState(false);

  const navigate = useNavigate();
  const { brand, id } = useParams();
  const [cars, setCars] = useState({
    model: [],
    year: [],
    engine: [],
    isLoading: false,
    base_image: "",
  });

  const [name, setName] = useState({
    yearName: "",
    modelName: "",
    engine_name: "",
  });

  const [isModel, setIsModel] = useState({ m1: true, m2: false, m3: false });

  const getData = async (type, depId) => {
    try {
      if (type == carsType[0]) {
        const { data } = await instance.get(`/brand/sort2/${id}`);
        setCars({
          ...cars,
          model: data[0]?.brandModel,
          base_image: data[0]?.img,
        });
      }
      if (type == carsType[1]) {
        const { data } = await instance.get(`/brand-model/sort/${depId}`);
        console.log(data);
        setCars({ ...cars, year: data });
      }
      if (type == carsType[2]) {
        const { data } = await instance.get(`/brand-year/sort/${depId}`);
        console.log(data);
        setCars({ ...cars, engine: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(carsType[0], 1);
  }, []);

  const topFunction = (url) => {
    navigate(url);
    window.scrollTo({ top: 0 });
  };

  return (
    <Layout
      title={`Чип тюнинг ${brand} ${name?.modelName} ${name.yearName} ${name?.engine_name}`}
      subtitle={`Обучение чип-тюнингу`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/about`}
    >
      <div className="w-[98%] mb-3 st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
        <Title>
          Чип тюнинг <p className="m-0 p-0 uppercase inline">{brand}</p>{" "}
          <p className="m-0 p-0 inline">{name?.modelName}</p>{" "}
          <p className="m-0 p-0 inline">{name?.yearName}</p>{" "}
          <p className="m-0 p-0 inline">{name?.engine_name}</p>
        </Title>
      </div>

      <div className="w-[98%] hidden sm:grid grid-cols-3 gap-x-16 mb-20 st:max-w-[1280px] mx-auto gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
        {/* left */}
        <div className="w-full flex flex-col">
          {/* Hero */}
          <div className="w-full h-[79px] bg-black/70 rounded-t-[10px] flex items-center justify-between px-[20px]">
            <p className="font-semibold md:font-bold text-[18px] md:text-[22px] text-[#CCC] uppercase">
              {brand}
            </p>
            <div className="w-[50px] h-[50px]">
              <img
                src={BASE_URL + cars.base_image}
                alt={brand}
                className="w-full h-full object-scale-down"
              />
            </div>
          </div>
          {/* Body */}
          <div className="border border-black rounded-b-[10px] h-auto] flex flex-col gap-y-3 p-[20px]">
            {cars?.model?.map((c, idx) => (
              <div 
              // to={`/${c?.title}/${c?.id}`}
                onClick={() => {
                  getData(carsType[1], c?.id);
                  setName({ ...name, modelName: c?.title });
                  window.scrollTo({top : 0})
                }}
                key={idx}
                className={`text-sm font-normal font-montserrat text-black ${
                  c?.id != cars?.model[cars?.model?.length - 1]?.id &&
                  "border-b border-black border-dashed"
                }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
              >
                {c?.title}
              </div>
            ))}
          </div>
        </div>

        {/* center */}
        {cars?.year?.length > 0 && (
          <div className="w-full flex flex-col">
            {/* Hero */}
            <div className="w-full h-[79px] bg-black/70 rounded-t-[10px] flex items-center justify-between px-[20px]">
              <p className="font-semibold md:font-bold text-[18px] md:text-[22px] text-[#CCC]">
                {name?.modelName}
              </p>
              <div className="w-[50px] h-[50px]">
                <img
                  src={BASE_URL + cars.base_image}
                  alt={brand}
                  className="w-full h-full object-scale-down"
                />
              </div>
            </div>
            {/* Body */}
            <div className="border border-black rounded-b-[10px] h-auto] flex flex-col gap-y-3 p-[20px]">
              {cars?.year?.length > 0 &&
                cars?.year?.map((c, idx) => (
                  <p
                    onClick={() => {
                      getData(carsType[2], c?.id);
                      setName({ ...name, engine_name: c?.title });
                    }}
                    key={idx}
                    className={`text-sm font-normal font-montserrat text-black ${
                      c?.id != cars?.year[cars?.year?.length - 1]?.id &&
                      "border-b border-black border-dashed"
                    }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                  >
                    {c?.title}
                  </p>
                ))}
            </div>
          </div>
        )}

        {/* right */}
        {cars?.engine?.length > 0 && (
          <div className="w-full flex flex-col">
            {/* Hero */}
            <div className="w-full h-[79px] bg-black/70 rounded-t-[10px] flex items-center justify-between px-[20px]">
              <p className="font-semibold md:font-bold text-[18px] md:text-[22px] text-[#CCC]">
                {name?.engine_name}
              </p>
              <div className="w-[50px] h-[50px]">
                <img
                  src={BASE_URL + cars.base_image}
                  alt={brand}
                  className="w-full h-full object-scale-down"
                />
              </div>
            </div>
            {/* Body */}
            <div className="border border-black rounded-b-[10px] h-auto] flex flex-col gap-y-3 p-[20px]">
              {cars?.engine?.length > 0 &&
                cars?.engine?.map((c, idx) => (
                  <p
                    key={idx}
                    role="button"
                    onClick={() =>
                      topFunction(`/${brand}/${name?.modelName}/${c?.id}`)
                    }
                    className={`text-sm font-normal font-montserrat text-black ${
                      c?.id != cars?.engine[cars?.engine?.length - 1]?.id &&
                      "border-b border-black border-dashed"
                    }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                  >
                    {c?.title}
                  </p>
                ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-[98%] sm:hidden gap-x-16 mb-20 st:max-w-[1280px] mx-auto gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
        {/* left */}
        {isModel.m1 && (
          <div className="w-full flex flex-col">
            {/* Hero */}
            <div className="w-full h-[79px] bg-black/70 rounded-t-[10px] flex items-center justify-between px-[20px]">
              <p className="font-semibold md:font-bold text-[18px] md:text-[22px] text-[#CCC] uppercase">
                {brand}
              </p>
              <div className="w-[50px] h-[50px]">
                <img
                  src={BASE_URL + cars.base_image}
                  alt={brand}
                  className="w-full h-full object-scale-down"
                />
              </div>
            </div>
            {/* Body */}
            <div className="border border-black rounded-b-[10px] h-auto] flex flex-col gap-y-3 p-[20px]">
              {cars?.model?.map((c, idx) => (
                <p
                  onClick={() => {
                    getData(carsType[1], c?.id);
                    setName({ ...name, modelName: c?.title });
                    setIsModel({ m1: false, m2: true, m3: false });
                  }}
                  key={idx}
                  className={`text-sm font-normal font-montserrat text-black ${
                    c?.id != cars?.model[cars?.model?.length - 1]?.id &&
                    "border-b border-black border-dashed"
                  }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                >
                  {c?.title}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* center */}
        {isModel.m2 && cars?.year?.length > 0 && (
          <div className="w-full flex flex-col">
            <div className="py-2 w-full flex justify-end items-center">
              <TbArrowBackUpDouble
                fontSize={32}
                color="#FF0000"
                onClick={() => setIsModel({ m1: true, m2: false, m3: false })}
                cursor={"pointer"}
              />
            </div>
            {/* Hero */}
            <div className="w-full h-[79px] bg-black/70 rounded-t-[10px] flex items-center justify-between px-[20px]">
              <p className="font-semibold md:font-bold text-[18px] md:text-[22px] text-[#CCC]">
                {name?.modelName}
              </p>
              <div className="w-[50px] h-[50px]">
                <img
                  src={BASE_URL + cars.base_image}
                  alt={brand}
                  className="w-full h-full object-scale-down"
                />
              </div>
            </div>
            {/* Body */}
            <div className="border border-black rounded-b-[10px] h-auto] flex flex-col gap-y-3 p-[20px]">
              {cars?.year?.length > 0 &&
                cars?.year?.map((c, idx) => (
                  <p
                    onClick={() => {
                      getData(carsType[2], c?.id);
                      setName({ ...name, engine_name: c?.title });
                      setIsModel({ m1: false, m2: false, m3: true });
                    }}
                    key={idx}
                    className={`text-sm font-normal font-montserrat text-black ${
                      c?.id != cars?.year[cars?.year?.length - 1]?.id &&
                      "border-b border-black border-dashed"
                    }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                  >
                    {c?.title}
                  </p>
                ))}
            </div>
          </div>
        )}

        {/* right */}
        {isModel.m3 && cars?.engine?.length > 0 && (
          <div className="w-full flex flex-col">
            {/* Hero */}
            <div className="py-2 w-full flex justify-end items-center">
              <TbArrowBackUpDouble
                fontSize={32}
                color="#FF0000"
                onClick={() => setIsModel({ m1: false, m2: true, m3: false })}
                cursor={"pointer"}
              />
            </div>
            <div className="w-full h-[79px] bg-black/70 rounded-t-[10px] flex items-center justify-between px-[20px]">
              <p className="font-semibold md:font-bold text-[18px] md:text-[22px] text-[#CCC]">
                {name?.engine_name}
              </p>
              <div className="w-[50px] h-[50px]">
                <img
                  src={BASE_URL + cars.base_image}
                  alt={brand}
                  className="w-full h-full object-scale-down"
                />
              </div>
            </div>
            {/* Body */}
            <div className="border border-black rounded-b-[10px] h-auto] flex flex-col gap-y-3 p-[20px]">
              {cars?.engine?.length > 0 &&
                cars?.engine?.map((c, idx) => (
                  <p
                    key={idx}
                    role="button"
                    onClick={() =>
                      topFunction(`/${brand}/${name?.modelName}/${c?.id}`)
                    }
                    className={`text-sm font-normal font-montserrat text-black ${
                      c?.id != cars?.engine[cars?.engine?.length - 1]?.id &&
                      "border-b border-black border-dashed"
                    }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                  >
                    {c?.title}
                  </p>
                ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full px-[3%]">
      {isModal && <FeedbackModal setIsModal={setIsModal} />}
      </div>

      <div className="w-w-[98%] mb-20 st:max-w-[1280px] mx-auto tl:gap-y-16 px-[3%] min-h-[313px] flex items-center lg:flex-row flex-col gap-y-4 justify-center border border-[#FF0000] shadow-xl gap-x-[36px]">
        <div className="lg:w-[80%]">
          <p className="text-base text-mainBlack font-medium font-montserrat text-justify">
            Мы дорожим своей репутацией и даем гарантию на все выполняемые виды
            работ. При возникновении гарантийного случая или иного вопроса
            касательно оказанных нами услуг мы максимально оперативно и
            комфортно для Вас решим возникшие вопросы.
          </p>
        </div>
        <div className="lg:w-[20%]">
          <MyButton
            callback={() => setIsModal(true)}
            title={"Связаться с нами"}
            class1={`h-[45px] lg:h-[53px] px-6`}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ModelDetails;
