import React, { useEffect, useState } from "react";
import { instance } from "../../api/axios";
import FeedbackModal from "./feedback-modal";
import MyButton from "./ui/button/button";
import NoContent from "./ui/no-content";
import Help from "./Help";

const Stage1 = ({ id }) => {
  const [eco, setEco] = useState([]);
  const [isHelp, setIsHelp] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const getEco = async (id) => {
    try {
      const { data } = await instance.get(`/parsing-cars-tunings/${id}`);
      setEco(data?.tuning_statistic_id);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const { data } = await instance.get(`/parsing-cars-engines/${id}/`);
      let arr = data?.tuning_id?.filter((c) => c.name == "Stage 1");

      getEco(arr[0]?.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);


  return eco ? (
    <div className="flex flex-col w-full gap-y-12 md:gap-y-40">
      <div className="w-full flex gap-y-12 md:flex-row flex-col justify-between md:gap-x-6">
        <div className="md:w-[60%] flex flex-col gap-y-4">
          {/* section 1 */}
          <div className="w-full grid grid-cols-4 gap-x-1 md:gap-x-3 h-[40.39px]">
            <div className="h-full">
              <p
                role="button"
                onClick={() => setIsHelp(true)}
                className="cursor-pointer text-[13px] md:text-base leading-[17px] font-normal font-montserrat text-[#56B2E7]"
              >
                Больше <br />
                информации
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat hover:text-white text-[#1D1D1D]">
                Оригинал
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat hover:text-white text-[#1D1D1D]">
                После тюнинга
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat hover:text-white text-[#1D1D1D]">
                Разница
              </p>
            </div>
          </div>
          {/* section2 */}
          <div className="w-full grid grid-cols-4 gap-x-1 md:gap-x-3 h-[40.39px]">
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white pl-2 flex items-center justify-start">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat hover:text-white text-[#1D1D1D]">
                Мощность
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat hover:text-white text-[#1D1D1D]">
                {eco[0]?.original}
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat font-semibold hover:text-white text-[#56B2E7]">
                {eco[0]?.after_tuning}
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-semibold font-montserrat hover:text-white text-[#56B2E7]">
                + {parseInt(eco[0]?.after_tuning.match(/\d+/)[0]) -
                  parseInt(eco[0]?.original.match(/\d+/)[0])}{} hp
              </p>
            </div>
          </div>
          {/* section 3 */}
          <div className="w-full grid grid-cols-4 gap-x-1 md:gap-x-3 h-[40.39px]">
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white pl-2 flex items-center justify-start">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat hover:text-white text-[#1D1D1D]">
                Крутящий момент
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat hover:text-white text-[#1D1D1D]">
              {eco[1]?.original}
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat font-semibold hover:text-white text-[#56B2E7]">
              {eco[1]?.after_tuning}
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-semibold font-montserrat hover:text-white text-[#56B2E7]">
                + {parseInt(eco[1]?.after_tuning.match(/\d+/)[0]) -
                  parseInt(eco[1]?.original.match(/\d+/)[0])} Nm
              </p>
            </div>
          </div>
          {/* section 5 */}
          <div className="w-full grid grid-cols-4 gap-x-1 md:gap-x-3 mon-h-[40.39px]">
            <div className="col-span-4 border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 flex items-end py-2 justify-center flex-col">
              <p className="text-[13px] text-center sm:text-center md:text-[16px] leading-[22.4px] px-1 md:px-4 font-montserrat hover:text-white text-[#0099CC]">
                Индивидуальные перепрошивки несовместимы с топливом E85
              </p>
            </div>
          </div>
          {/* section 4 */}
          <div className="w-full grid grid-cols-4 gap-x-1 md:gap-x-3 h-[40.39px]">
            <div className="col-span-3 border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 flex items-end py-2 justify-end flex-col">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] px-1 md:px-4 font-montserrat hover:text-white text-[#1D1D1D]">
                Цена включает НДС
              </p>
              <p className="text-[13px] leading-[22.4px] text-end px-1 md:px-4 font-montserrat hover:text-white text-[#56B2E7]">
                Варианты оплаты
              </p>
            </div>

            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat font-semibold hover:text-white text-[#56B2E7]">
              Этап 1
              </p>
            </div>
          </div>
        </div>
        {eco?.description && (
          <div className="flex md:w-[40%] bg-black h-[212px]">
            <p
              className="text-white py-2 pl-4"
              dangerouslySetInnerHTML={{
                __html: eco?.description,
              }}
            />
          </div>
        )}
      </div>
      {isHelp && <Help setState={setIsHelp} />}
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
  ) : (
    <NoContent />
  );
};

export default Stage1;
