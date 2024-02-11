import React, { useEffect, useState } from "react";
import MyRedButton from "./ui/button/red-button";
import { BASE_URL, instance } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import MobileNews from "./MobileNews";

const News = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await instance.get(`/news?page=1&limit=3`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0">
      <p className="w-full text-center font-medium font-montserrat text-[28px] md:text-[40px]">
        Новости
      </p>
      <div className="w-full hidden sm:grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:grid-cols-3 gap-x-6 tl:mb-20">
        {data?.map((c, idx) => (
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
        ))}
      </div>
      <MobileNews news={data} />
    </div>
  );
};

export default News;
