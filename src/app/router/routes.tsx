import { AboutPage } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { WelcomePage } from "@/pages/WelcomePage";
import { RouteObject } from "react-router-dom";

export enum AppPages {
  MAIN = "",
  ABOUT = "about",
  NOT_FOUND = "*",
}

export const routes: Record<AppPages, RouteObject> = {
  [AppPages.MAIN]: { path: AppPages.MAIN, element: <WelcomePage /> },
  [AppPages.ABOUT]: { path: AppPages.ABOUT, element: <AboutPage /> },
  [AppPages.NOT_FOUND]: { path: AppPages.NOT_FOUND, element: <NotFoundPage /> },
};
