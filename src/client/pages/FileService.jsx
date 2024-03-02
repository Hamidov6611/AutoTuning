import React from "react";
import { Layout } from "../components";
import Title from "../components/ui/tag/title";
import Feedback2 from "../components/feedback2";

const FileService = () => {
  return (
    <Layout
      title={`Файл сервис`}
      subtitle={`Файл сервис`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/about`}
    >
      <div className="w-[98%] mb-20 st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
        <Title>Файл сервис</Title>
        <div>
          <img src="/images/image 23.png" alt="" className="w-auto h-auto" />
        </div>

        <div className="flex flex-col gap-y-3 w-full text-base text-mainBlack font-montserrat font-normal">
          <p>
            Наши инженеры - калибровщики могут подготовить стандартные файлы
            уровней STAGE 1 / STAGE 2 / STAGE 3 или любой набор опций из <br className="lg:flex hidden"/>
            предлагаемого списка:
          </p>
          <ul className="space-y-3">
            <li>- Тюнинг программы увеличения мощности мотора - stage1/stage2/stage3 *</li>
            <li>- Тюнинг программы АКПП и роботизированных коробок передач уровня <br className="lg:flex hidden"/> - stage1/stage2/stage3 *</li>
            <li>- Тюнинг программы для экономии топлива - ECO tuning *</li>
            <li>- Отключение сажевых фильтров - DPF/FAP off</li>
            <li>- Отключение системы - EGR off</li>
            <li>- Отключение катализаторов / Перевод автомобиля на Евро-2 - Cat off</li>
            <li>- Отключение ошибок - DTC off</li>
            <li>- Отключение системы - AdBlue/SCR off</li>
            <li>- Отключение режима прогрева катализаторов - Hot start / Cold start</li>
            <li>- Отключение иммобилайзера - Immo off</li>
            <li>- Отключение заслонок во впускном коллекторе - Swirl/Flap off</li>
            <li>- Отключение системы Старт / Стоп - Start/stop off</li>
            <li>- Активация старта с оборотов - Launch Control</li>
            <li>- Активация прострелов при сбросе газа - Pop & Bang / Popcorn</li>
            <li>- Снятие ограничения скорости - Vmax</li>
            <li>- Разработка индивидуального решения для вашего сервиса</li>
            <li>- Перенос ваших калибровок в другой софт</li>
            <li>* - доступно только для дилеров нашей компании либо постоянных клиентов</li>
            <li>Время подготовки стандартного файла составляет от 1 до 3 часов. При добавлении определенного количества опций <br className="lg:flex hidden"/> или выполнение индивидуального заказа срок может увеличится до 5 часов.</li>
            <li>Также мы проводим обучение в подборе необходимого вам оборудования и работе на нем. Для дилеров нашей <br className="lg:flex hidden"/> компании обучение бесплатное.</li>
            <li>Будем рады сотрудничеству.</li>
          </ul>
        </div>

        <Feedback2 />
      </div>
    </Layout>
  );
};

export default FileService;
