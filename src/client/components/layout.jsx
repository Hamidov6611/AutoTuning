import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
