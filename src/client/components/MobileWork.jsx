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

const MobileWork = ({ work }) => {
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
        {work?.map((c, idx) => (
          <SwiperSlide key={idx}>
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
              title={"Читать далее"}
              class1={`mx-auto sm:mx-0 sm:mr-auto w-[270px] md:w-[305px]`}
            />
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileWork;
