import { Stack, Typography } from "@mui/material";
import React from "react";

const Collectiondetails = () => {
  return (
    <Stack padding={{ xs: "3rem 1rem", sm: "3rem 2rem", md: "3rem 4rem" }}>
      <Typography
        variant="span"
        textAlign={"center"}
        fontSize={{ xs: "1rem" }}
        color="#6a5acd"
      >
        TOP SELLING
      </Typography>
      <Typography
        variant="h3"
        textAlign={"center"}
        fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.2rem" }}
        fontWeight={"bold"}
      >
        Top weekend Sellers
      </Typography>
    </Stack>
  );
};

export default Collectiondetails;
