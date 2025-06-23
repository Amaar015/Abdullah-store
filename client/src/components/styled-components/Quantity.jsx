import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Quantity = ({ visible }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };
  return (
    <Stack
      direction={"row"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {!visible && (
        <Typography fontSize={"1.1rem"} color="#555" fontWeight={"550"}>
          Quantity
        </Typography>
      )}

      <Stack direction={"row"} border={"1px solid #D1D5DB"}>
        <button className="quantity-btn" onClick={handleDecrement}>
          <RemoveIcon />
        </button>
        <div
          style={{
            padding: "0.5rem 0rem",
            width: "45px",
            fontSize: "18px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {quantity}
        </div>
        <button className="quantity-btn" onClick={handleIncrement}>
          <AddIcon />
        </button>
      </Stack>
    </Stack>
  );
};

export default Quantity;
