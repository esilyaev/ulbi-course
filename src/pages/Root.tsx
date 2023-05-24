import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/sidebar";
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export const Root: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </div>
    </>
  );
};
