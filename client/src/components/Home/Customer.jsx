import { Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Navigation } from "swiper/modules";
import { recentSearch } from "../../data/data";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const Customer = () => {
  return (
    <Stack
      padding={{ xs: "3rem 1rem", sm: "3rem 2rem", md: "3rem 4rem" }}
      bgcolor={"#eee"}
    >
      <Typography
        variant="span"
        textAlign={"center"}
        fontSize={{ xs: "1rem" }}
        color="#6a5acd"
      >
        OUR CUSTOMERS
      </Typography>
      <Typography
        variant="h3"
        textAlign={"center"}
        fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.2rem" }}
        fontWeight={"bold"}
      >
        What Our Customers Have to Say
      </Typography>
      <Stack
        padding={{ xs: "2rem 1rem", sm: "2rem 2rem", md: "2rem 4rem" }}
        className="new-arrivals"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            850: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {recentSearch.map((data) => (
            <SwiperSlide key={data.key} className="card"></SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
};

export default Customer;
