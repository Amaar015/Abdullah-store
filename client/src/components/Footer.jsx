import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Stack bgcolor={"#333"} padding={"2rem"} color={"#fff"}>
      <Stack
        direction={"row"}
        spacing={"2rem"}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Stack spacing={1} width={"250px"}>
          <Typography
            fontSize={{ sm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Emmable
          </Typography>
          <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }}>
            Join our exclusive mailing list today and receive a special 10%
            discount on your next purchase as a thank-you gift.
          </Typography>
        </Stack>
        <Stack spacing={1} width={"200px"} marginTop={"0.5rem!important"}>
          <Typography
            fontSize={{ sm: "1.4rem", xs: "1.2rem" }}
            fontWeight={"530"}
          >
            Discover
          </Typography>
          <Stack spacing={"0.5rem"}>
            <Link to={"/"} className="custom-link">
              Home
            </Link>
            <Link to={"/"} className="custom-link">
              About Us
            </Link>
            <Link to={"/"} className="custom-link">
              Blogs
            </Link>
            <Link to={"/"} className="custom-link">
              Contact Us
            </Link>
            <Link to={"/"} className="custom-link">
              Services
            </Link>
          </Stack>
        </Stack>
        <Stack spacing={1} width={"200px"} marginTop={"0.5rem!important"}>
          <Typography
            fontSize={{ sm: "1.4rem", xs: "1.2rem" }}
            fontWeight={"530"}
          >
            About
          </Typography>
          <Stack spacing={"0.5rem"}>
            <Link to={"/"} className="custom-link">
              Client
            </Link>
            <Link to={"/"} className="custom-link">
              Team
            </Link>
            <Link to={"/"} className="custom-link">
              Career
            </Link>
            <Link to={"/"} className="custom-link">
              Testimonials
            </Link>
            <Link to={"/"} className="custom-link">
              Journal
            </Link>
          </Stack>
        </Stack>
        <Stack spacing={1} width={"200px"} marginTop={"0.5rem!important"}>
          <Typography
            fontSize={{ sm: "1.4rem", xs: "1.2rem" }}
            fontWeight={"530"}
          >
            Help
          </Typography>
          <Stack spacing={"0.5rem"}>
            <Link to={"/"} className="custom-link">
              Privacy Policy
            </Link>
            <Link to={"/"} className="custom-link">
              Terms & Conditions
            </Link>
            <Link to={"/"} className="custom-link">
              Partners
            </Link>
          </Stack>
        </Stack>
        <Stack spacing={1} width={"200px"} marginTop={"0.5rem!important"}>
          <Typography
            fontSize={{ sm: "1.4rem", xs: "1.2rem" }}
            fontWeight={"530"}
          >
            Help
          </Typography>
          <Stack spacing={"0.5rem"}>
            <Link to={"/"} className="custom-link">
              Privacy Policy
            </Link>
            <Link to={"/"} className="custom-link">
              Terms & Conditions
            </Link>
            <Link to={"/"} className="custom-link">
              Partners
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
