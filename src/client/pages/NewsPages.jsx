import React, { useEffect, useState } from "react";
import { Feedback, Layout } from "../components";
import Title from "../components/ui/tag/title";
import { BASE_LINK, BASE_URL, instance } from "../../api/axios";
import MyRedButton from "../components/ui/button/red-button";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/loader/loader";

const NewsPages = () => {
  const [data, setData] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const { data } = await instance.get(`/news?page=${pageId}&limit=6`);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout
      title={`Новости | RACECODE`}
      subtitle={`Новости`}
      description={`RACECODE - Новости о тюнинге автомобилей! Профессиональный чип-тюнинг в Москве. Записывайтесь онлайн`}
      link={BASE_LINK + "news"}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
          <Title>Новости</Title>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:grid-cols-3 gap-x-6 tl:mb-20">
            {data?.data?.map((c, idx) => (
              <div key={idx} className="flex flex-col gap-y-4 hover:shadow-2xl hover:pb-4 rounded-b-xl transition-all duration-200 ease-out">
                <img
                  src={BASE_URL + c.img}
                  alt=""
                  className="md:h-[369px] h-[300px]"
                />
                <div className="h-[145px] space-y-3 px-[3%]">
                  <p className="text-secondRed font-montserrat font-medium text-[18px] md:text-[20px] w-[80%]">
                    {c.title}
                  </p>
                  <p
                    className="line-clamp-3 pr-3 text-justify"
                    dangerouslySetInnerHTML={{
                      __html: c?.description,
                    }}
                  />
                </div>
                <MyRedButton
                  callback={() => {
                    navigate(`/news/${c?.id}`);
                    window.scrollTo({ top: 0 });
                  }}
                  title={"Читать дальше"}
                  class1={
                    "sm:mr-auto w-[182px] font-montserrat mx-[3%]"
                  }
                />
              </div>
            ))}
          </div>
          <div className="flex w-full justify-end">
            <Pagination
              count={
                data?.count % 10 != 0
                  ? Math.floor(data?.count / 10) + 1
                  : Math.floor(data?.count / 10)
              }
              onChange={(e, value) => setPageId(value)}
              onClick={() => window.scrollTo({ top: 0 })}
              variant="outlined"
              shape="rounded"
            />
          </div>
          <Feedback />
        </div>
      )}
    </Layout>
  );
};

export default NewsPages;
