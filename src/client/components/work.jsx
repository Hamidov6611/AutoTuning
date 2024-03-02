import MyRedButton from "./ui/button/red-button";
import MyButton from "./ui/button/button";
import { BASE_URL } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import MobileWork from "./MobileWork";
import { useGetWorksQuery } from "../../redux/api";
import Loader from "./loader/loader";

const Work = () => {
  const { data = [], isLoading } = useGetWorksQuery();
  const navigate = useNavigate();

 

  const toWork = () => {
    navigate(`/works`);
    window.scrollTo({ top: 0 });
  };

  if (isLoading) return <Loader />;

  return (
    <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 md:gap-y-10 mb-6 tl:mb-20 px-[3%] sl:px-0">
      <p className="text-[28px] md:text-[40px] text-center text-mainBlack font-medium font-montserrat">
        Примеры работ
      </p>
      <div className="w-full hidden sm:grid grid-cols-1 md:grid-cols-2 tl:grid-cols-3 gap-x-[20px] md:gap-y-6 gap-y-4">
        {data?.data?.map((c, idx) => (
          <div key={idx} className="flex flex-col gap-y-4">
            <img src={BASE_URL + c.img} alt={c.title} className="h-[350px] sm:h-[401px]" />
            <div className="flex flex-col gap-y-4 h-[230px]">
              <p className="text-base md:text-[20px] font-medium font-montserrat text-mainBlack line-clamp-2">
                {c.title}
              </p>
              <p
                className="line-clamp-[7] text-justify"
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
        ))}
      </div>
      <MobileWork work={data?.data} />
      <div className="flex w-full sm:justify-start justify-center">
        <MyButton
          callback={toWork}
          title={"Смотреть больше"}
          class1={`w-[270px] md:w-[305px] h-[50px] sl:h-[75px] rounded-[5px] mx-auto mt-12`}
        />
      </div>
    </div>
  );
};

export default Work;