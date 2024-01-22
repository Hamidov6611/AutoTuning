import React from "react";
import MyRedButton from "./ui/button/red-button";
import MyButton from "./ui/button/button";

const Work = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col gap-y-6 md:gap-y-10 mb-6 md:mb-20">
      <p className="text-[28px] md:text-[40px] text-center text-mainBlack font-medium font-montserrat">
        Примеры работ
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-[20px] gap-y-4">
        {data?.map((c, idx) => (
          <div key={idx} className="flex flex-col gap-y-4">
            <img src={c.img} alt={c.title} className="h-[401px]" />
            <div className="flex flex-col gap-y-4 h-[230px]">
              <p className="text-base md:text-[20px] font-medium font-montserrat text-mainBlack line-clamp-2">
                {c.title}
              </p>
              <p className="line-clamp-[7]">{c.desc}</p>
            </div>
            <MyRedButton
              title={"Смотреть больше"}
              class1={`mr-auto w-[270px] md:w-[305px]`}
            />
          </div>
        ))}
      </div>
      <MyButton title={"Смотреть больше"} class1={`w-[270px] md:w-[305px] mx-auto mt-12`} />
    </div>
  );
};

export default Work;

const data = [
  {
    id: 1,
    img: "/images/wok1.png",
    title: "Чип-тюнинг BMW 320d (G20, B47)",
    desc: "Чип-тюнинг BMW 320d (G20, B47) Чип-тюнинг BMW 320d (G20, B47) за 2 часа без разбора блока управления и по адекватной цене! Предлагаем увеличение мощности Вашей 320d (G20) с двигателем B47 в Москве: STAGE 1 - оптималный вариант: только программное увеличение мощности. Делается без разбора блока управления.",
  },
  {
    id: 1,
    img: "/images/work2.png",
    title:
      "Чип-тюнинг Land Rover Discovery Sport 2.0 TD4 от Reborn Technologies",
    desc: "Оживить новенький Land Rover Discovery Sport 2.0 TD4 при помощи полноценного чип-тюнинга. Читайте подробнее о увеличении мощности на дизельном Land Rover Discovery Sport 2.0 TD4...",
  },
  {
    id: 1,
    img: "/images/work3.png",
    title: "Чип-тюнинг Infiniti FX30d (S51) от Reborn Technologies",
    desc: "Владельцам Infiniti FX30d (QX70d) часто не хватает мощности и они обращаются в нашу компанию для чип-тюнинга своих автомобилей. Читайте подробнее о увеличении мощности на дизельном Infiniti FX30d (QX70d)...",
  },
];
