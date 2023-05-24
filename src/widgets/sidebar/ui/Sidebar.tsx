import { Button } from "@mui/material";
import React, { useState } from "react";
import cls from "./Sidebar.module.scss";

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={cls.sidebar + (collapsed ? " " + cls.collapsed : "")}>
      <Button onClick={toggleSidebar}>Collapse</Button>
    </div>
  );
};
