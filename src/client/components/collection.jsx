import React, { useCallback, useEffect, useState } from "react";
import { BASE_URL, instance } from "../../api/axios";
import { Link } from "react-router-dom";
import { useGetBrandModelsQuery } from "../../redux/api";

const Collection = () => {
  const [catalog, setCatalog] = useState([]);
  const [id, setId] = useState(1);
  const { data = [], isLoading } = useGetBrandModelsQuery(id);
  const getCatalog = useCallback(async () => {
    try {
      const { data } = await instance.get(`/catalog/?page=1&limit=10`);
      setCatalog(data?.data);
      toggleCard(data?.data[0]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCatalog();
  }, [getCatalog]);

  const toggleCard = (item) => {
    setId(item?.id);
    setCatalog((prevCards) =>
      prevCards?.map((card) =>
        card?.id === item?.id
          ? { ...card, visible: !card.visible }
          : { ...card, visible: false }
      )
    );
  };
  return (
    <div className="max-w-[1440px] space-y-6 mx-auto my-5 ol:my-10 px-[3%] tl:px-0">
      <div className="w-[98%] st:w-[1280px] mx-auto flex flex-col gap-y-[20px] tl:gap-y-[80px] overflow-x-auto">
        <div className="overflow-x-auto w-[680px] sm:w-[1280px]">
          <div className="w-full flex border border-[#FF0000] transition-all ease-linear duration-500 h-[100px] rounded-[10px] overflow-x-auto ol:overflow-x-hidden gap-x-6 ol:gap-x-0 sm:justify-between  items-center">
            {catalog?.map((c, idx) => (
              <div
                className={`h-full w-[113px] cursor-pointer sm:w-auto flex items-center px-2 sm:px-[20px] transition-all ease-in-out duration-500 ${
                  c?.visible && "bg-[#FF0000]"
                }`}
              >
                <img
                  onClick={() => toggleCard(c)}
                  src={BASE_URL + c?.img}
                  alt="c"
                  key={idx}
                  className={`w-[113px] sm:w-auto  ${
                    idx === 4 ? "h-[50px]" : "h-auto max-h-[70px]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="sm:max-w-[1223px] mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-8  nor:grid-cols-12 gap-y-6 overflow-x-auto ol:overflow-x-hidden gap-x-3  mx-auto items-center max-w-[1223px]">
          {data?.brand?.map((c, idx) => (
            <Link
              to={`/${c?.title}/${c?.id}`}
              onClick={() => window.scrollTo({ top: 0 })}
              className={`shadow-example cursor-pointer bg-[#DADADA] flex-col border py-5  gap-y-2 rounded-[8px]  w-full h-[100px] flex items-center justify-center`}
            >
              <img
                src={BASE_URL + c?.img}
                alt={c}
                key={idx}
                className="px-2 h-[92%] w-auto object-scale-down"
              />
              <p className="m-0 p-0 text-[10px] text-center h-[8%]">
                {c?.title}
              </p>
            </Link>
          ))}
        </div>
        {data?.brand?.length < 1 && (
          <p className="text-center w-full mt-4 font-medium font-montserrat text-mainRed">
            Этот бренд не найден
          </p>
        )}
      </div>
    </div>
  );
};

export default Collection;
