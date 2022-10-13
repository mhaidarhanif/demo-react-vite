import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  RootRoute,
  LandingRoute,
  ProductsRoute,
  ProductIdRoute,
} from "./routes";

const router = createBrowserRouter([
  {
    element: <RootRoute />,
    children: [
      { path: "/", element: <LandingRoute /> },
      { path: "/products", element: <ProductsRoute /> },
      { path: "/products/:productId", element: <ProductIdRoute /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
