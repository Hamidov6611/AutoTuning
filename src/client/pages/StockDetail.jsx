import React, { useEffect, useState } from "react";
import { Feedback, Layout } from "../components";
import Title from "../components/ui/tag/title";
import Loader from "../components/ui/loader/loader";
import { BASE_URL, instance } from "../../api/axios";
import { useParams } from "react-router-dom";

const StockDetail = () => {
  const [stock, setStock] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(false);
      const { data } = await instance.get(`/stock/${id}`);
      setStock(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout
      title={stock?.title}
      subtitle={stock?.title}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/stock`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 sm:py-[30px] ol:gap-y-[60px]">
          <div className="flex md:flex-row flex-col gap-y-4 gap-x-16">
            <div className="w-full md:w-1/2">
              <img
                src={BASE_URL + stock?.img}
                alt=""
                className="h-auto w-full md:h-[438px]"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-y-4">
                <Title>{stock?.title}</Title>
              <p
                className="text-base font-montserrat font-normal text-mainBlack"
                dangerouslySetInnerHTML={{
                  __html: stock?.description,
                }}
              />
            </div>
          </div>

          <Feedback />
        </div>
      )}
    </Layout>
  );
};

export default StockDetail;
