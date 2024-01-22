import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[232px] mx-auto">
      <div className="max-w-[1440px] mx-auto h-full  flex flex-col">
        <div className="h-1/2 flex items-center justify-between gap-x-[33px] w-[1280px] mx-auto">
          <Link to={"/"}>
            <img src="/images/blacklogo.png" alt="logo" />
          </Link>
          <div className="flex gap-x-[33px]">
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
        <div className="h-[1px] bg-[#000000]/30 px-[78px] w-[1280px] mx-auto"></div>
        <div className="h-1/2 flex items-center gap-x-[50px] w-[1280px] mx-auto">
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
            to={"/chip-tuning"}
            className={({ isActive }) =>
              !isActive
                ? "text-mainBlack flex items-center gap-x-[10px]"
                : "text-mainRed flex items-center gap-x-[10px]"
            }
          >
            <p className="text-base font-montserrat font-normal">Чип-тюнинг</p>
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
            to={"/service"}
            className={({ isActive }) =>
              !isActive
                ? "text-mainBlack flex items-center gap-x-[10px]"
                : "text-mainRed flex items-center gap-x-[10px]"
            }
          >
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
            to={"/market"}
            className={({ isActive }) =>
              !isActive
                ? "text-mainBlack flex items-center gap-x-[10px]"
                : "text-mainRed flex items-center gap-x-[10px]"
            }
          >
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
            to={"/blog"}
            className={({ isActive }) =>
              !isActive
                ? "text-mainBlack flex items-center gap-x-[10px]"
                : "text-mainRed flex items-center gap-x-[10px]"
            }
          >
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
