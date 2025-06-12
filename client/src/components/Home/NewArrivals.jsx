import { IconButton, Stack, Typography } from "@mui/material";
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
const NewArrivals = () => {
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
            <SwiperSlide key={data.key}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <Stack
        padding={{ xs: "2rem 1rem", sm: "2rem 2rem", md: "2rem 4rem" }}
      ></Stack>
    </Stack>
  );
};

export default NewArrivals;
