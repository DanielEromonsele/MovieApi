import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/block/Layout";
import { TestBuild } from "../pages/TestBuild";
import { Detail } from "../pages/Detail";


export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TestBuild />,
      },
      {
        path: "/:id/detail",
        element: <Detail />,
      },
    ],
  },
]);
