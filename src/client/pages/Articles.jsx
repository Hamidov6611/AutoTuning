import React from "react";
import { Layout } from "../components";
import Title from "../components/ui/tag/title";
import Feedback2 from "../components/feedback2";
import Paragraph from "../components/ui/tag/paragraph";

const ArticlesPages = () => {
  return (
    <Layout
      title={`Статьи`}
      subtitle={`Статьи`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/about`}
    >
      <div className="w-[98%] mb-20 st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
        <Title>Статьи</Title>

        <div className="flex gap-x-7 lg:flex-row flex-col gap-y-4">
          <img
            src="/images/ask (1).png"
            alt="ask1"
            className="w-auto md:w-[522px]"
          />
          <div className="flex flex-col gap-y-3">
            <p className="font-montserrat font-medium text-xl md:text-[28px] text-black">
              Как увеличить мощность автомобиля?
            </p>
            <Paragraph>
              Чип-тюнинг — это модификация автомобильной электроники, основная
              цель <br className="lg:flex hidden" /> которой увеличение
              скоростных и мощностных характеристик автомобиля. В
              <br className="lg:flex hidden" /> частных случаях, например...
            </Paragraph>
          </div>
        </div>

        <div className="flex gap-x-7 lg:flex-row flex-col gap-y-4">
          <img
            src="/images/ask (2).png"
            alt="ask1"
            className="w-auto md:w-[522px]"
          />
          <div className="flex flex-col gap-y-3">
            <p className="font-montserrat font-medium text-xl md:text-[28px] text-black">
              Как меняется расход топлива после установки
              <br className="lg:flex hidden" /> тюнинг модуля
            </p>
            <Paragraph>
              Расход топлива, достаточно субъективное понятие и может включать в
              себя множество малозаметных, с первого взгляда факторов. Выводы по
              поводу расхода топлива, в первую очередь делаются на основе
              информа...
            </Paragraph>
          </div>
        </div>

        <div className="flex gap-x-7 lg:flex-row flex-col gap-y-4">
          <img
            src="/images/ask (3).png"
            alt="ask1"
            className="w-auto md:w-[522px]"
          />
          <div className="flex flex-col gap-y-3">
            <p className="font-montserrat font-medium text-xl md:text-[28px] text-black">
              Почему автомобили не подвергают чип-
              <br className="lg:flex hidden" />
              тюнингу на заводах изготовителях?
            </p>
            <Paragraph>
              Времена, когда автомеханик «вручную» производил манипуляции для
              увеличения
              <br className="lg:flex hidden" /> мощности автомобиля, давно
              прошли. Уже не новость, что почти каждый{" "}
              <br className="lg:flex hidden" />
              современный автомобиль, оснащён большим количеством электронных
              чипов,
              <br className="lg:flex hidden" /> которые нужны для обра...
            </Paragraph>
          </div>
        </div>
        <div className="flex gap-x-7 lg:flex-row flex-col gap-y-4">
          <img
            src="/images/ask (4).png"
            alt="ask1"
            className="w-auto md:w-[522px]"
          />
          <div className="flex flex-col gap-y-3">
            <p className="font-montserrat font-medium text-xl md:text-[28px] text-black">
              Чип-тюнинг атмосферных двига
            </p>
            <Paragraph>
              Описывая свой автомобиль, мы очень часто используем термины
              «дизельный» или <br className="lg:flex hidden" /> «бензиновый
              двигатель», кто-то говорит о том, что у него турбированный движок.
              <br className="lg:flex hidden" /> Словосочетание «атмосферный
              двигатель» не так распростра...
            </Paragraph>
          </div>
        </div>
        <Feedback2 />
      </div>
    </Layout>
  );
};

export default ArticlesPages;
