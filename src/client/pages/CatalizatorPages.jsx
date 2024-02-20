import React from "react";
import { Layout } from "../components";
import Title from "../components/ui/tag/title";
import Paragraph from "../components/ui/tag/paragraph";

const CatalizatorPages = () => {
  return (
    <Layout
      title={`Отключение катализатора`}
      subtitle={`Отключение катализатора`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/about`}
    >
      <div className="w-[98%] mb-20 st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
        <Title>Отключение катализатора</Title>

        <div className="flex lg:flex-row flex-col gap-x-8 gap-y-4 lg:items-center">
          <div className="lg:w-1/2 w-full">
            <img
              src="/images/catalizator (1).png"
              alt="catalizator (1).png"
              className="w-full lg:max-w-[630px] h-auto lg:h-[440px]"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-y-4">
            <Paragraph>
              Современные автомобили оснащены устройством для очистки выхлопных
              газов – катализатором. На улицах европейских городов
              автомобиль без катализатора долго не поездит, поскольку он не
              соответствует европейским стандартам чистоты воздуха.Хотя будучи
              гражданином Украины вы можете без проблем ездить за границей на
              своем авто без катализатора. Ведь вам не приходится проходить
              ихний  техосмотр, который для них является регулярно обязательным.
            </Paragraph>
            <Paragraph>
              В Украине менее жёсткие требования. И действуют нормы токсичности
              выхлопа Евро-2. Они позволяют ездить без катализатора. Поэтому
              часто рекомендуется удаление катализатора, в случае его
              неисправности. Если есть признаки повышенной забитости
              катализатора, катализатор лучше отключить в прошивке и снять с
              машины.
            </Paragraph>
          </div>
        </div>

        <p className="text-center font-medium font-montserrat text-[20px] md:text-[28px] text-mainBlack">
          Устройство катализатора и его функции
        </p>
        <div>
          <img
            src="/images/catalizator (2).png"
            alt="catalizator (2).png"
            className="w-full lg:max-w-[633px] h-auto lg:h-[345px]"
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <Paragraph>
            1. Лябда-зонд 1 (он же датчик кислорода ДК1) до катализатора.
            Предназначен для контроля выхлопных газов.{" "}
            <br className="lg:flex hidden" /> Обеспечивает нормы Евро-2.
          </Paragraph>
          <Paragraph>
            2.  Лябда-зонд 2 или ДК2 после катализатора. Предназначен для
            контроля состояния катализатора.
            <br className="lg:flex hidden" /> Обеспечивает нормы выхлопа Евро-3,
            Евро-4, Евро-5. Второй ДК можно отключить в прошивке, после снять
            катализатор. <br className="lg:flex hidden" />
            Тем самым автомобиль будет переведен на нормы Евро-2.
          </Paragraph>
          <Paragraph>
            4. Катлизатор. Если он забит или выскакивают ошибка по кализатору
            или второму лямбда-зонду (ДК2), мы его
            <br className="lg:flex hidden" /> отключим. Дальше катализатор мозно
            вырезать, приварив на его место примую трубу или стронгер
            <br className="lg:flex hidden" />
            (пламегаситель) вместо катализатора.
          </Paragraph>
        </div>
        <div>
          <img
            src="/images/catalizator (3).png"
            alt="catalizator (2).png"
            className="w-full lg:max-w-[633px] h-auto lg:h-[406px]"
          />
        </div>

        <div className="flex lg:flex-row flex-col gap-x-8 gap-y-4 lg:items-center">
          <div className="lg:w-1/2 w-full flex flex-col gap-y-4">
            <img
              src="/images/catalizator (4).png"
              alt="catalizator (1).png"
              className="w-full lg:max-w-[630px] h-auto lg:h-[372px]"
            />
            <p className="text-center font-medium font-montserrat text-[20px] md:text-[24px] text-mainBlack">
              Рабочий катализатор
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-y-4">
            <img
              src="/images/catalizator (5).png"
              alt="catalizator (1).png"
              className="w-full lg:max-w-[630px] h-auto lg:h-[372px]"
            />
          <p className="text-center font-medium font-montserrat text-[20px] md:text-[24px] text-mainBlack">
            Забитый, оплавленный катализатор
          </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CatalizatorPages;
