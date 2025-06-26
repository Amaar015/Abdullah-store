import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  decrementProduct,
  getCart,
  incrementProduct,
} from "../../utils/cartUtils";

const Quantity = ({ visible, product }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const handleIncrement = () => {
    incrementProduct(product.id);
    const updatedCart = getCart();
    const updatedProduct = updatedCart.find((item) => item.id === product.id);
    setQuantity(updatedProduct?.quantity || 1);
  };

  const handleDecrement = () => {
    decrementProduct(product.id);
    const updatedCart = getCart();
    const updatedProduct = updatedCart.find((item) => item.id === product.id);
    setQuantity(updatedProduct?.quantity || 1);
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
        <div className="number-quantity">{quantity}</div>
        <button className="quantity-btn" onClick={handleIncrement}>
          <AddIcon />
        </button>
      </Stack>
    </Stack>
  );
};

export default Quantity;
