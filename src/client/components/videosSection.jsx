import React, { useEffect, useState } from "react";
import MyButton from "./ui/button/button";
import { BASE_URL, instance } from "../../api/axios";
import ReactPlayer from "react-player";

const VideosSection = () => {
  const [showControls, setShowControls] = useState(false);
  const [id, setId] = useState(3);
  const [visible, setVisible] = useState(false);
  const [videos, setVideos] = useState([]);

  async function getVideos(id) {
    const { data } = await instance.get(`/auto-catalog/?page=1&limit=${id}`);
    setVideos(data?.data);
  }
  useEffect(() => {
    getVideos(id);
  }, []);

  function nextVideo() {
    setVisible(true);
    getVideos(6);
  }

  return (
    <div className="w-[98%] st:max-w-[1280px] mx-auto flex flex-col gap-y-6 sl:gap-y-10 mb-6 md:mb-20 px-[3%] sl:px-0">
      <p className="text-[28px] md:text-[40px] text-center text-mainBlack font-medium font-montserrat">
        Видео
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 tl:grid-cols-3 gap-x-[20px] md:gap-y-6 gap-y-4">
        {videos?.map((c, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onClick={() => setShowControls(true)}
            className="sm:h-[400px]"
          >
            <ReactPlayer
              url={BASE_URL + c?.video}
              className="w-[100%] m-0 p-0"
              width={"100%"}
              controls={showControls}
              height={"100%"}
            />
          </div>
        ))}
      </div>
      {!visible && (
        <MyButton
          callback={nextVideo}
          title={"Смотреть больше"}
          class1={`w-[270px] h-[50px] sl:h-[75px] md:w-[305px] mx-auto mt-12`}
        />
      )}
    </div>
  );
};

export default VideosSection;

{
  /* <div className="relative">
          <div className="bg-gray-300 h-[400px]"></div>
          <img src="/images/video.png" alt="" className="st:h-[400px] hidden st:hidden" />
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="w-[152px] h-[152px] bg-white rounded-full flex items-center justify-center">
              <img src="/images/Vector.png" className="z-[1]" alt="vector" />
            </div>
          </div>
        </div> */
}
