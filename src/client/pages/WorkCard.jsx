import React, { useState } from "react";
import { Layout } from "../components";
import Title from "../components/ui/tag/title";
import { useParams } from "react-router-dom";
import { BASE_URL, instance } from "../../api/axios";
import Loader from "../components/ui/loader/loader";

const WorksCard = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getNewsData = async () => {
    setIsLoading(true);
    try {
      const { data } = await instance.get(`/work/${id}`);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  useState(() => {
    getNewsData();
  }, [id]);
  return (
    <Layout
      title={data?.title}
      subtitle={`Новости`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/news/:id`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[98%] mb-20 st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
          <Title>{data?.title}</Title>

          <div className="w-auto h-[350px] sm:h-auto">
            <img
              src={BASE_URL + data?.img}
              alt={data?.title}
              className="w-auto h-auto bg-contain "
            />
          </div>

          <p
            className="text-base font-montserrat font-normal text-mainBlack"
            dangerouslySetInnerHTML={{
              __html: data?.description,
            }}
          />
        </div>
      )}
    </Layout>
  );
};

export default WorksCard;
