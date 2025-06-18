import {
  Box,
  Divider,
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  category,
  colors,
  departments,
  PriceRange,
  recentSearch,
  size,
} from "../../data/data";
import "./style.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Drawer, toggleDrawer } from "./Drawer";
const Product = () => {
  const [open, setOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setselectedColor] = useState("");
  const [selectedRanges, setSelectedRanges] = useState("");
  const handleChange = (event) => {
    setSelectedDepartment(event.target.value);
  };
  const handleChangeRanges = (event) => {
    setSelectedRanges(event.target.value); // will be "100-200"
    const [min, max] = event.target.value.split("-").map(Number);
    filterProductsByPrice(min, max);
  };

  const filterProductsByPrice = (min, max) => {
    console.log(min, max);
  };

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleReset = () => {
    setSelectedDepartment("");
    setSelectedCategory("");
    setSelectedSize("");
    setselectedColor("");
    setSelectedRanges("");
  };
  console.log(
    selectedCategory,
    selectedDepartment,
    selectedSize,
    selectedColor,
    selectedRanges
  );
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
      <Stack
        width={"25%"}
        spacing={2}
        height={"100%"}
        padding={"1rem 0rem"}
        display={{ xs: "none", md: "inline" }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={"1.2rem"}>Filter:</Typography>
          <button
            style={{
              fontSize: "1.2rem",
              textDecoration: "underline",
              color: "#6a5acd",
              background: "none",
              cursor: "pointer",
            }}
            onClick={handleReset}
          >
            Reset All
          </button>
        </Stack>
        {/* Show here filtered option components */}
        <Divider
          sx={{
            marginTop: "1rem",
            height: "1px",
            backgroundColor: "#888",
          }}
        />
        <Stack spacing={2}>
          <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
            Department
          </Typography>
          <ul>
            {departments.map((data) => (
              <li style={{ listStyle: "none" }} key={data.id}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    //   spacing={"0.5rem"}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Radio
                      checked={selectedDepartment === `${data.title}`}
                      onChange={handleChange}
                      value={data.title}
                      name="radio-buttons"
                      slotProps={{ input: { "aria-label": `${data.title}` } }}
                    />
                    <Typography>{data.title}</Typography>
                  </Stack>
                  <Typography fontSize={"18px"} color="#777">
                    {data.totalCount}
                  </Typography>
                </Stack>
              </li>
            ))}
          </ul>
        </Stack>
        {/* Category */}
        <Divider
          sx={{
            marginTop: "1rem",
            height: "1px",
            backgroundColor: "#888",
          }}
        />
        <Stack spacing={2}>
          <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
            Category
          </Typography>
          <ul>
            {category.map((data) => (
              <li style={{ listStyle: "none" }} key={data.id}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    //   spacing={"0.5rem"}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Radio
                      checked={selectedCategory === `${data.title}`}
                      onChange={handleChangeCategory}
                      value={data.title}
                      name="radio-buttons"
                      slotProps={{ input: { "aria-label": `${data.title}` } }}
                    />
                    <Typography>{data.title}</Typography>
                  </Stack>
                  <Typography fontSize={"18px"} color="#777">
                    {data.totalCount}
                  </Typography>
                </Stack>
              </li>
            ))}
          </ul>
        </Stack>
        {/* Size */}
        <Divider
          sx={{
            marginTop: "1rem",
            height: "1px",
            backgroundColor: "#888",
          }}
        />
        <Stack spacing={2}>
          <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
            Size
          </Typography>
          <Stack
            direction={"row"}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={"0.8rem"}
          >
            {size.map((data) => (
              <button
                className={
                  selectedSize === data ? "size-btn selected" : "size-btn"
                }
                onClick={() => setSelectedSize(data)}
              >
                {data}
              </button>
            ))}
          </Stack>
        </Stack>
        {/* Colors */}
        <Divider
          sx={{
            marginTop: "1rem",
            height: "1px",
            backgroundColor: "#888",
          }}
        />
        <Stack spacing={2}>
          <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
            Colors
          </Typography>
          <Stack
            direction={"row"}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={"0.8rem"}
          >
            {colors.map((data) => (
              <button
                className={
                  selectedColor === data
                    ? "color-btn selected-color"
                    : "color-btn"
                }
                style={{ background: `${data}` }}
                onClick={() => setselectedColor(data)}
              ></button>
            ))}
          </Stack>
        </Stack>
        {/* Price */}
        <Divider
          sx={{
            marginTop: "1rem",
            height: "1px",
            backgroundColor: "#888",
          }}
        />
        <Stack spacing={2}>
          <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
            Price
          </Typography>
          <ul>
            {PriceRange.map((data) => {
              const rangeValue = `${data.minPrice}-${data.maxPrice}`;
              return (
                <li style={{ listStyle: "none" }} key={data.id}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Stack direction={"row"} alignItems={"center"}>
                      <Radio
                        checked={selectedRanges === rangeValue}
                        onChange={handleChangeRanges}
                        value={rangeValue}
                        name="radio-buttons"
                        inputProps={{
                          "aria-label": `${data.minPrice}, ${data.maxPrice}`,
                        }}
                      />
                      <Typography>
                        ${data.minPrice} -{" "}
                        {data.minPrice > 200 ? "Up" : `$${data.maxPrice}`}
                      </Typography>
                    </Stack>
                    <Typography fontSize={"18px"} color="#777">
                      {data.totalCount}
                    </Typography>
                  </Stack>
                </li>
              );
            })}
          </ul>
        </Stack>
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
            onClick={toggleDrawer("right", open)}
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
            <DrawerContent onCloseDrawer={() => setOpen(false)} />
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
          {recentSearch.map((data) => (
            <div className="card">
              <div className="card-icon">
                <IconButton
                  sx={{
                    bgcolor: "#eee",
                    "&:hover": { bgcolor: "#fff" },
                    width: "2rem",
                    height: "2rem",
                  }}
                >
                  {data.inCart ? (
                    <ShoppingBagIcon
                      sx={{ color: data.inCart ? "#6a5acd" : "#444" }}
                    />
                  ) : (
                    <ShoppingBagOutlinedIcon
                      sx={{ color: "#444", "&:hover": { color: "#6a5acd" } }}
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
                  {data.inCart ? (
                    <FavoriteIcon
                      sx={{ color: data.inCart ? "#6a5acd" : "#444" }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{ color: "#444", "&:hover": { color: "#6a5acd" } }}
                    />
                  )}
                </IconButton>
              </div>
              <img src={data.image} alt="" />
              <Stack
                textAlign={"center"}
                spacing={"0.3rem"}
                marginTop={"0.5rem"}
              >
                <Typography variant="h5" fontSize={"1.2rem"} fontWeight={"550"}>
                  {data.name}
                </Typography>
                <Typography
                  variant="span"
                  fontSize={"1.1rem"}
                  fontWeight={"bold"}
                  color="#6a5acd"
                >
                  ${data.price}
                </Typography>
              </Stack>
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Product;

const DrawerContent = () => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={() => setOpen(false)}
    onKeyDown={() => setOpen(false)}
  >
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);
