import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import Title from "../components/ui/tag/title";
import { BASE_URL, instance } from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import MyRedButton from "../components/ui/button/red-button";
import Feedback2 from "../components/feedback2";

const ModelPage = () => {
  const [catalog, setCatalog] = useState([]);
  const navigate = useNavigate()
  const { id, slug } = useParams();
  const getAllCatalog = async () => {
    try {
      const { data } = await instance(`/auto-catalog/findByModel/${id}`);
      setCatalog(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCatalog();
  }, []);

  function formatNumber(number) {
    return new Intl.NumberFormat('ru-RU').format(number);
  }

  const sendNext = url => {
    navigate(url)
    window.scrollTo({top: 0})
  }
  return (
    <Layout
      title={`Exhaust systems`}
      subtitle={`Exhaust systems`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/systems/bmw`}
    >
      <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 py-[30px] ol:gap-y-[60px]">
        <Title>Выхлопные системы {slug}</Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
          {catalog?.map((c, idx) => (
            <div key={idx} className="flex flex-col gap-y-3 shadow-lg md:shadow-xl h-[510px] border">
              <img
                src={BASE_URL + c?.img}
                alt=""
                className="h-[276px] w-full"
              />
              <p className="p-[4%] text-mainRed text-[20px] font-medium">
                {c?.title}
              </p>
              <p className="px-[4%] py-[2%] text-mainBlack text-[20px] font-normal">
                {formatNumber(c?.price)} руб.
              </p>
              <MyRedButton
              callback={() => sendNext(`/systems/models/${c?.id}`)}
                title={`Подробнее`}
                class1={`max-w-[182px] my-[2%] ml-[4%]`}
              />
            </div>
          ))}
        </div>

        <Feedback2 />
      </div>
    </Layout>
  );
};

export default ModelPage;
