import { Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Navigation, Autoplay } from "swiper/modules";
import { Testimonial } from "../../data/data";

const Customer = () => {
  return (
    <Stack padding={"5rem 0rem 5rem 0rem"} bgcolor={"#eee"}>
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
        fontSize={{ xs: "1.4rem", sm: "1.8rem", md: "2.2rem" }}
        fontWeight={{ xs: "500", sm: "bold" }}
      >
        What Our Customers Have to Say
      </Typography>
      <Stack padding={{ xs: "2rem 1rem", sm: "2rem 2rem", md: "2rem 6rem" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {Testimonial.map((data) => (
            <SwiperSlide key={data.key} className="testimonial">
              <img src={data.image} alt="" />
              <Stack
                spacing={2}
                padding={"1.5rem 1rem 0rem 1rem "}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography variant="h3" fontSize={"20px"} color="#444">
                  {data.name}
                </Typography>
                <Typography
                  variant="p"
                  fontSize={"17px"}
                  letterSpacing={"1px"}
                  color="#777"
                  textAlign={"center"}
                >
                  {data.comment}
                </Typography>
                <StarRating ratting={data.ratting} />
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
};

export default Customer;

export const StarRating = ({ ratting }) => {
  const fullStars = Math.floor(ratting);
  const halfStar = ratting % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push("★");
  }
  if (halfStar) {
    stars.push("☆");
  }

  while (stars.length < 5) {
    stars.push("☆");
  }
  return (
    <span style={{ color: "gold", fontSize: "1.5rem" }}>{stars.join("")}</span>
  );
};
