import { Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { recentSearch } from "../data/data";
import Quantity from "../components/styled-components/Quantity";
import "../components/styled-components/Style.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import Comments from "../sections/Comments";
import { addToCart } from "../utils/cartUtils";
const CardDetails = () => {
  const product = recentSearch.find((item) => item.id === 4);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setselectedColor] = useState("brown");
  const handleAddCart = (product) => {
    addToCart(product);
  };
  return (
    <>
      <Stack
        width={"100%"}
        direction={"row"}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={"2rem"}
        padding={"3rem 0rem"}
      >
        <Stack width={{ xs: "95%", sm: "80%", md: "40%" }} spacing={2}>
          <Stack
            width={"100%"}
            direction={"row"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={"10px"}
          >
            {product.images?.map((image) => (
              <img src={image} alt="" className="card-detail-image" />
            ))}
          </Stack>
          <Stack spacing={2} padding={"1.5rem"}>
            <Typography fontSize={"1.5rem"} fontWeight={"bold"}>
              Description
            </Typography>
            <Divider sx={{ height: "1px", bgcolor: "#D1D5DB" }} />
            <Typography fontSize={"16px"} color="#6B7280">
              {product.description}
            </Typography>
            {product.benefits.map((benefit) => (
              <Typography fontSize={"16px"} color="#6B7280">
                ✔️ {benefit}
              </Typography>
            ))}
          </Stack>
        </Stack>
        <Stack spacing={3} width={{ xs: "95%", sm: "80%", md: "40%" }}>
          <div>
            <Typography
              textTransform={"uppercase"}
              fontSize={"16px"}
              color="#6B7280"
              fontWeight={"550"}
            >
              {product.category}s {product.variety}
            </Typography>
            <Typography fontWeight={"bold"} fontSize={"2rem"} color="#333">
              {product.name}
            </Typography>
          </div>
          <Stack
            padding={"0rem 2rem 0rem 0rem"}
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack
              direction={"row"}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Typography
                sx={{ textDecoration: "line-through" }}
                fontSize={"18px"}
                fontWeight={"550"}
                color="#6B7280"
              >
                ${product.price_before}
              </Typography>
              <Typography fontSize={"24px"} fontWeight={"550"} color="#6a5acd">
                ${product.price}
              </Typography>
            </Stack>
            <Typography>✔️ In Stock</Typography>
          </Stack>
          <Divider sx={{ height: "1px", bgcolor: "#D1D5DB" }} />{" "}
          <Stack spacing={2}>
            <Typography fontSize={"1.1rem"} color="#555" fontWeight={"550"}>
              Colors ({" "}
              <span
                style={{
                  fontWeight: "lighter",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  color: "#6B7280",
                }}
              >
                {selectedColor}
              </span>{" "}
              )
            </Typography>
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"start"}
              alignItems={"center"}
              flexWrap={"wrap"}
              gap={"0.8rem"}
            >
              {product.color.map((data) => (
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
          <Divider sx={{ height: "1px", bgcolor: "#D1D5DB" }} />{" "}
          <Stack spacing={2} marginTop={"1rem!important"}>
            <Typography fontSize={"1.1rem"} color="#555" fontWeight={"550"}>
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
              {product.size.map((data) => (
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
          <Divider sx={{ height: "1px", bgcolor: "#D1D5DB" }} />
          {/* <Quantity product={product} visible={false} /> */}
          <Typography
            fontFamily={"12px"}
            padding={"0.4rem 1rem"}
            bgcolor={"#eee"}
            textAlign={"center"}
            border={"1px solid #D1D5DB"}
          >
            Exclusive Offer: Get 1 free when you buy 4.
          </Typography>
          <button
            className="quantity-button"
            onClick={() => handleAddCart(product)}
          >
            Add to Cart
          </button>
          <Stack
            direction={"row"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={"10px"}
          >
            <Stack
              spacing={1}
              width={"40%"}
              padding={"1rem 1.5rem"}
              bgcolor={"#eee"}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <LocationOnIcon sx={{ color: "#E97451" }} />
                <Typography
                  marginLeft={"10px"}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                >
                  Find in Store
                </Typography>
              </Stack>
              <Typography fontSize={"16px"} color="#666">
                Select a size to find out if it's available in your nearest
                store
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              width={"40%"}
              padding={"1rem 1.5rem"}
              bgcolor={"#eee"}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <HomeIcon sx={{ color: "#E97451" }} />
                <Typography
                  marginLeft={"10px"}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                >
                  Delivery to home
                </Typography>
              </Stack>
              <Typography fontSize={"16px"} color="#666">
                Shipping within 3-5 days. Free shipping on PK orders over $100
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider
          sx={{
            height: "1px",
            bgcolor: "#D1D5DB",
            width: "90%",
          }}
        />
      </Stack>

      {/* Comments */}
      <Comments />
    </>
  );
};

export default CardDetails;
