import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import Title from "../components/ui/tag/title";
import { BASE_URL, instance } from "../../api/axios";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VidepPlayer";
import Feedback2 from "../components/feedback2";

const ModelSeries = () => {
  const [catalog, setCatalog] = useState(null);
  const { id } = useParams();
  const getAllCatalog = async () => {
    try {
      const { data } = await instance(`/auto-catalog/${id}`);
      setCatalog(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCatalog();
  }, []);
  return (
    <Layout
      title={`Exhaust systems`}
      subtitle={`Exhaust systems`}
      description={`Мы дорожим своей репутацией и даем гарантию на все выполняемые виды работ. При возникновении гарантийного случая или иного вопроса касательно оказанных нами услуг мы максимально оперативно и комфортно для Вас решим возникшие вопросы.`}
      link={`https://auto-tuning.vercel.app/systems/bmw`}
    >
      <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0 py-[30px] ol:gap-y-[60px]">
        <Title>{catalog?.title}</Title>

        <div className="w-auto h-auto sm:h-[414px]">
          <img src={BASE_URL + catalog?.img} alt="" className="w-auto h-full"/>
        </div>

        <p className="text-center font-normal font-montserrat text-[20px] md:text-[28px] md:my-7">Видео с активированным Popcorn</p>
      
        <VideoPlayer src={BASE_URL + catalog?.video} alt={catalog?.video} />
       <Feedback2 />
      </div>
    </Layout>
  );
};

export default ModelSeries;
