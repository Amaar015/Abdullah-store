import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Pagination,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import { recentSearch } from "../../data/data";
import "./style.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { DrawerContent } from "./Drawer";
import { usePagination } from "../../hooks/Pagination";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../utils/cartUtils";
// import {  toggleDrawer } from "./Drawer";
const Product = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    variety: "",
    size: "",
    color: "",
    priceMin: 0,
    priceMax: 9999,
  });
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ] = usePagination(15, recentSearch.length);

  const handleAddCart = (product) => {
    addToCart(product);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setOpen(false);
      }
      // Apply here filter
      const result = recentSearch.filter((products) => {
        const matchCategory = filters.category
          ? products.category.toLowerCase() === filters.category.toLowerCase()
          : true;
        const matchVatriety = filters.variety
          ? products.category.toLowerCase() === filters.category.toLowerCase()
          : true;
        const matchColor = filters.color
          ? products.category.toLowerCase() === filters.category.toLowerCase()
          : true;
        const matchSize = filters.size
          ? products.category.toLowerCase() === filters.category.toLowerCase()
          : true;
        const matchPrice =  products.price >= filters.priceMin && products.price <=  
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stack
      spacing={2}
      padding={{ xs: "4rem 1rem", md: "4rem 4rem" }}
      bgcolor={"#fff"}
      display={"flex"}
      justifyContent={"center"}
      direction={"row"}
    >
      {/* Fillter section */}
      <Stack display={{ xs: "none", md: "inline" }} width={"25%"}>
        <DrawerContent
          width={"100%"}
          onCloseDrawer={() => setOpen(false)}
          filter={filters}
          setFilter={setFilters}
        />
      </Stack>
      {/* Product section */}
      <Stack
        width={{ xs: "100%", md: "75%" }}
        spacing={2}
        padding={"1.2rem 0rem"}
      >
        <Stack
          flexDirection={"row"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={{ xs: "space-between", md: "start" }}
        >
          <Typography fontSize={"1rem"}>Home/Products</Typography>
          <Stack
            direction={"row"}
            display={{ xs: "flex", md: "none" }}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={"0.3rem"}
            cursor="pointer"
            onClick={() => setOpen(true)}
          >
            <FilterListIcon />
            <Typography>Filters</Typography>
          </Stack>
          <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <DrawerContent
              width={"250px"}
              onCloseDrawer={() => setOpen(false)}
              filter={filters}
              setFilter={setFilters}
            />
          </SwipeableDrawer>
        </Stack>
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"1.5rem"}
          className="product-card"
        >
          {(() => {
            const displayPosts = [];
            for (let i = startPageIndex; i <= endPageIndex; i++) {
              const data = recentSearch[i];
              if (!data) continue;
              displayPosts.push(
                <motion.div
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Stack className="card">
                    <div className="card-icon">
                      <IconButton
                        sx={{
                          bgcolor: "#eee",
                          "&:hover": { bgcolor: "#fff" },
                          width: "2rem",
                          height: "2rem",
                        }}
                        onClick={() => handleAddCart(data)}
                      >
                        {data.inCart ? (
                          <ShoppingBagIcon sx={{ color: "#6a5acd" }} />
                        ) : (
                          <ShoppingBagOutlinedIcon
                            sx={{
                              color: "#444",
                              "&:hover": { color: "#6a5acd" },
                            }}
                          />
                        )}
                      </IconButton>
                      <IconButton
                        sx={{
                          bgcolor: "#eee",
                          "&:hover": { bgcolor: "#fff" },
                          width: "2rem",
                          height: "2rem",
                        }}
                      >
                        {data.liked ? (
                          <FavoriteIcon sx={{ color: "#6a5acd" }} />
                        ) : (
                          <FavoriteBorderIcon
                            sx={{
                              color: "#444",
                              "&:hover": { color: "#6a5acd" },
                            }}
                          />
                        )}
                      </IconButton>
                    </div>
                    <img src={data.image} alt={data.name} />
                    <Stack
                      textAlign="center"
                      spacing={"0.3rem"}
                      mt={"0.5rem"}
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/card-detail/${data.id}`);
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontSize="1.2rem"
                        fontWeight="550"
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        variant="span"
                        fontSize="1.1rem"
                        fontWeight="bold"
                        color="#6a5acd"
                      >
                        ${data.price}
                      </Typography>
                    </Stack>
                  </Stack>
                </motion.div>
              );
            }
            return displayPosts;
          })()}

          {/* Pagination below */}
          <Pagination
            style={{ marginTop: "2rem" }}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#6a5acd",
                borderColor: "#6a5acd",
              },
              "& .Mui-selected": {
                backgroundColor: "#6a5acd !important",
                color: "#fff !important",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "#6a5acd",
                color: "#fff",
              },
            }}
            count={totalPages}
            onChange={(event, value) => displayPage(value)}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Product;
