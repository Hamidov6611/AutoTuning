import React, { useEffect, useState } from "react";
import MyRedButton from "./ui/button/red-button";
import MyButton from "./ui/button/button";
import { BASE_URL, instance } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import MobileWork from "./MobileWork";

const Work = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await instance.get(`/work?page=1&limit=3`);
      setData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toWork = () => {
    navigate(`/works`);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 md:gap-y-10 mb-6 tl:mb-20 px-[3%] sl:px-0">
      <p className="text-[28px] md:text-[40px] text-center text-mainBlack font-medium font-montserrat">
        Примеры работ
      </p>
      <div className="w-full hidden sm:grid grid-cols-1 md:grid-cols-2 tl:grid-cols-3 gap-x-[20px] md:gap-y-6 gap-y-4">
        {data?.map((c, idx) => (
          <div key={idx} className="flex flex-col gap-y-4">
            <img src={BASE_URL + c.img} alt={c.title} className="h-[350px] sm:h-[401px]" />
            <div className="flex flex-col gap-y-4 h-[230px]">
              <p className="text-base md:text-[20px] font-medium font-montserrat text-mainBlack line-clamp-2">
                {c.title}
              </p>
              <p
                className="line-clamp-[7]"
                dangerouslySetInnerHTML={{
                  __html: c?.description,
                }}
              />
            </div>
            <MyRedButton
              callback={() => {
                navigate(`/work/${c?.id}`);
                window.scrollTo({ top: 0 });
              }}
              title={"Смотреть больше"}
              class1={`mx-auto sm:mx-0 sm:mr-auto w-[270px] md:w-[305px]`}
            />
          </div>
        ))}
      </div>
      <MobileWork work={data} />
      <div className="flex w-full sm:justify-start justify-center">
        <MyButton
          callback={toWork}
          title={"Смотреть больше"}
          class1={`w-[270px] md:w-[305px] h-[50px] sl:h-[75px] rounded-[5px] mx-auto mt-12`}
        />
      </div>
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
