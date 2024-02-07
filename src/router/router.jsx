import { createBrowserRouter } from "react-router-dom";
import {
  Contact,
  ErrorPage,
  ExhaustSystems,
  Home,
  ModelPage,
  ModelSeries,
  NewsCard,
  NewsPages,
  Service,
  WorksPages,
} from "../client/pages";
import WorksCard from "../client/pages/WorkCard";
import About from "../client/pages/About";
import FileService from "../client/pages/FileService";
import {
  AdminCall,
  AdminCatalog,
  AdminCategory,
  AdminFeedback,
  AdminLogin,
  AdminModel,
  AdminNews,
  AdminService,
  AdminWork,
} from "../admin/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // Client router
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
      {
        path: "systems",
        element: <ExhaustSystems />,
      },
      {
        path: "systems/:slug/:id",
        element: <ModelPage />,
      },
      {
        path: "systems/models/:id",
        element: <ModelSeries />,
      },
      // Admin router
      {
        path: "admin-login",
        element: <AdminLogin />,
      },
      {
        path: "admin-news",
        element: <AdminNews />,
      },
      {
        path: "admin-work",
        element: <AdminWork />,
      },
      {
        path: "admin-category",
        element: <AdminCategory />,
      },
      {
        path: "admin-service",
        element: <AdminService />,
      },
      {
        path: "admin-feedback",
        element: <AdminFeedback />,
      },
      {
        path: "admin-model",
        element: <AdminModel />,
      },
      {
        path: "admin-catalog",
        element: <AdminCatalog />,
      },
      {
        path: "admin-call",
        element: <AdminCall />
      }
    ],
  },
]);
