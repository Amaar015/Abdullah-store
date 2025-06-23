import { Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { recentSearch } from "../data/data";
import Quantity from "../components/styled-components/Quantity";
import DeleteIcon from "@mui/icons-material/Delete";
import { Buttons, Buttonss } from "../components/styled-components/Buttons";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartItems = recentSearch.filter((item) => item.inCart === true);

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const shipping = 5; // Example fixed shipping or you can make it dynamic
  const total = subtotal + shipping;

  return (
    <Stack
      direction={"row"}
      display={"flex"}
      // alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      gap={"2rem"}
      // width={"100%"}
      padding={{
        xs: "2rem 0.5rem 4rem 0.5rem",
        sm: "4rem 2rem",
        md: "4rem 4rem",
      }}
    >
      <Stack spacing={4} width={{ xs: "100%", sm: "80%", md: "50%" }}>
        {cartItems.map((item) => (
          <Stack
            key={item.id}
            direction={"row"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
            flexWrap={{ xs: "wrap", sm: "nowrap" }}
          >
            <Stack
              // justifyContent={{ xs: "center" }}
              direction={"row"}
              spacing={2}
              width={"100%"}
              alignItems={"center"}
              className="checkout-detail"
            >
              <img src={item.image} alt={item.name} />
              <Stack spacing={2}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  {item.name}
                </Typography>
                <Stack>
                  <Typography
                    fontSize={"1rem"}
                    textTransform={"capitalize"}
                    color="#777"
                  >
                    Color: {item.colors}
                  </Typography>
                  <Typography fontSize={"1rem"} color="#777">
                    Size: {item.size}
                  </Typography>
                </Stack>
                <Quantity visible={true} />
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "column" }}
              height={{ xs: "50px", sm: "175px" }}
              width={{ xs: "100%" }}
              display={"flex"}
              paddingRight={"2rem"}
              justifyContent={"space-between"}
              alignItems={"center"}
              // marginLeft={{ xs: "-4.5rem" }}
            >
              <Typography fontWeight={"bold"} color="#6a5acd">
                ${item.price}
              </Typography>
              <IconButton>
                <DeleteIcon sx={{ color: "#777" }} />
              </IconButton>
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Stack
        width={{ xs: "100%", sm: "80%", md: "25%" }}
        height={"100%"}
        bgcolor={"#eee"}
        padding={"2rem"}
        spacing={2}
      >
        <Typography fontSize={"1.2rem"}>Summary</Typography>
        <Divider sx={{ height: "1px", bgcolor: "#999" }} />
        <Stack spacing={1} direction={"row"} justifyContent={"space-between"}>
          <Typography>Subtotal</Typography>

          <Typography>
            {subtotal ? `${subtotal.toFixed(2)}` : "00.00"}{" "}
          </Typography>
        </Stack>
        <Stack spacing={1} direction={"row"} justifyContent={"space-between"}>
          <Typography>Tax</Typography>
          <Typography>{false ? `${tax}` : "00.00"} </Typography>
        </Stack>
        <Stack spacing={1} direction={"row"} justifyContent={"space-between"}>
          <Typography>Shipping</Typography>
          <Typography>${shipping}</Typography>
        </Stack>
        <Divider sx={{ height: "1px", bgcolor: "#999" }} />
        <Stack spacing={1} direction={"row"} justifyContent={"space-between"}>
          <Typography>Total</Typography>
          <Typography>{total.toFixed(2)}</Typography>
        </Stack>
        <Buttonss title={"Checkout"} link={"/checkout"} />
      </Stack>
    </Stack>
  );
};

export default Cart;
