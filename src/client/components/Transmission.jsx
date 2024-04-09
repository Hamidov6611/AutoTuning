import React, { useEffect, useState } from "react";
import { instance } from "../../api/axios";
import FeedbackModal from "./feedback-modal";
import MyButton from "./ui/button/button";
import NoContent from "./ui/no-content";
import Paragraph from "./ui/tag/paragraph";

const Transmission = ({ id }) => {
  const [eco, setEco] = useState([]);
  const [isModal, setIsModal] = useState(false);
  // const getData = async () => {
  //   try {
  //     const { data } = await instance.get(`/transmission/engine/${id}/`);
  //     setEco(data[0]);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [id]);

  return eco?.price ? (
    <div className="flex flex-col w-full gap-y-12 md:gap-y-40">
      <div className="w-full flex gap-y-12 md:flex-row flex-col justify-between md:gap-x-6">
        <div className="md:w-[60%] flex flex-col gap-y-4">
          <div className="w-full border flex flex-col gap-y-4 p-3">
            <p
              className="text-[16px] font-normal text-[#000] font-montserrat"
              dangerouslySetInnerHTML={{
                __html: eco?.description,
              }}
            />
            <p
              className="text-[16px] font-normal text-[#56B2E7] font-montserrat"
              dangerouslySetInnerHTML={{
                __html: eco?.list,
              }}
            />
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

export default Transmission;
