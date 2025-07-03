import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

import men from "../../assets/men-suits-4.webp";
import "./Home.css";
import { Navigation } from "swiper/modules";
import { recentSearch } from "../../data/data";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../utils/cartUtils";
import { NextArrow, PrevArrow } from "../styled-components/SliderButtons";
const NewArrivals = () => {
  const navigate = useNavigate();
  const handleNaigate = () => {
    navigate("/products");
  };
  const handleAddCart = (product) => {
    addToCart(product);
  };
  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4, // or however many
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Stack height={"100%"} width={"100%"} padding={"4rem 0rem 2rem 0rem"}>
      <Typography
        textAlign={"center"}
        fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.5rem" }}
        fontWeight={"bold"}
      >
        New Arrivals
      </Typography>
      <Stack
        padding={{ xs: "2rem 1rem", sm: "2rem 2rem", md: "2rem 4rem" }}
        className="new-arrivals"
        display={"flex"}
        justifyContent={"center"}
      >
        <Slider {...settings}>
          {recentSearch.map((data) => (
            <Stack key={data.id} className="card">
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
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/card-detail/${data.id}`);
                }}
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
            </Stack>
          ))}
        </Slider>
      </Stack>
      <Stack
        padding={{ xs: "2rem 1rem", sm: "2rem 2rem", md: "2rem 4rem" }}
        display={"flex"}
        gap={"1rem"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <div className="categories">
          <img
            style={{ filter: "grayscale(60%)" }}
            src={
              "https://st5.depositphotos.com/20363444/62419/i/450/depositphotos_624197130-stock-photo-full-length-fashionable-gay-couple.jpg"
            }
            alt=""
          />
          <div className="category-name">
            <span>Man</span>
            <button className="shop-now" onClick={handleNaigate}>
              Shop now <ArrowForwardIcon />
            </button>
          </div>
        </div>
        <div className="categories">
          <img
            style={{ filter: "grayscale(60%)" }}
            src={
              "https://media.istockphoto.com/id/852209050/photo/happy-women-shopping-at-the-mall-and-pointing-at-a-window-shop.jpg?s=170667a&w=0&k=20&c=WxXjZAj1F-VJihQmUOTpqCI-IL8GOiV8fcfVdb68COA="
            }
            alt=""
          />
          <div className="category-name">
            <span>Women</span>
            <button className="shop-now" onClick={handleNaigate}>
              Shop now <ArrowForwardIcon />
            </button>
          </div>
        </div>
        <div className="categories">
          <img
            style={{ filter: "grayscale(60%)" }}
            src={
              "https://st5.depositphotos.com/3584053/66249/i/450/depositphotos_662491462-stock-photo-shopper-fashion-child-shopping-portrait.jpg"
            }
            alt=""
          />
          <div className="category-name">
            <span>Kids</span>
            <button className="shop-now" onClick={handleNaigate}>
              Shop now <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </Stack>
    </Stack>
  );
};

export default NewArrivals;
