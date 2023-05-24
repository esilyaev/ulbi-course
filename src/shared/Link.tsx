import { LinkProps, Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import cls from "./Link.module.scss";

import React from "react";

export const Link: React.FC<LinkProps> = (props) => {
  return (
    <MuiLink
      className={cls.AppLink}
      component={ReactRouterLink}
      to={props.href ?? "#"}
      {...props}
    />
  );
};
