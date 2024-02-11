import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BASE_URL } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import MyRedButton from "./ui/button/red-button";

const MobileNews = ({ news }) => {
  const navigate = useNavigate();
  return (
    <div className="sm:hidden">
      <Swiper
        pagination={true}
        navigation
        slidesPerView={1}
        modules={[Navigation]}
        spaceBetween={50}
        className="mySwiper"
        color="red"
      >
        {news?.map((c, idx) => (
          <SwiperSlide key={idx}>
            <div key={idx} className="flex flex-col gap-y-4">
              <img
                src={BASE_URL + c.img}
                alt=""
                className="md:h-[369px] h-[300px]"
              />
              <div className="h-[145px] space-y-3">
                <p className="text-secondRed font-montserrat font-medium text-[18px] md:text-[20px] w-[80%]">
                  {c.title}
                </p>
                <p
                  className="line-clamp-3 pr-3"
                  dangerouslySetInnerHTML={{
                    __html: c?.description,
                  }}
                />
              </div>
              <MyRedButton
                title={"Читать дальше"}
                callback={() => {
                  navigate(`/news/${c?.id}`);
                  window.scrollTo({ top: 0 });
                }}
                class1={"mx-auto sm:mx-0 sm:mr-auto w-[182px] font-montserrat"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileNews;
