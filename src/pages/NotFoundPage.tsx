import { Box } from "@mui/material";
import React from "react";

export const NotFoundPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        height: "100%",
      }}
    >
      Страница не найдена
    </Box>
  );
};
