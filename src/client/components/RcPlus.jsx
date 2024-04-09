import React, { useEffect, useState } from "react";
import { instance } from "../../api/axios";
import FeedbackModal from "./feedback-modal";
import MyButton from "./ui/button/button";
import NoContent from "./ui/no-content";

const RcPlus = ({ id }) => {
  const [eco, setEco] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const getEco = async (id) => {
    try {
      const { data } = await instance.get(`/parsing-cars-tunings/${id}`);
      setEco(data?.tuning_statistic_id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const { data } = await instance.get(`/parsing-cars-engines/${id}/`);
      let arr = data?.tuning_id?.filter((c) => c.name == "RC +");
      console.log(data);
      getEco(arr[0]?.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);
  console.log(eco);
  return (
    <div className="flex flex-col w-full gap-y-12 md:gap-y-40">
      <div className="w-full flex gap-y-12 md:flex-row flex-col justify-between md:gap-x-6">
        <div className="md:w-[60%] flex flex-col gap-y-4">
          <div className="w-full border flex flex-col gap-y-4 p-3">
            <p className="text-[16px] font-normal text-[#000] font-montserrat">
              Мы разработали пакет опций RC+ для предоставления нашим клиентам
              непревзойденного <br className="lg:flex hidden" /> водительского
              опыта. Добавляя новый программный код в исходную систему
              управления <br className="lg:flex hidden" />
              двигателем, мы теперь можем программировать новые функции, такие
              как контроль <br className="lg:flex hidden" />
              запуска, переключение без сцепления, антикражный режим и многое
              другое. Еще больше <br className="lg:flex hidden" />
              удовольствия за рулем для тех, кто может справиться с этим.
            </p>
            {/* <p
              className="text-[16px] font-normal text-[#56B2E7] font-montserrat"
              dangerouslySetInnerHTML={{
                __html: eco?.list,
              }}
            /> */}
          </div>
          <div className="min-w-3 border py-3 pl-2 mr-auto pr-6 md:pr-24">
            <p className="font-semibold font-montserrat text-base">
              Доступные опции:
            </p>
          </div>
          <p
            className="text-base font-montserrat border-b font-medium pb-2"
          >Деактивация системы старта-стоп</p>
          <p
            className="text-base font-montserrat font-medium"
          >Эта функция гарантирует, что ваш автомобиль не будет автоматически выключать двигатель при остановке. Незаменимая опция для гонщиков!</p>
        </div>
      </div>

      {isModal && <FeedbackModal setIsModal={setIsModal} />}

      <div className="w-full min-h-[313px] flex items-center lg:flex-row flex-col gap-y-4 justify-center border border-[#FF0000] shadow-xl px-[38px] gap-x-[36px]">
        <div className="lg:w-[80%]">
          <p className="text-base text-mainBlack font-medium font-montserrat text-justify">
            Мы дорожим своей репутацией и даем гарантию на все выполняемые виды
            работ. При возникновении гарантийного случая или иного вопроса
            касательно оказанных нами услуг мы максимально оперативно и
            комфортно для Вас решим возникшие вопросы.
          </p>
        </div>
        <div className="lg:w-[20%]">
          <MyButton
            callback={() => setIsModal(true)}
            title={"Связаться с нами"}
            class1={`h-[45px] lg:h-[53px] px-6`}
          />
        </div>
      </div>
    </div>
  ) 
};

export default RcPlus;
