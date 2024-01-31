import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Sidebar from "../sidebar/sidebar";

const AdminLayout = ({ children, title, desc }) => {
  const [admin, setAdmin] = useState(
    (Cookies.get("token") | null)
  );
  useEffect(() => {
    let admin = Cookies.get("token");
    setAdmin((admin));
  }, []);
  const navigate = useNavigate();
  return admin?.length > 0 ? (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      {/* <Navbar /> */}

      <main className="w-[100%] flex flex-row justify-between">
        <div>
          <Sidebar />
        </div>
        <div className="w-[100%] md:w-[85%]  bg-[#1a222c]">{children}</div>
      </main>
    </>
  ) : navigate('/login')
};

AdminLayout.defaultProps = {
  title: "Admin",
};

export default AdminLayout;