import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import Title from "../components/ui/tag/title";
import { BASE_URL, instance } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Feedback2 from "../components/feedback2";

const ExhaustSystems = () => {
  const [models, setModels] = useState([]);
  const navigate = useNavigate();
  const getAllModels = async () => {
    try {
      const { data } = await instance.get(`/auto-model/model`);
      setModels(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllModels();
  }, []);

  const sendNext = (url) => {
    navigate(url);
    window.scrollTo({ top: 0 });
  };

  return (
    <Layout
      title={`Exhaust systems`}
      subtitle={`Exhaust systems`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/systems`}
    >
      <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 py-[30px] ol:gap-y-[60px]">
        <Title>Выхлопные системы</Title>
        <div className="w-full md:h-[549px]">
          <img
            src="/images/Rectangle 73.png"
            alt="image/systems"
            className="w-full h-full"
          />
        </div>

        <p className="text-sm sm:text-base font-montserrat text-black font-normal">
          Изготавливаем даунпайпы и выхлопные системы из нержавеющей стали aisi
          304 и 321. Можем <br className="sm:flex hidden" /> изготовить
          абсолютно на любое транспортное средство.
        </p>
        <p className="text-sm sm:text-base font-montserrat text-black font-normal">
          Дополнительно у нас можно произвести:
        </p>
        <ul className="text-sm sm:text-base font-montserrat text-black font-normal list-disc ml-[20px] space-y-2">
          <li>Удаление катализаторов</li>
          <li>Удаление сажевых фильтров</li>
          <li>Замена катализаторов на неоригинальные / спортивные</li>
          <li>
            Изготовить даунпайп с неоригинальным / спортивным{" "}
            <br className="sm:flex hidden" />
            катализатором
          </li>
          <li>Произвести тюнинг выхлопной системы</li>
          <li> Произвести ремонт выхлопной системы</li>
        </ul>
        <p className="text-sm sm:text-base font-montserrat text-black font-normal list-disc">
          В данный момент у нас есть даунпайпы практически на все BMW с моторами
          N47, B47, M57, N57, B57, <br className="sm:flex hidden" />
          N20, B48, B58, N63, S63.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {models?.map((c, idx) => (
            <div
              key={idx}
              onClick={() => sendNext(`/systems/${c?.title}/${c?.id}`)}
              className="flex flex-col cursor-pointer items-center gap-y-4 gap-x-4 justify-center h-[189px] shadow-xl sm:max-w-[305px] border rounded-md"
            >
              <img
                src={BASE_URL + c?.img}
                alt=""
                className="w-[86px] h-[86px]"
              />
              <p className="font-semibold md:font-bold text-xl md:text-2xl font-montserrat">
                {c?.title}
              </p>
            </div>
          ))}
          
        </div>

        <Feedback2 />
      </div>
    </Layout>
  );
};

export default ExhaustSystems;
