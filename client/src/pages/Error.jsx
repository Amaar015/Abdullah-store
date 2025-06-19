import { Stack, Typography } from "@mui/material";
import React from "react";
import error from "../assets/404.png";
import { Buttonss } from "../components/styled-components/Buttons";
const Error = () => {
  return (
    <Stack
      padding={{ xs: "4rem 0rem" }}
      height={{ xs: "100%", sm: "100vh" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      className="error"
      spacing={1}
    >
      <img src={error} alt="" />
      <Typography
        variant="h3"
        textAlign={"center"}
        fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.2rem" }}
        fontWeight={"bold"}
      >
        That Page Cant Be Found
      </Typography>
      <Typography
        fontSize={"16px"}
        width={{ xs: "90%", sm: "70%", md: "40%" }}
        textAlign={"center"}
        color="#6B7280"
      >
        It looks like nothing was found at this location. Maybe try to search
        for what you are looking for?
      </Typography>
      <Stack width={"200px"} marginTop={"1rem!important"}>
        <Buttonss title={"Go To Homepage"} />
      </Stack>
    </Stack>
  );
};

export default Error;
