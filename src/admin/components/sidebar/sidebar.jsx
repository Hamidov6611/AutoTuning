import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebar = () => setIsSidebarOpen(false);

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 absolute text-sm text-[#fff] rounded-lg sm:hidden"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="#fff"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-[70%] sm:w-[30%] md:w-[25%] lg:w-[15%] h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full relative px-3 py-1 overflow-y-auto bg-[#24303f] dark:bg-[#24303f]">
          <ul className="space-y-6 font-medium">
            {/* logo */}
            <li className="w-full h-full flex justify-start items-start my-8 px-3">
              <svg
                width="180"
                height="31"
                viewBox="0 0 212 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.515625 1.21094H5.20312V30H0.515625V1.21094ZM20.0469 30H15.0859L9.65625 19.5703C9.57812 19.5703 9.48698 19.5833 9.38281 19.6094C9.30469 19.6094 9.17448 19.6094 8.99219 19.6094C8.8099 19.6094 8.53646 19.6094 8.17188 19.6094C7.83333 19.6094 7.3776 19.6094 6.80469 19.6094V16.1719H9.46094C10.0339 16.1719 10.6068 16.0807 11.1797 15.8984C11.7526 15.6901 12.2734 15.3646 12.7422 14.9219C13.2109 14.4792 13.5885 13.8672 13.875 13.0859C14.1615 12.2786 14.3047 11.2891 14.3047 10.1172C14.3047 9.64844 14.2396 9.11458 14.1094 8.51562C13.9792 7.89062 13.7057 7.30469 13.2891 6.75781C12.8984 6.1849 12.3385 5.71615 11.6094 5.35156C10.8802 4.96094 9.91667 4.76562 8.71875 4.76562H6.80469V1.21094H8.79688C10.0208 1.21094 11.2318 1.40625 12.4297 1.79688C13.6276 2.1875 14.6953 2.77344 15.6328 3.55469C16.5964 4.33594 17.3646 5.28646 17.9375 6.40625C18.5365 7.5 18.8359 8.73698 18.8359 10.1172C18.8359 12.2005 18.3542 13.9714 17.3906 15.4297C16.4271 16.888 15.125 17.9688 13.4844 18.6719L20.0469 30ZM49.9688 30H45.125L37.6641 8.4375L30.125 30H25.2422L35.3203 1.25H39.9688L49.9688 30ZM40.2422 20.8594L41.375 24.0234H33.9141L35.0078 20.8594H40.2422ZM72.2734 6.75781C71.6745 6.08073 71.0365 5.57292 70.3594 5.23438C69.6823 4.89583 68.9531 4.70052 68.1719 4.64844V0.78125C71.0885 0.911458 73.5365 1.9401 75.5156 3.86719L72.2734 6.75781ZM68.1719 26.3281C68.9531 26.25 69.6823 26.0417 70.3594 25.7031C71.0625 25.3646 71.7005 24.8698 72.2734 24.2188L75.5156 27.0703C74.526 28.0339 73.4193 28.776 72.1953 29.2969C70.9714 29.8177 69.6302 30.1172 68.1719 30.1953V26.3281ZM55.5156 15.4688C55.5156 13.151 55.7891 11.1068 56.3359 9.33594C56.9089 7.5651 57.6901 6.06771 58.6797 4.84375C59.6693 3.61979 60.8281 2.66927 62.1562 1.99219C63.5104 1.3151 64.9818 0.911458 66.5703 0.78125V4.6875C65.7109 4.81771 64.9036 5.11719 64.1484 5.58594C63.3932 6.02865 62.7292 6.67969 62.1562 7.53906C61.5833 8.39844 61.1276 9.49219 60.7891 10.8203C60.4766 12.1224 60.3073 13.6719 60.2812 15.4688C60.3073 17.2917 60.4766 18.8542 60.7891 20.1562C61.1276 21.4583 61.5833 22.5521 62.1562 23.4375C62.7292 24.3229 63.3932 25 64.1484 25.4688C64.9297 25.9375 65.737 26.224 66.5703 26.3281V30.1562C64.9818 30.0521 63.5104 29.6615 62.1562 28.9844C60.8281 28.3073 59.6693 27.3568 58.6797 26.1328C57.6901 24.9089 56.9089 23.4115 56.3359 21.6406C55.7891 19.8438 55.5156 17.7865 55.5156 15.4688ZM82.3516 1.21094H87.1172V30H82.3516V1.21094ZM99.1484 17.0312H88.7188V13.8281H99.1484V17.0312ZM88.7188 26.4453H100.359V30H88.7188V26.4453ZM100.359 1.21094V4.76562H88.7188V1.21094H100.359Z"
                  fill="#FF0000"
                />
                <path
                  d="M123.016 6.75781C122.417 6.08073 121.779 5.57292 121.102 5.23438C120.424 4.89583 119.695 4.70052 118.914 4.64844V0.78125C121.831 0.911458 124.279 1.9401 126.258 3.86719L123.016 6.75781ZM118.914 26.3281C119.695 26.25 120.424 26.0417 121.102 25.7031C121.805 25.3646 122.443 24.8698 123.016 24.2188L126.258 27.0703C125.268 28.0339 124.161 28.776 122.938 29.2969C121.714 29.8177 120.372 30.1172 118.914 30.1953V26.3281ZM106.258 15.4688C106.258 13.151 106.531 11.1068 107.078 9.33594C107.651 7.5651 108.432 6.06771 109.422 4.84375C110.411 3.61979 111.57 2.66927 112.898 1.99219C114.253 1.3151 115.724 0.911458 117.312 0.78125V4.6875C116.453 4.81771 115.646 5.11719 114.891 5.58594C114.135 6.02865 113.471 6.67969 112.898 7.53906C112.326 8.39844 111.87 9.49219 111.531 10.8203C111.219 12.1224 111.049 13.6719 111.023 15.4688C111.049 17.2917 111.219 18.8542 111.531 20.1562C111.87 21.4583 112.326 22.5521 112.898 23.4375C113.471 24.3229 114.135 25 114.891 25.4688C115.672 25.9375 116.479 26.224 117.312 26.3281V30.1562C115.724 30.0521 114.253 29.6615 112.898 28.9844C111.57 28.3073 110.411 27.3568 109.422 26.1328C108.432 24.9089 107.651 23.4115 107.078 21.6406C106.531 19.8438 106.258 17.7865 106.258 15.4688ZM132.391 15.4688C132.391 13.151 132.664 11.1068 133.211 9.33594C133.784 7.53906 134.565 6.02865 135.555 4.80469C136.57 3.55469 137.755 2.60417 139.109 1.95312C140.49 1.27604 141.987 0.885417 143.602 0.78125V4.6875C142.716 4.79167 141.883 5.0651 141.102 5.50781C140.32 5.95052 139.643 6.60156 139.07 7.46094C138.497 8.32031 138.042 9.41406 137.703 10.7422C137.365 12.0703 137.182 13.6458 137.156 15.4688C137.182 17.3177 137.365 18.9062 137.703 20.2344C138.042 21.5365 138.497 22.6302 139.07 23.5156C139.669 24.401 140.359 25.0781 141.141 25.5469C141.922 25.9896 142.742 26.25 143.602 26.3281V30.1953C142.013 30.0911 140.529 29.7135 139.148 29.0625C137.768 28.3854 136.57 27.4349 135.555 26.2109C134.565 24.9609 133.784 23.4375 133.211 21.6406C132.664 19.8438 132.391 17.7865 132.391 15.4688ZM145.164 0.78125C146.753 0.859375 148.224 1.23698 149.578 1.91406C150.958 2.59115 152.143 3.55469 153.133 4.80469C154.148 6.02865 154.943 7.53906 155.516 9.33594C156.089 11.1068 156.375 13.151 156.375 15.4688C156.375 17.7865 156.089 19.8438 155.516 21.6406C154.943 23.4375 154.148 24.9609 153.133 26.2109C152.143 27.4349 150.971 28.3854 149.617 29.0625C148.263 29.7135 146.779 30.0911 145.164 30.1953V26.3281C146.049 26.224 146.883 25.9505 147.664 25.5078C148.445 25.0391 149.122 24.375 149.695 23.5156C150.268 22.6302 150.724 21.5365 151.062 20.2344C151.401 18.9062 151.583 17.3177 151.609 15.4688C151.583 13.6198 151.401 12.0443 151.062 10.7422C150.724 9.41406 150.255 8.32031 149.656 7.46094C149.083 6.57552 148.406 5.91146 147.625 5.46875C146.844 5 146.023 4.72656 145.164 4.64844V0.78125ZM163.133 1.21094H167.82V30H163.133V1.21094ZM171.805 1.21094C174.227 1.21094 176.349 1.60156 178.172 2.38281C180.021 3.13802 181.544 4.15365 182.742 5.42969C183.966 6.70573 184.878 8.16406 185.477 9.80469C186.076 11.4193 186.375 13.0859 186.375 14.8047C186.375 17.1745 186.115 19.2057 185.594 20.8984C185.099 22.5651 184.461 23.9714 183.68 25.1172C182.898 26.237 182.013 27.1224 181.023 27.7734C180.06 28.4245 179.122 28.9193 178.211 29.2578C177.299 29.5703 176.466 29.7786 175.711 29.8828C174.956 29.9609 174.396 30 174.031 30H169.422V26.5625H172.469C175.646 26.5625 177.938 25.5469 179.344 23.5156C180.75 21.4844 181.453 18.5417 181.453 14.6875C181.453 13.4896 181.31 12.3047 181.023 11.1328C180.737 9.96094 180.177 8.90625 179.344 7.96875C178.536 7.00521 177.43 6.23698 176.023 5.66406C174.617 5.0651 172.794 4.76562 170.555 4.76562H169.422V1.21094H171.805ZM193.172 1.21094H197.938V30H193.172V1.21094ZM209.969 17.0312H199.539V13.8281H209.969V17.0312ZM199.539 26.4453H211.18V30H199.539V26.4453ZM211.18 1.21094V4.76562H199.539V1.21094H211.18Z"
                  fill="white"
                />
              </svg>
            </li>
            {/* news */}
            <li>
              <NavLink
                to={"/admin-news"}
                className={({ isActive }) =>
                  !isActive
                    ? "text-white text-base md:text-xl font-semibold font-montserrat"
                    : "text-yellow-300 text-base md:text-xl font-semibold font-montserrat"
                }
              >
                <span className="ml-3">Новости</span>
              </NavLink>
            </li>
            {/* work */}
            <li>
              <NavLink
                to={"/admin-work"}
                className={({ isActive }) =>
                  !isActive
                    ? "text-white text-base md:text-xl font-semibold font-montserrat"
                    : "text-yellow-300 text-base md:text-xl font-semibold font-montserrat"
                }
              >
                <span className="ml-3">Примеры работ</span>
              </NavLink>
            </li>
            {/* Category */}
            <li>
              <NavLink
                to={"/admin-category"}
                onClick={handleSidebar}
                className={({ isActive }) =>
                  !isActive
                    ? "text-white text-base md:text-xl font-semibold font-montserrat"
                    : "text-yellow-300 text-base md:text-xl font-semibold font-montserrat"
                }
              >
                <span className="ml-3">Категория</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-service"}
                className={({ isActive }) =>
                  !isActive
                    ? "text-white text-base md:text-xl font-semibold font-montserrat"
                    : "text-yellow-300 text-base md:text-xl font-semibold font-montserrat"
                }
              >
                
                <span className="flex-1 ml-3 whitespace-nowrap">
                Сервис
                </span>
                {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-feedback"}
                className={({ isActive }) =>
                  !isActive
                    ? "text-white text-base md:text-xl font-semibold font-montserrat"
                    : "text-yellow-300 text-base md:text-xl font-semibold font-montserrat"
                }
              >
                <span className="ml-3">Обратная связь</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-model"}
                className={({ isActive }) =>
                  !isActive
                    ? "text-white text-base md:text-xl font-semibold font-montserrat"
                    : "text-yellow-300 text-base md:text-xl font-semibold font-montserrat"
                }
              >
                <span className="ml-3">Модель</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-catalog"}
                className={({ isActive }) =>
                  !isActive
                    ? "text-white text-base md:text-xl font-semibold font-montserrat"
                    : "text-yellow-300 text-base md:text-xl font-semibold font-montserrat"
                }
              >
                <span className="ml-3">Каталог</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-call"}
                className={({ isActive }) =>
                  !isActive
                    ? "text-white text-base md:text-xl font-semibold font-montserrat"
                    : "text-yellow-300 text-base md:text-xl font-semibold font-montserrat"
                }
              >
                <span className="ml-3">Вызов</span>
              </NavLink>
            </li>
          </ul>
          <button
            onClick={toggleSidebar}
            className="absolute bottom-[3%] flex justify-end w-full right-[2%]"
          >
            <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Закрывать</span>
            </a>
          </button>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
