import React, { useState } from "react";
import { Layout } from "../components";
import Loader from "../components/ui/loader/loader";
import Title from "../components/ui/tag/title";
import Feedback2 from "../components/feedback2";

const About = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Layout
      title={`Обучение чип-тюнингу`}
      subtitle={`Обучение чип-тюнингу`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/about`}
    >
      <div className="w-[98%] mb-20 st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
        <Title>Обучение чип-тюнингу</Title>

        {/* Section 1 */}
        <div className="flex lg:flex-row flex-col justify-between lg:items-start gap-x-4 md:gap-x-12 gap-y-4">
          <div className="lg:w-[50%] text-justify w-full flex flex-col gap-y-3 lg:gap-y-8 text-base font-medium font-montserrat text-mainBlack">
            <p>
              Проводим бесплатное обучение для будущих дилеров и партнеров нашей
              компании.
            </p>
            <p>Разберем:</p>
            <p>
              1. Варианты оборудования, их возможности, плюсы и минусы. Если ваш
              сервис специализируется на конкретной марке автомобилей, то
              подберем максимально устраиваемое вас оборудование.
            </p>
            <p>
              2. Варианты чтения и записи ЭБУ. <br /> - Чтение / запись через
              диагностический разъем автомобиля - OBD2 <br /> - Чтение / запись
              через прямое подключение к блоку - BENCH <br /> - Чтение / запись
              через со вскрытием блока - BOOT
            </p>
            <p>
              3. Какие области можно вычитать из ЭБУ. Что нужно для внесения
              изменений в программу и для клонирования ЭБУ.
            </p>
          </div>
          <div className="lg:w-[50%] w-full">
            <img
              src="/images/image 20.png"
              alt=""
              className="w-full h-auto lg:h-[450px]"
            />
          </div>
        </div>

        {/* Section 2 */}

        <Feedback2 text={"на обучение"} />
      </div>
    </Layout>
  );
};

export default About;
