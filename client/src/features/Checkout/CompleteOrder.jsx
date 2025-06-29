import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import shopping_bag from "../../assets/icons/bags.png";
import { useNavigate } from "react-router-dom";
const CompleteOrder = () => {
  const navigate = useNavigate();
  return (
    <Stack
      spacing={4}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"4rem 0rem"}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "3.2rem",
          height: "3.2rem",
          overflow: "hidden",
          padding: "1rem",
          border: "1px solid #888",
          borderRadius: "50%",
        }}
      >
        <img
          src={shopping_bag}
          alt=""
          style={{ objectFit: "contain", width: "3rem", height: "3rem" }}
        />
      </div>
      <Typography
        fontSize={{ xs: "1.6rem", sm: "2.5rem" }}
        fontWeight={"bold"}
        lineHeight={1}
      >
        Thanks for you order
      </Typography>
      <Typography
        fontSize={"1.1rem"}
        color="#777"
        width={{ xs: "90%", sm: "60%", md: "35%" }}
        textAlign={"center"}
      >
        We're excited to have you as a valued customer. Your purchase is being
        carefully processed and will be shipped shortly. We hope you enjoy your
        products and look forward to serving you again soon.
      </Typography>
      <Button
        variant="outlined"
        sx={{
          width: "200px",
          height: "40px",
          backgroundColor: "#6a5acd",
          color: "#fff",
          borderColor: "#6a5acd",
          "&:hover": {
            color: "#6a5acd",
            borderColor: "#6a5acd",
            backgroundColor: "transparent",
          },
        }}
        onClick={() => navigate("/products")}
      >
        Go back shopping
      </Button>
    </Stack>
  );
};

export default CompleteOrder;
