import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
