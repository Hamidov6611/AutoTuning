import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import { useParams } from "react-router-dom";
import Title from "../components/ui/tag/title";
import Paragraph from "../components/ui/tag/paragraph";

const EcoPages = () => {
  const { brand_name, model_name, engine_id } = useParams();

  return (
    <Layout
      title={`Чип тюнинг ${brand_name}`}
      subtitle={`Обучение чип-тюнингу`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/about`}
    >
      <div className="w-[98%] mb-3 st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
        <Title>
          Чип тюнинг <p className="m-0 p-0 uppercase inline">{brand_name}</p>
        </Title>
      </div>

      <div className="w-[98%] gap-x-16 mb-20 st:max-w-[1280px] mx-auto gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[20px] ol:gap-y-[60px]">
        <table className="mb-8">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4 border-collapse border h-full border-[#1D1D1D] ">
              <th className="min-w-[114px] text-[16px] font-normal font-montserrat border hover:bg-mainRed hover:text-white transition-all duration-300 ease-in">
                <img src="/images/eco.svg" alt="" />
              </th>
              <th className="min-w-[114px] text-[16px] font-normal font-montserrat border text-center h-full hover:bg-mainRed hover:text-white transition-all duration-300 ease-in">
                Этап 1
              </th>

              <th className="min-w-[114px] text-[16px] font-normal font-montserrat border text-center h-full hover:bg-mainRed hover:text-white transition-all duration-300 ease-in">
                Этап 2
              </th>

              <th className="min-w-[174px] text-[16px] font-normal font-montserrat border text-center h-full hover:bg-mainRed hover:text-white transition-all duration-300 ease-in">
                Коробка передач
              </th>
              <th
                align="center"
                className="min-w-[114px] text-[16px] font-normal font-montserrat border hover:bg-mainRed hover:text-white transition-all duration-300 ease-in"
              >
                <img src="/images/rcplus.svg" alt="" />
              </th>
            </tr>
          </thead>
        </table>
        <div className="w-full flex justify-between gap-x-6">
          <div className="w-[55%] grid grid-cols-4 gap-x-3 h-[40.39px]">
            <div className="h-full">
              <p className="text-base font-normal font-montserrat text-[#56B2E7]">
                Больше <br />
                информации
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] bg-white px-3 flex items-center justify-center">
              <Paragraph>Оригинал</Paragraph>
            </div>
            <div className="border h-full border-[#1D1D1D] bg-white px-3 flex items-center justify-center">
              <Paragraph>После тюнинга</Paragraph>
            </div>
            <div className="border h-full border-[#1D1D1D] bg-white px-3 flex items-center justify-center">
              <Paragraph>После тюнинга</Paragraph>
            </div>
          </div>
          <div className="flex w-[40%] bg-black h-[212px]"></div>
        </div>
      </div>
    </Layout>
  );
};

export default EcoPages;
