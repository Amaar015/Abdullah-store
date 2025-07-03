import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledStack } from "./styled-components/navStyled";
import Search from "./Search";
import Cart from "./Cart";
import { NavItems } from "../data/data";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReceiptIcon from "@mui/icons-material/Receipt";
import EditIcon from "@mui/icons-material/Edit";

const Navbar = () => {
  const isLogin = false;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const handleOpen = () => setOpen(true);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    setActiveModal(null); // close dropdown type
  };
  const openMenu = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
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
  const handleNavigate = (to) => {
    navigate(to);
  };
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      position={"relative"}
      zIndex={1}
      justifyContent={"space-between"}
      sx={{
        bgcolor: "#fff",
        padding: { md: "0.8rem 4rem", xs: "0.8rem 1rem" },
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.12)",
      }}
    >
      <Typography fontSize={{ sm: "2rem", xs: "1.5rem" }} fontWeight={"bold"}>
        Emmable
      </Typography>
      <StyledStack sx={{ display: { xs: "none", md: "flex" } }}>
        {NavItems.slice(0, 4).map((navItems) => (
          <Link
            key={navItems.id}
            to={navItems.link}
            className="link"
            style={{ fontSize: "1.2rem", color: "#333" }}
          >
            {navItems.name}
          </Link>
        ))}
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
          <>
            <IconButton
              aria-controls={openMenu ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClickMenu}
              sx={{ width: "1.5rem", fontSize: "1.2rem", color: "#333" }}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openMenu}
              onClose={handleCloseMenu}
              onClick={handleCloseMenu}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseMenu}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <ShoppingBagIcon /> My Orders
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseMenu}>
                <ListItemIcon>
                  <ReceiptIcon fontSize="small" />
                </ListItemIcon>
                Review
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <IconButton
            onClick={() => handleNavigate("/login")}
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
          height={"250px"}
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
          {NavItems.map((navItems) => (
            <Link
              key={navItems.id}
              to={navItems.link}
              className="link"
              style={{ fontSize: "1.2rem", color: "#333" }}
            >
              {navItems.name}
            </Link>
          ))}
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
