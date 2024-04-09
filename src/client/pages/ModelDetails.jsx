import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL, instance } from "../../api/axios";
import Title from "../components/ui/tag/title";
import { TbArrowBackUpDouble } from "react-icons/tb";
import MyButton from "../components/ui/button/button";
import FeedbackModal from "../components/feedback-modal";
import { parsing_cars } from "../../helpers/parsing_cars";

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
        const { data } = await instance.get(`/parsing-cars/${id}`);
        let arr = parsing_cars?.filter((c) => c.id == id);
        setCars({
          ...cars,
          model: data?.parsing_make_id,
          base_image: arr[0]?.url,
        });
      }
      if (type == carsType[1]) {
        const { data } = await instance.get(`parsing-car-makes/${depId}`);
        setCars({
          ...cars,
          year: data?.parsing_car_makes_years_id,
          engine: [],
        });
        console.log(data);
      }
      if (type == carsType[2]) {
        const { data } = await instance.get(
          `/parsing-car-makes-years/${depId}`
        );

        const enginesByType = data?.parsing_engine_id?.reduce((acc, engine) => {
          // Agar ushbu type_engine uchun ma'lumot allaqachon mavjud bo'lsa, shunchaki yangi engine qo'shish
          const existingType = acc.find(
            (item) => item.name === engine.type_engine
          );
          if (existingType) {
            existingType.arr.push(engine);
          } else {
            // Aks holda, yangi ob'ekt qo'shish
            acc.push({
              name: engine.type_engine,
              arr: [engine],
            });
          }
          return acc;
        }, []);
        setCars({
          ...cars,
          engine: JSON.parse(JSON.stringify(enginesByType, null, 2)),
        });
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

  console.log(cars);
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
                onClick={() => {
                  getData(carsType[1], c?.id);
                  setName({ ...name, modelName: c?.name });
                  window.scrollTo({ top: 0 });
                }}
                key={idx}
                className={`text-sm font-normal font-montserrat text-black ${
                  c?.id != cars?.model[cars?.model?.length - 1]?.id &&
                  "border-b border-black border-dashed"
                }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
              >
                {c?.name}
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
                  <div
                    onClick={() => {
                      getData(carsType[2], c?.id);
                      setName({ ...name, yearName: c?.years });
                    }}
                    key={idx}
                    className={`text-sm font-normal font-montserrat text-black ${
                      c?.id != cars?.year[cars?.year?.length - 1]?.id &&
                      "border-b border-black border-dashed"
                    }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                  >
                    {c?.years}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* right */}
        {cars?.engine?.length > 0 && (
          <div className="w-full flex flex-col">
            {/* Hero */}
            <div className="w-full h-[79px] bg-black/70 rounded-t-[10px] flex items-center justify-between px-[20px]">
              <div className="flex flex-col">
                <p className="font-semibold md:font-bold text-[18px] flex items-center md:text-[16px] text-[#CCC]">
                  {name.yearName}
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 mt-[1.5px]"
                  >
                    <path
                      d="M7.81106 6.56386L1.02225 0.166377C0.908977 0.0595778 0.758483 -3.16537e-07 0.601985 -3.23378e-07C0.445487 -3.30218e-07 0.294995 0.0595778 0.18172 0.166377L0.174411 0.173606C0.119307 0.22538 0.0754294 0.2877 0.0454459 0.356775C0.0154624 0.425849 4.54971e-07 0.500235 4.51685e-07 0.575406C4.48399e-07 0.650577 0.0154624 0.724963 0.0454459 0.794038C0.0754294 0.863113 0.119307 0.925433 0.174411 0.977207L6.56732 7.0012L0.17441 13.0228C0.119306 13.0746 0.0754289 13.1369 0.0454453 13.206C0.0154618 13.275 -1.06685e-07 13.3494 -1.0997e-07 13.4246C-1.13256e-07 13.4998 0.0154618 13.5741 0.0454453 13.6432C0.0754288 13.7123 0.119306 13.7746 0.17441 13.8264L0.18172 13.8336C0.294994 13.9404 0.445486 14 0.601984 14C0.758482 14 0.908976 13.9404 1.02225 13.8336L7.81106 7.43614C7.87077 7.37988 7.9183 7.31221 7.95078 7.23724C7.98325 7.16227 8 7.08156 8 7C8 6.91844 7.98325 6.83773 7.95078 6.76276C7.9183 6.68779 7.87077 6.62012 7.81106 6.56386Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                </p>
                <p className="font-semibold md:font-bold text-[18px] md:text-[16px] text-[#CCC]">
                  {cars?.engine[0]?.name}
                </p>
              </div>
              <div className="w-[50px] h-[50px]">
                <img
                  src={BASE_URL + cars.base_image}
                  alt={brand}
                  className="w-full h-full object-scale-down"
                />
              </div>
            </div>
            {/* Body */}
            <div className="border border-black rounded-b-[10px] h-auto] flex flex-col gap-y-3 py-[20px]">
              {cars?.engine?.length > 0 &&
                cars?.engine[0]?.arr?.map((c, idx) => (
                  <div className="flex flex-col px-[20px]">
                    <p
                      key={idx}
                      role="button"
                      onClick={() =>
                        topFunction(`/${brand}/${name?.modelName}/${c?.id}`)
                      }
                      className={`text-sm font-normal font-montserrat text-black ${
                        c?.id != cars?.engine[cars?.engine?.length - 1]?.id &&
                        "border-b border-black border-dashed"
                      } pb-1 px-4 cursor-pointer flex justify-between transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                    >
                      <span>{c?.name}</span>
                      <span>{c?.engine_hp}</span>
                    </p>
                  </div>
                ))}
              {cars?.engine?.length > 0 &&
                cars?.engine?.map(
                  (c, idx) =>
                    idx > 0 && (
                      <div className="flex flex-col">
                        <p
                          key={idx}
                          role="button"
                          onClick={() =>
                            topFunction(`/${brand}/${name?.modelName}/${c?.id}`)
                          }
                          className={`text-[16px] font-normal font-montserrat text-[#CCC] py-3 ${
                            c?.id !=
                              cars?.engine[cars?.engine?.length - 1]?.id &&
                            "border-b border-black border-dashed"
                          } px-[20px] cursor-pointer flex justify-between bg-black/70 text-[#CCC] transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                        >
                          <span className="px-4 font-semibold">{c?.name}</span>
                        </p>
                        {c?.arr?.map((a) => (
                          <div className="px-[20px]">
                            <p
                              key={idx}
                              role="button"
                              onClick={() =>
                                topFunction(
                                  `/${brand}/${name?.modelName}/${a?.id}`
                                )
                              }
                              className={`text-sm font-normal font-montserrat text-black pt-3 ${
                                a?.id !=
                                  cars?.engine[cars?.engine?.length - 1]?.id &&
                                "border-b border-black border-dashed"
                              }   pb-1 px-4 cursor-pointer flex justify-between transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                            >
                              <span>{a?.name}</span>
                              <span>{a?.engine_hp}</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    )
                )}
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
                    setName({ ...name, modelName: c?.name });
                    setIsModel({ m1: false, m2: true, m3: false });
                  }}
                  key={idx}
                  className={`text-sm font-normal font-montserrat text-black ${
                    c?.id != cars?.model[cars?.model?.length - 1]?.id &&
                    "border-b border-black border-dashed"
                  }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                >
                  {c?.name}
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
                      setName({ ...name, engine_name: c?.name });
                      setIsModel({ m1: false, m2: false, m3: true });
                    }}
                    key={idx}
                    className={`text-sm font-normal font-montserrat text-black ${
                      c?.id != cars?.year[cars?.year?.length - 1]?.id &&
                      "border-b border-black border-dashed"
                    }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                  >
                    {c?.name}
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
              {cars?.engine?.map((c, idx) => (
                <p
                  onClick={() =>
                    topFunction(`/${brand}/${name?.modelName}/${c?.id}`)
                  }
                  className={`text-sm font-normal font-montserrat text-black ${
                    c?.id != cars?.engine[cars?.engine?.length - 1]?.id &&
                    "border-b border-black border-dashed"
                  }   pb-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#4859b6] `}
                >
                  {c?.id}
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
