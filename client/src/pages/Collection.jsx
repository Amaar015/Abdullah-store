import { Stack, Typography } from "@mui/material";
import React from "react";
import { PickUp } from "../data/data";
import Support from "../components/Home/Support";

const Collection = () => {
  return (
    <Stack padding={{ xs: "3rem 1rem", sm: "3rem 3rem", md: "3rem 5rem" }}>
      <Typography
        variant="span"
        textAlign={"center"}
        fontSize={{ xs: "1rem" }}
        color="#6a5acd"
      >
        Collection
      </Typography>
      <Typography
        variant="h3"
        textAlign={"center"}
        fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.2rem" }}
        fontWeight={"bold"}
      >
        Pick-up Point
      </Typography>
      <Stack
        direction={"row"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"2rem"}
        flexWrap={"wrap"}
        padding={"4rem 0rem"}
      >
        {PickUp.map((data) => (
          <Stack
            spacing={2}
            width={{ xs: "250px", sm: "300px" }}
            marginTop={"2rem"}
          >
            <img
              src={data.image}
              alt=""
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "10px",
              }}
            />
            <Stack spacing={"0.1rem"}>
              <Typography fontWeight={"bold"} fontSize={"1.1rem"}>
                {data.title}
              </Typography>
              <Typography fontSize={"0.9rem"} color="#888">
                {data.decription}
              </Typography>
            </Stack>
            <Stack spacing={"0.1rem"}>
              <Typography fontWeight={"bold"} fontSize={"0.8rem"}>
                Operational Hours
              </Typography>
              <Typography fontSize={"0.9rem"} color="#888">
                {data.operation_hours}
              </Typography>
            </Stack>
            <a
              href={data.visit}
              style={{ color: "#6a5acd", textDecoration: "none" }}
            >
              More Details
            </a>
          </Stack>
        ))}
      </Stack>
      <Support />
    </Stack>
  );
};

export default Collection;
