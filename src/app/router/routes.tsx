import { AboutPage } from "@/pages/AboutPage";
import { WelcomePage } from "@/pages/WelcomePage";
import { RouteObject } from "react-router-dom";

export enum AppPages {
  MAIN = "",
  ABOUT = "about",
}

export const routes: Record<AppPages, RouteObject> = {
  [AppPages.MAIN]: { path: AppPages.MAIN, element: <WelcomePage /> },
  [AppPages.ABOUT]: { path: AppPages.ABOUT, element: <AboutPage /> },
};
