import React, { useState } from "react";
import Title from "../components/ui/tag/title";
import { Layout } from "../components";
import MyButton from "../components/ui/button/button";
import FeedbackModal from "../components/feedback-modal";
import { BASE_LINK } from "../../api/axios";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <Layout
      title={`Контакты | RACECODE`}
      subtitle={`Контакты МСК`}
      description={`RACECODE - Контактная информация нашего чип-тюнинг сервиса! Записывайтесь онлайн на чип-тюнинг в МСК`}
      link={BASE_LINK + "contact"}
    >
      <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 py-[30px] ol:gap-y-[60px]">
      
        <div className="flex lg:flex-row flex-col min-h-[541px] w-full shadow-xl hover:shadow-md hover:shadow-[#FF0000] p-[30px]">
        
          <div className="lg:w-1/3 h-full">
            <Title>Контакты</Title>

            <div className="mt-[56px] flex flex-col gap-y-[20px] ">
              <Link
                to={"tel:+79268103277"}
                className="flex gap-x-[11px] items-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.26645 7.43645L3.00972 7.69317L3.17437 8.01675C4.66275 10.9418 7.05952 13.3276 9.982 14.825L10.3061 14.991L10.5636 14.7336L12.7636 12.5336C12.899 12.3981 13.099 12.3551 13.2678 12.413L13.2678 12.413L13.2732 12.4148C14.4436 12.8014 15.7066 13.01 17 13.01C17.2739 13.01 17.5 13.2361 17.5 13.51V17C17.5 17.2739 17.2739 17.5 17 17.5C7.88614 17.5 0.5 10.1139 0.5 1C0.5 0.726142 0.726142 0.5 1 0.5H4.5C4.77386 0.5 5 0.726142 5 1C5 2.30213 5.20815 3.55368 5.5939 4.7228C5.6492 4.90217 5.6082 5.09469 5.46645 5.23645L3.26645 7.43645Z"
                    stroke="#FF0000"
                  />
                </svg>
                <p className="font-montserrat text-[20px] font-normal text-mainBlack">
                  +7 (926) 810 32 77
                </p>
              </Link>
              <div className="flex gap-x-[11px] items-center">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.8 14C1.305 14 0.881101 13.8285 0.528301 13.4855C0.175501 13.1425 -0.000598472 12.7307 1.52801e-06 12.25V1.75C1.52801e-06 1.26875 0.176402 0.856626 0.529201 0.513626C0.882001 0.170626 1.3056 -0.000581848 1.8 1.48557e-06H16.2C16.695 1.48557e-06 17.1189 0.171501 17.4717 0.514501C17.8245 0.857501 18.0006 1.26933 18 1.75V12.25C18 12.7312 17.8236 13.1434 17.4708 13.4864C17.118 13.8294 16.6944 14.0006 16.2 14H1.8ZM9 7.875L1.8 3.5V12.25H16.2V3.5L9 7.875ZM9 6.125L16.2 1.75H1.8L9 6.125ZM1.8 3.5V1.75V12.25V3.5Z"
                    fill="#FF0000"
                  />
                </svg>
                <p className="font-montserrat text-[20px] font-normal text-mainBlack">
                  E-mail
                </p>
              </div>
            </div>

            <div className="mt-[30px] flex flex-col gap-y-[10px]">
              <p className="font-montserrat text-[20px] font-medium text-mainBlack">
                Режим работы:
              </p>
              <p className="font-montserrat text-[18px] font-normal text-mainBlack">
                С 11 до 21 без выходных
              </p>
            </div>

            <div className="mt-[30px] flex flex-col gap-y-[10px]">
              <p className="font-montserrat text-[20px] font-medium text-mainBlack">
                Адрес:
              </p>
              <p className="font-montserrat text-[18px] font-normal text-mainBlack">
                Москва
              </p>
            </div>
          </div>
         
          <div className="lg:w-2/3 h-full">
            <img
              src="/images/image 19.png"
              alt=""
              className="mt-[80px] w-full"
            />
          </div>
        </div>
        {isModal && <FeedbackModal setIsModal={setIsModal} />}

        <div className="w-full min-h-[313px] flex items-center lg:flex-row flex-col gap-y-4 justify-center border border-[#FF0000] shadow-xl px-[38px] gap-x-[36px]">
          <div className="lg:w-[80%]">
            <p className="text-base text-mainBlack font-medium font-montserrat text-justify">
              Мы дорожим своей репутацией и даем гарантию на все выполняемые
              виды работ. При возникновении гарантийного случая или иного
              вопроса касательно оказанных нами услуг мы максимально оперативно
              и комфортно для Вас решим возникшие вопросы.
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
    </Layout>
  );
};

export default Contact;
