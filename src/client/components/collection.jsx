import React, { useCallback, useEffect, useState } from "react";
import { BASE_URL, instance } from "../../api/axios";

const Collection = () => {
  const [catalog, setCatalog] = useState([]);
  const [brand, setBrand] = useState([]);
  const [id, setId] = useState(1);
  const getCatalog = useCallback(async () => {
    try {
      const { data } = await instance.get(`/catalog/?page=1&limit=10`);
      setCatalog(data?.data);
      toggleCard(data?.data[0]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getBrand = useCallback(async () => {
    try {
      const { data } = await instance.get(`/catalog/brand/${id}`);
      setBrand(data?.brand);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getCatalog();
  }, [getCatalog]);

  useEffect(() => {
    getBrand();
  }, [id, getBrand]);

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
      <div className="overflow-x-auto sm:w-[1280px] mx-auto">
        <div className="flex flex-wrap gap-y-6 overflow-x-auto ol:overflow-x-hidden gap-x-6 ol:gap-x-4 items-center w-[1280px]">
          {brand?.map((c, idx) => (
            <div
              className={`shadow-example flex-col border py-5 px-2 gap-y-2 rounded-[8px]  w-[82.2px] h-[100px] flex items-center justify-center`}
            >
              <img src={BASE_URL + c?.img} alt={c} key={idx} />
              <p className="m-0 p-0 text-[10px]">{c?.title}</p>
            </div>
          ))}
          {brand?.length < 1 && (
            <p className="text-center w-full mt-4 font-medium font-montserrat text-mainRed">
              Этот бренд не найден
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
