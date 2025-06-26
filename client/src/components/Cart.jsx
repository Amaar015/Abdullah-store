import {
  Box,
  Divider,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { recentSearch } from "../data/data";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Buttons } from "./styled-components/Buttons";
import { getCart } from "../utils/cartUtils";
import empty_cart from "../assets/icons/empty-cart.png";
const Cart = ({ open, handleClose, handleOpen }) => {
  const Carts = getCart();
  // Total Price
  const totalPrice = Carts.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "end",
          marginTop: { xs: "4rem", md: "7rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "90%", sm: "400px" },
            bgcolor: "#fff",
            height: { xs: "440px", sm: "400px" },
            padding: "0.5rem 1rem",
            gap: "0.5rem",
            flexDirection: "column",
          }}
        >
          <Stack
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
            marginTop={"1rem"}
          >
            <Typography color="#555" fontWeight={"500"} fontSize={"1.2rem"}>
              Cart ({Carts.length})
            </Typography>
            {Carts.length !== 0 && (
              <Link
                to={"/cart"}
                onClick={handleClose}
                style={{ textDecoration: "none" }}
              >
                View Cart
              </Link>
            )}
          </Stack>
          <Divider color="#888" />

          {Carts.length === 0 ? (
            <Stack
              marginTop={"3rem"}
              padding={"0.5rem 1rem"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                src={empty_cart}
                alt="Empty-cart"
                style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
              />
            </Stack>
          ) : (
            <>
              {Carts.slice(0, 2).map((cart) => (
                <Stack
                  marginTop={"0.5rem"}
                  padding={"0.5rem 1rem"}
                  gap={"2rem"}
                  justifyContent={{ xs: "space-between" }}
                  alignItems={"center"}
                  direction={"row"}
                >
                  <img
                    src={cart.image}
                    alt="product-cart.img"
                    style={{ width: "4rem", height: "4rem" }}
                  />
                  <Stack width={{ xs: "150px", sm: "180px" }}>
                    <Typography fontSize={"1rem"} fontWeight={"540"}>
                      {cart.name}
                    </Typography>
                    <Typography fontSize={"0.8rem"} color="#777">
                      {cart.category}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <IconButton sx={{ marginLeft: { xs: "0rem", sm: "2rem" } }}>
                      <DeleteIcon sx={{ "&:hover": { color: "#d9534f" } }} />
                    </IconButton>
                    <Typography fontSize={"1rem"} fontWeight={"530"}>
                      $ {cart.price}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </>
          )}
          {Carts.length !== 0 && (
            <>
              <Divider color="#888" />
              <Stack
                justifyContent={"space-between"}
                alignItems={"center"}
                direction={"row"}
                padding={"0.5rem 1rem"}
                marginBottom={"1rem"}
              >
                <Typography color="#555" fontWeight={"500"} fontSize={"1.2rem"}>
                  Cart Subtotal
                </Typography>

                <Typography color="#333" fontSize={"1rem"} fontWeight={"bold"}>
                  $ {totalPrice.toFixed(2)}
                </Typography>
              </Stack>
              <Stack alignItems={"center"}>
                <Buttons title={"Checkout"} />
              </Stack>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
