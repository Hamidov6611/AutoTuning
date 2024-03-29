import MyRedButton from "./ui/button/red-button";
import { BASE_URL } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import MobileNews from "./MobileNews";
import { useGetNewsQuery } from "../../redux/api";
import Loader from "./loader/loader";

const News = () => {
  const { data = [], isLoading } = useGetNewsQuery();

  const navigate = useNavigate();

  if (isLoading) return <Loader />;

  return (
    <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 tl:gap-y-16 px-[3%] sl:px-0">
      <p className="w-full text-center font-medium font-montserrat text-[28px] md:text-[40px]">
        Новости
      </p>
      <div className="w-full hidden sm:grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:grid-cols-3 gap-x-6 tl:mb-20">
        {data?.data?.map((c, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-y-4 hover:shadow-2xl hover:pb-4 rounded-b-xl transition-all duration-200 ease-out"
          >
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
              title={"Читать дальше"}
              callback={() => {
                navigate(`/news/${c?.id}`);
                window.scrollTo({ top: 0 });
              }}
              class1={"mx-auto sm:mx-[3%] sm:mr-auto w-[182px] font-montserrat"}
            />
          </div>
        ))}
      </div>
      <MobileNews news={data?.data} />
    </div>
  );
};

export default News;
