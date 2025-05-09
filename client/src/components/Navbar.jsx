import { Stack, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1),
  },
}));

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        padding: { md: "0.8rem 2rem", xs: "0.8rem 1rem" },
      }}
    >
      <Typography fontSize={{ sm: "2rem", xs: "1.5rem" }} fontWeight={"bold"}>
        Emmable
      </Typography>
      <StyledStack sx={{ display: { xs: "none", md: "flex" } }}>
        <Link
          to={"/about"}
          className="link"
          style={{ fontSize: "1.2rem", color: "#333" }}
        >
          Home
        </Link>
        <Link
          to={"/help"}
          className="link"
          style={{ fontSize: "1.2rem", color: "#333" }}
        >
          Products
        </Link>
        <Link
          to={"/about"}
          className="link"
          style={{ fontSize: "1.2rem", color: "#333" }}
        >
          Our Blogs
        </Link>
        <Link
          to={"/help"}
          className="link"
          style={{ fontSize: "1.2rem", color: "#333" }}
        >
          Contact Us
        </Link>
      </StyledStack>

      <StyledStack>
        <Link
          to={"/"}
          className="link"
          style={{ fontSize: "1.2rem", color: "#333" }}
        >
          <SearchIcon />
        </Link>
        <Link
          to={"/"}
          className="link"
          style={{ fontSize: "1.2rem", color: "#333" }}
        >
          <ShoppingBagIcon />
        </Link>
        {true ? (
          <Link
            to={"/"}
            className="link"
            style={{ fontSize: "1.2rem", color: "#333" }}
          >
            <AccountCircleIcon />
          </Link>
        ) : (
          <Link
            to={"/"}
            className="link"
            style={{ fontSize: "1.2rem", color: "#333" }}
          >
            <LoginIcon />
          </Link>
        )}
        <Link
          to={"/"}
          className="link"
          style={{
            fontSize: "1.2rem",
            color: "#333",
            display: { xs: "visible", sm: "none" },
          }}
        >
          <MenuIcon />
        </Link>
      </StyledStack>
    </Stack>
  );
};

export default Navbar;
Navbar;
