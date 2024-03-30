import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import { useParams } from "react-router-dom";
import Title from "../components/ui/tag/title";
import Paragraph from "../components/ui/tag/paragraph";
import Eco from "../components/Eco";
import Stage1 from "../components/Stage1";
import Stage2 from "../components/Stage2";
import Transmission from "../components/Transmission";
import RcPlus from "../components/RcPlus";

const EcoPages = () => {
  const { brand_name, model_name, engine_id } = useParams();
  const [menu, setMenu] = useState({
    menu1: true,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
  });

  return (
    <Layout
      title={`Чип тюнинг ${brand_name}`}
      subtitle={`Обучение чип-тюнингу`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/about`}
    >
      <div className="md:w-[98%] mb-3 st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
        <Title>
          Чип тюнинг <p className="m-0 p-0 uppercase inline">{brand_name}</p>
        </Title>
      </div>

      <div className="md:w-[98%] gap-x-16 mb-20 st:max-w-[1280px] mx-auto gap-y-6 tl:gap-y-16 px-[1%] md:px-[3%] sl:px-0 sm:py-[20px] ol:gap-y-[60px]">
        {/* Head */}
        <div className="overflow-x-auto">
          <table className="mb-8 overflow-x-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-collapse border h-full ">
                <th
                  onClick={() =>
                    setMenu({
                      menu1: true,
                      menu2: false,
                      menu3: false,
                      menu4: false,
                      menu5: false,
                    })
                  }
                  className={`min-w-[114px] text-[16px] font-normal font-montserrat border cursor-pointer ${
                    menu.menu1 && "bg-mainRed"
                  } transition-all duration-300 ease-in`}
                >
                  <img src="/images/eco.svg" alt="" />
                </th>
                <th
                  onClick={() =>
                    setMenu({
                      menu1: false,
                      menu2: true,
                      menu3: false,
                      menu4: false,
                      menu5: false,
                    })
                  }
                  className={`min-w-[114px] text-[16px] font-normal font-montserrat border text-center h-full cursor-pointer ${
                    menu.menu2 && "bg-mainRed text-white"
                  } transition-all duration-300 ease-in`}
                >
                  Этап 1
                </th>

                <th
                  onClick={() =>
                    setMenu({
                      menu1: false,
                      menu2: false,
                      menu3: true,
                      menu4: false,
                      menu5: false,
                    })
                  }
                  className={`min-w-[114px] text-[16px] font-normal font-montserrat border text-center h-full cursor-pointer ${
                    menu.menu3 && "bg-mainRed text-white"
                  } transition-all duration-300 ease-in`}
                >
                  Этап 2
                </th>

                <th
                  onClick={() =>
                    setMenu({
                      menu1: false,
                      menu2: false,
                      menu3: false,
                      menu4: true,
                      menu5: false,
                    })
                  }
                  className={`min-w-[174px] text-[16px] font-normal font-montserrat border text-center h-full cursor-pointer ${
                    menu.menu4 && "bg-mainRed text-white"
                  } transition-all duration-300 ease-in`}
                >
                  Коробка передач
                </th>
                <th
                  onClick={() =>
                    setMenu({
                      menu1: false,
                      menu2: false,
                      menu3: false,
                      menu4: false,
                      menu5: true,
                    })
                  }
                  align="center"
                  className={`min-w-[114px] text-[16px] font-normal font-montserrat border cursor-pointer ${
                    menu.menu5 && "bg-mainRed"
                  } transition-all duration-300 ease-in`}
                >
                  <img src="/images/rcplus.svg" alt="" className="" />
                </th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Root stage */}
        {menu?.menu1 && <Eco id={engine_id} />}
        {menu?.menu2 && <Stage1 id={engine_id} />}
        {menu?.menu3 && <Stage2 id={engine_id} />}
        {menu?.menu4 && <Transmission id={engine_id} />}
        {menu?.menu5 && <RcPlus id={engine_id} />}
      </div>
    </Layout>
  );
};

export default EcoPages;
