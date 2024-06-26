import React, { useEffect, useState } from "react";
import "./index.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { instance } from "../../../api/axios";
import toast from "react-hot-toast";

const AddBrand = ({ setIsOpen, getData, id }) => {
  const [engineId, setEngineId] = useState(null);
  const [formData, setFormData] = useState({
    list: "",
    description: "",
    price: "",
    engine_id: engineId,
  });
  const [dates, setData] = useState({
    catalog: [],
    brand: [],
    model: [],
    year: [],
    engine: [],
  });
  const closeHandler = () => setIsOpen(false);
  const AddBrand = async (e) => {
    e.preventDefault();
    try {
      await instance.post(`/transmission`, formData);
      getData();
      setIsOpen(false);
      toast.success("Success");
    } catch (error) {
      toast.error("Failed");
      console.log(error);
    }
  };

  const getAll = async () => {
    const { data } = await instance.get(`/catalog/?page=1&limit=14`);
    setData({ ...dates, catalog: data?.data });
  };

  const getBrand = async (id) => {
    try {
      const { data } = await instance.get(`/brand/sort/${id}`);
      setData({ ...dates, brand: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getModel = async (id) => {
    try {
      const { data } = await instance.get(`/brand/sort2/${id}`);
      setData({ ...dates, model: data[0]?.brandModel });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEngine = async (id) => {
    try {
      const { data } = await instance.get(`/brand-year/sort/${id}`);
      console.log(data);
      setData({ ...dates, engine: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getYear = async (id) => {
    try {
      const { data } = await instance.get(`/brand-model/sort/${id}`);
      setData({ ...dates, year: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-modal flex items-center justify-center z-50">
      <form
        onSubmit={AddBrand}
        className="rounded-md w-[90%] md:w-[50%] p-4 overflow-y-auto lg:w-[30%] min-h-[460px] bg-white"
      >
        <div className="w-full flex items-center justify-between text-[#343434] font-semibold text-[16px]">
          <p>
            Коробка передач{" "}
            <b className="text-[12px] text-amber-950">(1,2,3,4 это очередь)</b>
          </p>
          <svg
            onClick={closeHandler}
            className="cursor-pointer"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.468 11.468C11.2593 11.6767 11.0137 11.7808 10.7314 11.7803C10.449 11.7808 10.2035 11.6767 9.99482 11.468L6.31197 7.78515L2.62913 11.468C2.42043 11.6767 2.17466 11.781 1.89182 11.781C1.60996 11.781 1.36468 11.6767 1.15599 11.468C0.947292 11.2593 0.842699 11.0138 0.842208 10.7314C0.842699 10.4491 0.947292 10.2036 1.15599 9.99486L4.83883 6.31201L1.15599 2.62916C0.947292 2.42047 0.842945 2.1747 0.842945 1.89186C0.842945 1.61 0.947292 1.36472 1.15599 1.15602C1.36468 0.94733 1.61021 0.842737 1.89256 0.842246C2.17491 0.842737 2.42043 0.94733 2.62913 1.15603L6.31197 4.83887L9.99482 1.15603C10.2035 0.94733 10.4488 0.842983 10.7307 0.842983C11.0135 0.842983 11.2593 0.94733 11.468 1.15602C11.6767 1.36472 11.7808 1.61024 11.7803 1.89259C11.7808 2.17495 11.6767 2.42047 11.468 2.62916L7.78511 6.31201L11.468 9.99486C11.6767 10.2036 11.781 10.4488 11.781 10.7307C11.781 11.0135 11.6767 11.2593 11.468 11.468Z"
              fill="#333333"
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-x-4 my-4">
          <div className="flex w-full">
            <select
              onChange={(e) => getBrand(e.target.value)}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
            >
              <option>Каталог (1)</option>
              {dates?.catalog?.map((c, idx) => (
                <option value={c?.id} key={idx}>
                  {c?.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full">
            <select
              onChange={(e) => getModel(e.target.value)}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
            >
              <option>Бренд (2)</option>
              {dates?.brand?.map((c, idx) => (
                <option value={c?.id} key={idx}>
                  {c?.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 mb-4">
          <div className="flex w-full">
            <select
              onChange={(e) => getYear(e.target.value)}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
            >
              <option>Модель (3)</option>
              {dates?.model?.map((c, idx) => (
                <option value={c?.id} key={idx}>
                  {c?.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full">
            <select
              onChange={(e) => getEngine(e.target.value)}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
            >
              <option>Год бренда (4)</option>
              {dates?.year?.map((c, idx) => (
                <option value={c?.id} key={idx}>
                  {c?.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 mb-4">
          <div className="flex w-full">
            <select
              onChange={(e) => setEngineId(e.target.value)}
              type="text"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
            >
              <option className="capitalize">Двигатель (5)</option>
              {dates?.engine?.map((c, idx) => (
                <option value={c?.id} key={idx}>
                  {c?.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full">
            <input
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              type="number"
              className="outline-none border w-full py-2 border-[#343434] rounded-md text-[#343434] px-3 tetx-[15px]"
              placeholder="Price (₽)"
              required
            />
          </div>
        </div>
        <CKEditor
          editor={ClassicEditor}
          config={{
            placeholder: "список",
          }}
          data={formData.list}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFormData({ ...formData, list: data });
          }}
        />
        <div className="h-4"></div>
        <CKEditor
          editor={ClassicEditor}
          config={{
            placeholder: "описание",
          }}
          data={formData.description}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFormData({ ...formData, description: data });
          }}
        />
        <button
          type="submit"
          className="w-full bg-[#343434] text-white font-semibold mt-4 py-2 rounded-lg"
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddBrand;
