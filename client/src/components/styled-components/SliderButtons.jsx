import React from "react";

import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Custom Previous Arrow
export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: { xs: "0px", sm: "-30px" },
        transform: "translateY(-50%)",
        backgroundColor: "#fafafa",
        width: "2rem",
        height: "2rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        "&:hover": {
          backgroundColor: "#6a5acd",
          color: "#fff",
        },
        zIndex: 2,
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};

// Custom Next Arrow
export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: { xs: "0px", sm: "-30px" },
        transform: "translateY(-50%)",
        backgroundColor: "#fafafa",
        width: "2rem",
        height: "2rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        "&:hover": {
          backgroundColor: "#6a5acd",
          color: "#fff",
        },
        zIndex: 2,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};
