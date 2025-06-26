import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { recentSearch } from "../../data/data";

const Ordersummary = ({ handleChange, value, Cart }) => {
  const subtotal = Cart.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );
  const shipping = 5; // Example fixed shipping or you can make it dynamic
  const total = subtotal + shipping;

  const handleClick = () => {
    handleChange(null, value);
  };
  return (
    <Stack
      width={{ xs: "100%", sm: "80%", md: "35%" }}
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
      <button className="btn2" onClick={handleClick}>
        Checkout
      </button>
    </Stack>
  );
};

export default Ordersummary;
