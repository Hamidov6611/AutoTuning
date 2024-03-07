import React from "react";
import { Layout } from "../components";
import Title from "../components/ui/tag/title";
import Paragraph from "../components/ui/tag/paragraph";
import Feedback2 from "../components/feedback2";

const CommentPages = () => {
  return (
    <Layout
      title={`Описание`}
      subtitle={`Описание`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/about`}
    >
      <div className="w-[98%] mb-20 st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
        <Title>Описание</Title>
        <Paragraph>
          RACECODE – это индивидуальные решения для тюнинга Вашего автомобиля.
          Изготовление высокопроизводительных систем впуска и выпуска, сборка
          форсированных двигателей, создание индивидуальных программ управления
          двигателем. Установка аэродинамических элементов внешнего стайлинга от
          ведущих мировых производителей – мы имеем собственный малярный цех и
          современное оборудование. Мультимедиа и дизайн салона – как
          неотъемлемая часть комплексного тюнинга. Техническое обслуживание,
          расширенная диагностика и весь спектр услуг по ремонту автомобилей.
        </Paragraph>

        <div className="flex gap-x-[55px] lg:flex-row flex-col gap-y-4 items-center">
          <img
            src="/images/com1.png"
            alt="ask1"
            className="w-auto md:w-[630px] h-auto sm:h-[388px]"
          />
          <div className="flex flex-col gap-y-3">
            <Paragraph>
              Настройка блока управления двигателем доработанного автомобиля
              проводится на мощностном стенде. Мы разрабатываем уникальную
              прошивку, адаптированную под специфику конфигурации силового
              агрегата. Даже чип-тюнинг серийного автомобиля в нашем исполнении
              не сводится просто к записи измененного файла. Мы проводим
              комплексную диагностику всех параметров работы двигателя на новой
              прошивке и корректируем её под используемое топливо, измененные
              системы впуска - выпуска, климатические условия и особенности стиля
              вождения для данного типа коробки передач.
            </Paragraph>
          </div>
        </div>

        <Paragraph>
          Наша специализация включает автомобили марок Audi, VW, Seat, Skoda,
          Porsche, Lamborghini, Bentley, BMW, Mercedes и Ford. Однако мы также
          предоставляем индивидуальные решения и разработки для транспортных
          средств других марок, включая мотоциклы. Мы предлагаем решения для
          широкого спектра автомобилей, от малолитражек старых моделей до
          высокопроизводительных суперкаров. Благодаря нашему научно-
          производственному подходу и собственным разработкам, мы можем
          предложить индивидуальный подход к каждому клиенту, сочетая его с
          антикризисными ценами.
        </Paragraph>

        <Paragraph>
          Racecode - это одна из немногих компаний, предлагающих полный спектр
          услуг. Начиная с пост-дилерского технического обслуживания автомобилей
          и заканчивая созданием комплексных тюнинг-проектов с применением
          преимущественно собственных российских разработок и технических
          решений. Наш тюнинг-центр располагает площадью в 2000 кв.м. и оснащен
          самым современным и лицензионным оборудованием для ремонта,
          обслуживания, диагностики и чип-тюнинга автомобилей.
        </Paragraph>

        <div className="flex lg:flex-row flex-col gap-y-8">
          <div className="w-full lg:w-2/3 flex flex-col gap-y-8">
            <p className="text-base sm:text-[18px] lg:text-[20px] font-montserrat font-normal">
              <b>Чем мы отличаемся</b> от многих других компаний, предлагающих
              подобные услуги?
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-x-4">
                <svg
                  width="30"
                  height="1"
                  viewBox="0 0 30 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 sm:flex hidden"
                >
                  <line y1="0.5" x2="30" y2="0.5" stroke="#9B1616" />
                </svg>
                Мы не перепродаем, а сами разрабатываем и производим
              </li>
              <li className="flex items-center gap-x-4">
                <svg
                  width="30"
                  height="1"
                  viewBox="0 0 30 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 sm:flex hidden"
                >
                  <line y1="0.5" x2="30" y2="0.5" stroke="#9B1616" />
                </svg>
                У нас сплоченная команда и нет текучки кадров
              </li>
              <li className="flex items-center gap-x-4">
                <svg
                  width="30"
                  height="1"
                  viewBox="0 0 30 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 sm:flex hidden"
                >
                  <line y1="0.5" x2="30" y2="0.5" stroke="#9B1616" />
                </svg>
                Рабочая площадь — 2000 кв.м. и самое современное и лицензионное
                оборудование
              </li>
              <li className="flex items-center gap-x-4">
                <svg
                  width="30"
                  height="1"
                  viewBox="0 0 30 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 sm:flex hidden"
                >
                  <line y1="0.5" x2="30" y2="0.5" stroke="#9B1616" />
                </svg>
                Мы не задираем цену и готовы предложить разные решения
              </li>
              <li className="flex items-center gap-x-4">
                <svg
                  width="30"
                  height="1"
                  viewBox="0 0 30 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 sm:flex hidden"
                >
                  <line y1="0.5" x2="30" y2="0.5" stroke="#9B1616" />
                </svg>
                Мы отвечаем за свою работу, для нас репутация важнее сиюминутной
                выгоды
              </li>
              <li className="flex items-center gap-x-4">
                <svg
                  width="30"
                  height="1"
                  viewBox="0 0 30 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 sm:flex hidden"
                >
                  <line y1="0.5" x2="30" y2="0.5" stroke="#9B1616" />
                </svg>
                 Мы любим автомобили и свое дело!
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 flex gap-y-6 gap-x-6 flex-col">
            <img
              src="/images/com2.png"
              alt="image"
              className="h-[237px] lg:w-full"
            />
            <img
              src="/images/com3.png"
              alt="image"
              className="h-[237px] lg:w-full"
            />
          </div>
        </div>

        <Feedback2 />
      </div>
    </Layout>
  );
};

export default CommentPages;
