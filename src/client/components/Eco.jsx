import React, { useEffect, useState } from "react";
import { instance } from "../../api/axios";
import FeedbackModal from "./feedback-modal";
import MyButton from "./ui/button/button";
import NoContent from "./ui/no-content";

const Eco = ({ id }) => {
  const [eco, setEco] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const getData = async () => {
    try {
      const { data } = await instance.get(`/eco/${id}/`);
      setEco(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return eco?.price ? (
    <div className="flex flex-col w-full gap-y-12 md:gap-y-40">
      <div className="w-full flex gap-y-12 md:flex-row flex-col justify-between md:gap-x-6">
        <div className="md:w-[60%] flex flex-col gap-y-4">
          {/* section 1 */}
          <div className="w-full grid grid-cols-4 gap-x-1 md:gap-x-3 h-[40.39px]">
            <div className="h-full">
              <p className="text-[13px] md:text-base leading-[17px] font-normal font-montserrat text-[#56B2E7]">
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
                Крутящий момент
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat hover:text-white text-[#1D1D1D]">
                {eco?.original_nm} Nm
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat font-semibold hover:text-white text-[#56B2E7]">
                {eco?.after_nm} Nm
              </p>
            </div>
            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-semibold font-montserrat hover:text-white text-[#56B2E7]">
                + {eco?.after_nm - eco?.original_nm} Nm
              </p>
            </div>
          </div>
          {/* section 3 */}
          <div className="w-full grid grid-cols-4 gap-x-1 md:gap-x-3 h-[40.39px]">
            <div className="col-span-3 border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] flex w-full justify-end font-montserrat hover:text-white text-[#1D1D1D]">
                Предполагаемое снижение расхода топлива
              </p>
            </div>

            <div className="border h-full border-[#1D1D1D] cursor-pointer transition-all duration-300 ease-in hover:bg-mainRed hover:text-white text-[#1D1D1D] bg-white px-1 md:px-4 flex items-center justify-end">
              <p className="text-[13px] text-center sm:text-end md:text-[16px] leading-[22.4px] font-montserrat hover:text-white text-[#1C1C1C]">
                +/- {eco?.percentage} %
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
                {eco?.price} ₽
              </p>
            </div>
          </div>
        </div>
        {eco?.description && (
          <div className="flex md:w-[40%] bg-black h-[230px]">
            <p
              className="text-white py-2 pl-4"
              dangerouslySetInnerHTML={{
                __html: eco?.description,
              }}
            />
          </div>
        )}
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
  ) : (
    <NoContent />
  );
};

export default Eco;
