import { Box, Divider, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { recentSearch } from "../data/data";
import { Link } from "react-router-dom";

const Cart = ({ open, handleClose, handleOpen }) => {
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
            width: { xs: "80%", sm: "250px" },
            bgcolor: "#fff",
            height: "300px",
            padding: "0.5rem 1rem",
            gap: "0.5rem",
            flexDirection: "column",
          }}
        >
          <Stack
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
            <Typography color="#555" fontWeight={"bold"} fontSize={"1.2rem"}>
              Cart (4)
            </Typography>
            <Link to={"/check-out"} style={{ textDecoration: "none" }}>
              View Cart
            </Link>
          </Stack>
          <Divider color="#888" />
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
