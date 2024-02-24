import { createBrowserRouter } from "react-router-dom";
import {
  Contact,
  ErrorPage,
  ExhaustSystems,
  FilterPages,
  Home,
  ModelPage,
  ModelSeries,
  NewsCard,
  NewsPages,
  Service,
  StockDetail,
  StockPages,
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
  AdminStock,
  AdminWork,
} from "../admin/pages";
import CatalizatorPages from "../client/pages/CatalizatorPages";
import AskPages from "../client/pages/AskPages";
import ArticlesPages from "../client/pages/Articles";
import AdminBaseCatalog from "../admin/pages/AdminBaseCatalog";
import AdminBrand from "../admin/pages/AdminBrand";
import CommentPages from "../client/pages/CommentPages";

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
      {
        path: "filter",
        element: <FilterPages />,
      },
      {
        path: "stock",
        element: <StockPages />,
      },
      {
        path: "stock/:id",
        element: <StockDetail />,
      },
      {
        path: "catalizator",
        element: <CatalizatorPages />,
      },
      {
        path: "ask",
        element: <AskPages />,
      },
      {
        path: "articles",
        element: <ArticlesPages />,
      },
      {
        path: "comment",
        element: <CommentPages />,
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
        element: <AdminCall />,
      },
      {
        path: "admin-stock",
        element: <AdminStock />,
      },
      {
        path: "admin-catalogs",
        element: <AdminBaseCatalog />,
      },
      {
        path: "admin-brand",
        element: <AdminBrand />,
      },
    ],
  },
]);
