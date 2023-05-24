import { Loader } from "@/pages/Loader";
import { Root } from "@/pages/Root";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Root />
      </Suspense>
    ),
    children: [...Object.values(routes)],
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
