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
  AdminBrandEngine,
  AdminBrandModel,
  AdminBrandYear,
  AdminCall,
  AdminCatalog,
  AdminCategory,
  AdminEco,
  AdminFeedback,
  AdminLogin,
  AdminModel,
  AdminNews,
  AdminRcPlus,
  AdminService,
  AdminStage,
  AdminStage2,
  AdminStock,
  AdminTransmission,
  AdminWork,
} from "../admin/pages";
import CatalizatorPages from "../client/pages/CatalizatorPages";
import AskPages from "../client/pages/AskPages";
import ArticlesPages from "../client/pages/Articles";
import AdminBaseCatalog from "../admin/pages/AdminBaseCatalog";
import AdminBrand from "../admin/pages/AdminBrand";
import CommentPages from "../client/pages/CommentPages";
import ModelDetails from "../client/pages/ModelDetails";
import EcoPages from "../client/pages/EcoPages";

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
      {
        path: "/:brand/:id",
        element: <ModelDetails />,
      },
      {
        path: "/:brand_name/:model_name/:engine_id",
        element: <EcoPages />,
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
      {
        path: "admin-brand-model",
        element: <AdminBrandModel />,
      },
      {
        path: "admin-brand-year",
        element: <AdminBrandYear />,
      },
      {
        path: "admin-brand-engine",
        element: <AdminBrandEngine />,
      },
      {
        path: "admin-eco",
        element: <AdminEco />,
      },
      {
        path: "admin-stage",
        element: <AdminStage />,
      },
      {
        path: "admin-stage2",
        element: <AdminStage2 />,
      },
      {
        path: "admin-transmission",
        element: <AdminTransmission />,
      },
      {
        path: "admin-rc-plus",
        element: <AdminRcPlus />,
      },
    ],
  },
]);
