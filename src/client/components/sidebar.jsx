import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GamburgerMenu from "./ui/menu/GamburgerMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import "./ui/menu/menu.css";

const Sidebar = ({ isMenu, setIsMenu }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
  });

  const sendNext = (url, hide) => {
    navigate(url);
    window.scrollTo({ top: 0 });
    hide && setIsMenu(false);
  };
  return (
    <div className="fixed overflow-y-auto top-0 left-0 h-screen bg-white w-full z-[3] tl:hidden sidebar transition-all ease-linear duration-300">
      <div className="h-full flex flex-col">
        <div className="px-[3%] tl:pl-0 tl:h-1/2 flex items-center h-[100px] justify-between gap-x-[33px] w-[98%] st:w-[1280px] mx-auto">
          <Link to={"/"}>
            <img src="/images/blacklogo.png" alt="logo" className="w-[150px]" />
          </Link>
          {!isMenu ? (
            <MenuIcon
              onClick={() => setIsMenu(true)}
              className="tl:hidden text-[#FF0000]"
              fontSize="large"
            />
          ) : (
            <Close
              onClick={() => setIsMenu(false)}
              className="tl:hidden text-[#FF0000]"
              fontSize="large"
            />
          )}
        </div>
        <div className="my-4 flex flex-col gap-y-4 px-[3%] font-medium text-xl font-montserrat">
          {/* nav 1 */}
          <div onClick={() => sendNext("/", true)}>
            <p>Главная</p>
          </div>
          {/* nav 2 */}
          <div className="flex justify-between flex-col gap-y-3">
            <div className=" flex justify-between ">
              <p
                onClick={() =>
                  setIsHover({ ...isHover, menu1: !isHover.menu1 })
                }
              >
                Чип-тюнинг
              </p>
              {!isHover.menu1 ? (
                <svg
                  onClick={() => setIsHover({ ...isHover, menu1: true })}
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[3%]"
                >
                  <path
                    d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setIsHover({ ...isHover, menu1: false })}
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[3%] rotate-180"
                >
                  <path
                    d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                    fill="black"
                  />
                </svg>
              )}
            </div>
            {isHover.menu1 && (
              <div className=" z-[1] bg-[#0B0B0B] border border-[#591B1B] p-3 gap-y-[15px] flex flex-col w-full">
                <Link
                  to={`/`}
                  onClick={() => {
                    setIsMenu(false);
                    window.scrollTo({ top: 500 });
                  }}
                  className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal"
                >
                  Каталог
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Описание
                </Link>
                <div
                  onClick={() => {
                    navigate("/about");
                    setIsMenu(false);
                    window.scrollTo({ top: 0 });
                  }}
                  className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal"
                >
                  Обучение чип-тюнингу
                </div>
                <div
                  onClick={() => {
                    navigate("/file");
                    setIsMenu(false);
                    window.scrollTo({ top: 0 });
                  }}
                  className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal"
                >
                  Фаил сервис
                </div>
              </div>
            )}
          </div>

          {/* nav 3 */}
          <div className="flex justify-between flex-col gap-y-3">
            <div className=" flex justify-between ">
              <p
                onClick={() =>
                  setIsHover({ ...isHover, menu2: !isHover.menu2 })
                }
              >
                Сервис
              </p>
              {!isHover.menu2 ? (
                <svg
                  onClick={() => setIsHover({ ...isHover, menu2: true })}
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[3%]"
                >
                  <path
                    d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setIsHover({ ...isHover, menu2: false })}
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[3%] rotate-180"
                >
                  <path
                    d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                    fill="black"
                  />
                </svg>
              )}
            </div>
            {isHover.menu2 && (
              <div className=" z-[1] bg-[#0B0B0B] border border-[#591B1B] p-3 gap-y-[15px] flex flex-col w-full">
                <div
                  onClick={() => sendNext("/systems")}
                  className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal"
                >
                  Выхлопные системы
                </div>
                <div className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Отключение катализатора
                </div>
                <div className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Отключение сажевого фильтра
                </div>
              </div>
            )}
          </div>

          {/* nav 4 */}
          <div className="flex justify-between flex-col gap-y-3">
            <div className=" flex justify-between ">
              <p
                onClick={() =>
                  setIsHover({ ...isHover, menu3: !isHover.menu3 })
                }
              >
                Магазин тюнинга
              </p>
              {!isHover.menu3 ? (
                <svg
                  onClick={() => setIsHover({ ...isHover, menu3: true })}
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[3%]"
                >
                  <path
                    d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setIsHover({ ...isHover, menu3: false })}
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[3%] rotate-180"
                >
                  <path
                    d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                    fill="black"
                  />
                </svg>
              )}
            </div>
            {isHover.menu3 && (
              <div className=" z-[1] bg-[#0B0B0B] border border-[#591B1B] p-3 gap-y-[15px] flex flex-col w-full">
                <div className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Выхлопные системы <br />( даунпайпы и спорт выхлопы )
                </div>
                <div className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Винил
                </div>
                <div className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Спортивные диски
                </div>
                <div className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Тормозные системы
                </div>
              </div>
            )}
          </div>

          {/* nav 5 */}
          <div
          // onClick={() => sendNext("/", true)}
          >
            <p>Акции</p>
          </div>

          {/* nav 6 */}
          <div className="flex justify-between flex-col gap-y-3">
            <div className=" flex justify-between ">
              <p
                onClick={() =>
                  setIsHover({ ...isHover, menu4: !isHover.menu4 })
                }
              >
                Блог
              </p>
              {!isHover.menu4 ? (
                <svg
                  onClick={() => setIsHover({ ...isHover, menu4: true })}
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[3%]"
                >
                  <path
                    d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setIsHover({ ...isHover, menu4: false })}
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[3%] rotate-180"
                >
                  <path
                    d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                    fill="black"
                  />
                </svg>
              )}
            </div>
            {isHover.menu4 && (
              <div className=" z-[1] bg-[#0B0B0B] border border-[#591B1B] p-3 gap-y-[15px] flex flex-col w-full">
                <div
                  onClick={() => sendNext("/works", true)}
                  className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal"
                >
                  Примеры работ
                </div>
                <div
                  onClick={() => sendNext("/news", true)}
                  className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal"
                >
                  Новости
                </div>
                <div className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Статьи
                </div>
              </div>
            )}
          </div>

          {/* nav 7 */}
          <div>
            <p>Вопрос-ответ</p>
          </div>

          {/* nav 8 */}
          <div onClick={() => sendNext("/contact", true)}>
            <p>Контакты</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
