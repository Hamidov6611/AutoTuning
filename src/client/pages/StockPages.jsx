import React, { useEffect, useState } from "react";
import { Feedback, Layout } from "../components";
import Title from "../components/ui/tag/title";
import { BASE_LINK, BASE_URL, instance } from "../../api/axios";
import { Pagination } from "@mui/material";
import Loader from "../components/ui/loader/loader";
import MyRedButton from "../components/ui/button/red-button";
import Paragraph from "../components/ui/tag/paragraph";
import { Link } from "react-router-dom";

const StockPages = () => {
  const [stock, setStock] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await instance.get(`/stock?page=${pageId}&limit=10`);
      setStock(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [pageId]);
  return (
    <Layout
      title={`Акции на чип-тюнинг вашего авто в МСК | RACECODE`}
      subtitle={`Акции на чип-тюнинг МСК`}
      description={`RACECODE - У нас вы найдёте множество акций на тюнинг вашего автомобился в Москве! Записывайтесь онлайн у нас на сайте`}
      link={BASE_LINK+"stock"}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
          <Title>Акции</Title>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
            {stock?.data?.map((c, idx) => (
              <div className="max-w-[413px] flex flex-col gap-y-4 shadow-xl md:shadow-2xl border rounded-sm">
                <img
                  src={BASE_URL + c?.img}
                  alt=""
                  className="w-full h-[292px] rounded-t-sm"
                />
                <p className="mt-4 text-center font-normal font-montserrat text-base md:text-xl line-clamp-2 h-[60px]">
                  {c?.title}
                </p>
                <Link
                  to={`/stock/${c?.id}`}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="min-w-[200px] cursor-pointer md:min-w-[293px] mx-auto mb-4 md:mb-8 bg-darkRed h-[49px] flex items-center justify-center md:h-[67px]"
                >
                  <p className="text-sm md:text-base font-normal text-white flex gap-x-4 items-center font-montserrat">
                    Подробнее{" "}
                    <svg
                      width="29"
                      height="23"
                      viewBox="0 0 29 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 11.5L17.875 1.5M28 11.5L17.875 21.5M28 11.5L10.2812 11.5M1 11.5L5.21875 11.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {stock?.count < 1 && (
            <p className="text-mainRed font-semibold text-lg md:text-xl text-center">
              Акции недоступны
            </p>
          )}

          {stock?.count > 0 && (
            <div className="flex w-full justify-end">
              <Pagination
                count={
                  stock?.count % 10 != 0
                    ? Math.floor(stock?.count / 10) + 1
                    : Math.floor(stock?.count / 10)
                }
                onChange={(e, value) => setPageId(value)}
                onClick={() => window.scrollTo({ top: 0 })}
                variant="outlined"
                shape="rounded"
              />
            </div>
          )}
          <Feedback />
        </div>
      )}
    </Layout>
  );
};

export default StockPages;
