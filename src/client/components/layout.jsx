import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, description, title, link, subtitle }) => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:title" content={subtitle} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={link} />
        <meta property="og:site_name" content="Usertech - Digital агенство" />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "ЧИП-ТЮНИНГ",
  link: "https://auto-tuning.vercel.app/",
  description:
    "Чип-тюнинг - изменения данных зыписанных в электронном блоке управления",
};

export default Layout;
