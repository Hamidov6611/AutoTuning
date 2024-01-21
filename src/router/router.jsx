import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../client/components";
import { ErrorPage, Home } from "../client/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
