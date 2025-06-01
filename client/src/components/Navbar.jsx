import { IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledStack } from "./styled-components/navStyled";
import Search from "./Search";
import Cart from "./Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setActiveModal(null); // close dropdown type
  };

  const [activeModal, setActiveModal] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      if (
        (window.innerWidth < 900 && activeModal === "nav") ||
        activeModal === "cart" ||
        activeModal === "search"
      ) {
        setActiveModal(null); // Only set to false if it's currently true
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeModal]); // dependency: check isNav during resize
  const toggleDropdown = (type) => {
    if (type === "search" || type === "cart") {
      setOpen(true); // open modal for both search and cart
    } else {
      setOpen(false); // close modal for other types
    }
    setActiveModal((prev) => (prev === type ? null : type));
  };
  console.log({ ActiveModal_______1: activeModal });
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        padding: { md: "0.8rem 4rem", xs: "0.8rem 1rem" },
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
        <IconButton
          sx={{ width: "1.5rem", fontSize: "1.2rem", color: "#333" }}
          onClick={() => toggleDropdown("search")}
        >
          <SearchIcon />
        </IconButton>
        <IconButton
          sx={{ width: "1.5rem", fontSize: "1.2rem", color: "#333" }}
          onClick={() => toggleDropdown("cart")}
        >
          <ShoppingBagIcon />
        </IconButton>
        {true ? (
          <IconButton
            sx={{ width: "1.5rem", fontSize: "1.2rem", color: "#333" }}
          >
            <AccountCircleIcon />
          </IconButton>
        ) : (
          <IconButton
            sx={{ width: "1.5rem", fontSize: "1.2rem", color: "#333" }}
          >
            <LoginIcon />
          </IconButton>
        )}
        <IconButton
          onClick={() => toggleDropdown("nav")}
          sx={{
            display: { xs: "block", md: "none" },
            width: "1.5rem",
            fontSize: "1.2rem",
            color: "#333",
          }}
        >
          <MenuIcon />
        </IconButton>
      </StyledStack>
      {activeModal === "nav" && (
        <Stack
          height={"70%"}
          width={{ xs: "250px", sm: "300px" }}
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          position={"absolute"}
          top={"4rem"}
          right={{ xs: "1rem", sm: "2rem" }}
          padding={"3rem 2rem"}
          spacing={"1.5rem"}
          zIndex={1300}
          bgcolor={"#fff"}
        >
          <Link
            to={"/help"}
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
            to={"/help"}
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
          <Link
            to={"/help"}
            className="link"
            style={{ fontSize: "1.2rem", color: "#333" }}
          >
            About Us
          </Link>
          <Link
            to={"/help"}
            className="link"
            style={{ fontSize: "1.2rem", color: "#333" }}
          >
            Helps
          </Link>
        </Stack>
      )}
      {activeModal === "search" && (
        <Search open={open} handleClose={handleClose} handleOpen={handleOpen} />
      )}
      {activeModal === "cart" && (
        <Cart open={open} handleClose={handleClose} handleOpen={handleOpen} />
      )}
    </Stack>
  );
};

export default Navbar;
Navbar;
