import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import cls from "./Sidebar.module.scss";

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={cls.sidebar + (collapsed ? " " + cls.collapsed : "")}>
      <IconButton color="primary" onClick={toggleSidebar}>
        {collapsed ? (
          <KeyboardDoubleArrowRightIcon />
        ) : (
          <KeyboardDoubleArrowLeftIcon />
        )}
      </IconButton>
    </div>
  );
};
