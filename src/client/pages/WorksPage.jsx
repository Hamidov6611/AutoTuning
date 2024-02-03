import React, { useEffect, useState } from "react";
import { Feedback, Layout } from "../components";
import Title from "../components/ui/tag/title";
import { BASE_URL, instance } from "../../api/axios";
import MyRedButton from "../components/ui/button/red-button";
import { Pagination } from "@mui/material";
import Loader from "../components/ui/loader/loader";
import { useNavigate } from "react-router-dom";

const WorksPages = () => {
  const [data, setData] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await instance.get(`/work?page=${pageId}&limit=6`);
      console.log(data);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const search = async (e) => {
    if (title.length < 1) {
      getData();
    } else {
      try {
        const { data } = await instance.get(`/work/main/?search=${title}`);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    search();
  }, [title]);
  return (
    <Layout
      title={``}
      subtitle={`Наши работы`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/works`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
          <div className="w-full flex lg:flex-row flex-col gap-y-3 justify-between lg:items-center">
            <Title>Наши работы</Title>
            {/* Search section */}
            <form className="relative w-full lg:w-auto" onSubmit={search}>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="w-full lg:w-[629px] h-[55px] bg-[#F5F5F5] border border-[#FF0000]/50 outline-none focus:shadow-lg focus:shadow-[#FF0000]/50 pl-[55px] text-lg font-semibold font-montserrat text-[#FF0000]"
                required
              />
              <div className="absolute top-[12px] left-3 lg:left-[12px]">
                <svg
                  width={34}
                  height={34}
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.9702 33.308L19.4462 20.784C18.4462 21.636 17.2962 22.2953 15.9962 22.762C14.6962 23.2286 13.3895 23.462 12.0762 23.462C8.87354 23.462 6.16288 22.3533 3.94421 20.136C1.72554 17.9173 0.616211 15.2073 0.616211 12.006C0.616211 8.80463 1.72421 6.0933 3.94021 3.87196C6.15754 1.6493 8.86688 0.537964 12.0682 0.537964C15.2709 0.537964 17.9829 1.6473 20.2042 3.86596C22.4255 6.08463 23.5362 8.79596 23.5362 12C23.5362 13.3893 23.2902 14.734 22.7982 16.034C22.3049 17.334 21.6582 18.446 20.8582 19.37L33.3822 31.892L31.9702 33.308ZM12.0762 21.46C14.7295 21.46 16.9702 20.5466 18.7982 18.72C20.6249 16.8933 21.5382 14.6526 21.5382 11.998C21.5382 9.34463 20.6249 7.10463 18.7982 5.27796C16.9715 3.4513 14.7315 2.53796 12.0782 2.53796C9.42488 2.53796 7.18421 3.4513 5.35621 5.27796C3.52954 7.10463 2.61621 9.34463 2.61621 11.998C2.61621 14.6513 3.52954 16.8913 5.35621 18.718C7.18288 20.5446 9.42288 21.46 12.0762 21.46Z"
                    fill="black"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>
            </form>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:grid-cols-3 gap-x-6 tl:mb-20">
            {data?.data?.map((c, idx) => (
              <div key={idx} className="flex flex-col gap-y-4">
                <img
                  src={BASE_URL + c.img}
                  alt={c.title}
                  className="h-[401px]"
                />
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
                  title={"Смотреть больше"}
                  class1={`mr-auto w-[270px] md:w-[305px]`}
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

export default WorksPages;
