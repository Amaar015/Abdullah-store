import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Home-styles/Home.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { bannerText } from "../data/data";
import NewArrivals from "../components/Home/NewArrivals";
import Winterbanner from "../components/Home/Winterbanner";
import TopSelles from "../components/Home/TopSelles";
import Customer from "../components/Home/Customer";
import Support from "../components/Home/Support";

const Home = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        // loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {bannerText.map((text) => (
          <SwiperSlide key={text.id} className="hero-slider">
            <div>
              <h1 className="banner-title">{text.title} </h1>
              <span className="banner-off">{text.off}</span>
              <button className="shop-now">
                Shop Now <ArrowForwardIcon />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NewArrivals />
      <Winterbanner />
      <TopSelles />
      <Customer />
      <Support />
    </>
  );
};

export default Home;
