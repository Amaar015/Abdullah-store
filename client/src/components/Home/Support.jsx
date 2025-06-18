import { Stack, Typography } from "@mui/material";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

const Support = () => {
  return (
    <Stack padding={"3rem 0rem"}>
      <Typography
        variant="span"
        textAlign={"center"}
        fontSize={{ xs: "1rem" }}
        color="#6a5acd"
      >
        Client Support
      </Typography>
      <Typography
        variant="h3"
        textAlign={"center"}
        fontSize={{ xs: "1.4rem", sm: "1.8rem", md: "2.2rem" }}
        fontWeight={{ xs: "500", sm: "bold" }}
      >
        Product Service and Support
      </Typography>
      <Stack
        padding={{ xs: "2rem 0rem 1rem 2rem", sm: "2rem 4rem 1rem 4rem" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="1rem"
      >
        <Stack
          spacing={1}
          width={"300px"}
          alignItems="center"
          textAlign="center"
        >
          <LocalShippingIcon
            sx={{ color: "#6a5acd", fontSize: "3rem", marginBottom: "1rem" }}
          />
          <Typography fontSize={"1.6rem"} color="#222" fontWeight={"bold"}>
            Free Shipping
          </Typography>
          <Typography fontSize={"1rem"} color="#777">
            When you spend $100+
          </Typography>
        </Stack>
        <Stack
          spacing={1}
          width={"300px"}
          alignItems="center"
          textAlign="center"
        >
          <LocalPhoneIcon
            sx={{ color: "#6a5acd", fontSize: "3rem", marginBottom: "1rem" }}
          />
          <Typography fontSize={"1.6rem"} color="#222" fontWeight={"bold"}>
            Give us a Call
          </Typography>
          <Typography fontSize={"1rem"} color="#777">
            1-234-657-8900
          </Typography>
        </Stack>
        <Stack
          spacing={1}
          width={"300px"}
          alignItems="center"
          textAlign="center"
        >
          <MailIcon
            sx={{ color: "#6a5acd", fontSize: "3rem", marginBottom: "1rem" }}
          />
          <Typography fontSize={"1.6rem"} color="#222" fontWeight={"bold"}>
            Email us
          </Typography>
          <Typography fontSize={"1rem"} color="#777">
            info@abdullahstore.com
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Support;
