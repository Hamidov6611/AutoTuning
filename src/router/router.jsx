import { createBrowserRouter } from "react-router-dom";
import {
  Contact,
  ErrorPage,
  Home,
  NewsCard,
  NewsPages,
  Service,
  WorksPages,
} from "../client/pages";
import WorksCard from "../client/pages/WorkCard";
import About from "../client/pages/About";
import FileService from "../client/pages/FileService";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "news",
        element: <NewsPages />,
      },
      {
        path: "works",
        element: <WorksPages />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "news/:id",
        element: <NewsCard />,
      },
      {
        path: "work/:id",
        element: <WorksCard />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "file",
        element: <FileService />,
      },
    ],
  },
]);
