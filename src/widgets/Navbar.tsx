import { AppPages } from "@/app/router/routes";
import { Link } from "@/shared/Link";
import React from "react";
import cls from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className={cls.navbar}>
      <div className={cls.links}>
        <Link href={AppPages.MAIN}>Welcome</Link>
        <Link href={AppPages.ABOUT}>About</Link>
      </div>
    </div>
  );
};
