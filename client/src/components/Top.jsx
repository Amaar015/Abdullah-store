import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        padding: { md: "0.6rem 4rem", sm: "0.6rem 2rem" },
        display: { xs: "none", md: "flex" },
        bgcolor: "#6a5acd",
        color: "#eee",
      }}
    >
      <Typography fontSize={"0.9rem"}>Call us: (+92) 332 3498336</Typography>
      <Typography fontSize={"0.9rem"}>
        <span style={{ fontWeight: "bold" }}>Take 35% </span>
        off when you spend $99 or more with code
        <span style={{ fontWeight: "bold" }}> "Abdullah Store"</span>
      </Typography>
      <Stack
        spacing={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Link to={"/about"} className="link" style={{ fontSize: "0.9rem" }}>
          About Us
        </Link>
        <Link to={"/help"} className="link" style={{ fontSize: "0.9rem" }}>
          Helps
        </Link>
      </Stack>
    </Stack>
  );
};

export default Top;
