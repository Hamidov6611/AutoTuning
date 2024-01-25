import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import GamburgerMenu from "./ui/menu/GamburgerMenu";

const Navbar = () => {
  const [isHover, setIsHover] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
  });
  const hoverHandler = (menu) => {
    setIsHover({ ...isHover, [menu]: true });
  };
  const closeHandler = (menu) => {
    setIsHover({ ...isHover, [menu]: false });
  };
  console.log(isHover);
  return (
    <div className="w-full h-[100px] tl:h-[232px] mx-auto">
      <div className="st:max-w-[1440px] mx-auto h-full  flex flex-col">
        <div className="h-full px-[3%] tl:pl-0 tl:h-1/2 flex items-center justify-between gap-x-[33px] w-[98%] st:w-[1280px] mx-auto">
          <Link to={"/"}>
            <img src="/images/blacklogo.png" alt="logo" className="w-[150px]" />
          </Link>
          <GamburgerMenu class1={"tl:hidden"} />
          <div className="hidden tl:flex gap-x-[33px]">
            <div className="flex gap-x-[10px] items-center">
              <img
                src="/images/location.png"
                alt="location"
                className="w-[14px] h-[20px]"
              />
              <p className="text-mainBlack text-base font-montserrat font-normal">
                Адрес
              </p>
            </div>
            <div className="flex gap-x-[10px] items-center">
              <img
                src="/images/phone.png"
                alt="phone"
                className="w-[18px] h-[18px]"
              />
              <p className="text-mainBlack text-base font-montserrat font-normal">
                Номер телефона
              </p>
            </div>
          </div>
        </div>
        {/* laptop */}
        <div className="h-[1px] bg-[#000000]/30 hidden tl:flex lg:px-[78px] w-[98%] st:w-[1280px] mx-auto"></div>
        {/* laptop */}
        <div className="h-1/2 hidden tl:flex items-center gap-x-[50px]  w-[98%] st:w-[1280px] mx-auto">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              !isActive
                ? "text-mainBlack text-base font-montserrat font-normal"
                : "text-mainRed text-base font-montserrat font-normal"
            }
          >
            Главная
          </NavLink>
          <NavLink
            // to={"/chip-tuning"}
            onMouseEnter={() => hoverHandler("menu1")}
            onMouseLeave={() => closeHandler("menu1")}
            className={
              ({ isActive }) =>
                // !isActive
                "text-mainBlack flex items-center gap-x-[10px] relative"
              // : "text-mainRed flex items-center gap-x-[10px] relative"
            }
          >
            {isHover.menu1 && (
              <div
                onMouseEnter={() => setIsHover({ ...isHover, menu1: true })}
                className="absolute left-0 top-6 z-[1] bg-[#0B0B0B] border border-[#591B1B] p-3 gap-y-[15px] flex flex-col w-[230px]"
              >
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Каталог
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Описание
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Обучение чип-тюнингу
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Фаил сервис
                </Link>
              </div>
            )}

            <p className="text-base font-montserrat font-normal">Чип-тюнинг</p>
            <svg
              className={`${isHover.menu1 && "hover:rotate-180"}`}
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                fill="black"
              />
            </svg>
          </NavLink>
          <NavLink
            // to={"/service"}
            onMouseEnter={() => hoverHandler("menu2")}
            onMouseLeave={() => closeHandler("menu2")}
            className={
              ({ isActive }) =>
                // !isActive
                "text-mainBlack flex items-center gap-x-[10px] relative"
              // : "text-mainRed flex items-center gap-x-[10px]"
            }
          >
            {isHover.menu2 && (
              <div
                onMouseEnter={() => setIsHover({ ...isHover, menu2: true })}
                className="absolute left-0 top-6 z-[1] bg-[#0B0B0B] border border-[#591B1B] p-3 gap-y-[15px] flex flex-col w-[280px]"
              >
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Выхлопные системы
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Отключение катализатора
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Отключение сажевого фильтра
                </Link>
              </div>
            )}
            <p className="text-base font-montserrat font-normal">Сервис</p>
            <svg
              className="hover:rotate-180"
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                fill="black"
              />
            </svg>
          </NavLink>
          <NavLink
            // to={"/market"}
            onMouseEnter={() => hoverHandler("menu3")}
            onMouseLeave={() => closeHandler("menu3")}
            className={
              ({ isActive }) =>
                // !isActive
                "text-mainBlack flex items-center gap-x-[10px] relative"
              // : "text-mainRed flex items-center gap-x-[10px]"
            }
          >
            {isHover.menu3 && (
              <div
                onMouseEnter={() => setIsHover({ ...isHover, menu3: true })}
                className="absolute left-0 top-6 z-[1] bg-[#0B0B0B] border border-[#591B1B] p-3 gap-y-[15px] flex flex-col w-[284px]"
              >
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Выхлопные системы <br />( даунпайпы и спорт выхлопы )
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Винил
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Спортивные диски
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                  Тормозные системы
                </Link>
              </div>
            )}
            <p className="text-base font-montserrat font-normal">
              Магазин тюнинга
            </p>
            <svg
              className="hover:rotate-180"
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                fill="black"
              />
            </svg>
          </NavLink>
          <NavLink
            to={"/stock"}
            className={({ isActive }) =>
              !isActive
                ? "text-mainBlack text-base font-montserrat font-normal"
                : "text-mainRed text-base font-montserrat font-normal"
            }
          >
            Акции
          </NavLink>
          <NavLink
            // to={"/blog"}
            onMouseEnter={() => hoverHandler("menu4")}
            onMouseLeave={() => closeHandler("menu4")}
            className={({ isActive }) =>
              // !isActive
                 "text-mainBlack flex items-center gap-x-[10px] relative"
                // : "text-mainRed flex items-center gap-x-[10px]"
            }
          >
            {isHover.menu4 && (
              <div
                onMouseEnter={() => setIsHover({ ...isHover, menu4: true })}
                className="absolute left-0 top-6 z-[1] bg-[#0B0B0B] border border-[#591B1B] p-3 gap-y-[15px] flex flex-col w-[284px]"
              >
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                Примеры работ
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                Нововсти
                </Link>
                <Link className="text-white hover:text-[#FF0000] transition-all duration-150 text-base font-montserrat font-normal">
                Статьи
                </Link>
                
              </div>
            )}
            <p className="text-base font-montserrat font-normal">Блог</p>
            <svg
              className="hover:rotate-180"
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.96729 7.81106L14.8217 1.02225C14.9362 0.908977 15 0.758484 15 0.601986C15 0.445488 14.9362 0.294996 14.8217 0.181721L14.814 0.174411C14.7585 0.119308 14.6918 0.0754304 14.6177 0.0454468C14.5437 0.0154633 14.464 9.06819e-07 14.3835 8.99778e-07C14.303 8.92736e-07 14.2233 0.0154633 14.1492 0.0454468C14.0752 0.0754303 14.0085 0.119308 13.953 0.174411L7.49871 6.56732L1.04701 0.17441C0.991536 0.119307 0.924764 0.0754292 0.850756 0.0454456C0.776747 0.0154621 0.697049 -2.96729e-07 0.616508 -3.03771e-07C0.535968 -3.10812e-07 0.456269 0.0154621 0.38226 0.0454456C0.308251 0.0754291 0.24148 0.119307 0.186007 0.17441L0.178261 0.18172C0.0638339 0.294994 -2.93238e-07 0.445487 -3.06919e-07 0.601985C-3.20601e-07 0.758483 0.0638339 0.908976 0.178261 1.02225L7.03271 7.81106C7.09299 7.87077 7.16549 7.9183 7.24581 7.95078C7.32614 7.98325 7.41261 8 7.5 8C7.58739 8 7.67386 7.98325 7.75419 7.95078C7.83451 7.9183 7.90701 7.87077 7.96729 7.81106Z"
                fill="black"
              />
            </svg>
          </NavLink>
          <NavLink
            to={"/ask"}
            className={({ isActive }) =>
              !isActive
                ? "text-mainBlack text-base font-montserrat font-normal"
                : "text-mainRed text-base font-montserrat font-normal"
            }
          >
            Вопрос-ответ
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              !isActive
                ? "text-mainBlack text-base font-montserrat font-normal"
                : "text-mainRed text-base font-montserrat font-normal"
            }
          >
            Контакты
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
