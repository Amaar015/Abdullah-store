import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { footerItems } from "../data/data";

const Footer = () => {
  return (
    <Stack bgcolor={"#333"} padding={"2rem"} color={"#fff"}>
      <Stack
        direction={"row"}
        gap={"2rem"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        alignItems={"start"}
      >
        <Stack spacing={1} width={"250px"}>
          <Typography
            fontSize={{ sm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Emmable
          </Typography>
          <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }} color="#888">
            Join our exclusive mailing list today and receive a special 10%
            discount on your next purchase as a thank-you gift.
          </Typography>
        </Stack>
        {footerItems.map((items) => (
          <Stack
            key={items.id}
            spacing={1}
            width={"200px"}
            marginTop={"0.5rem!important"}
          >
            <Typography
              fontSize={{ sm: "1.4rem", xs: "1.2rem" }}
              fontWeight={"530"}
            >
              {items.title}
            </Typography>
            <Stack spacing={"0.5rem"}>
              {items.links.map((footerLinks) => (
                <Link
                  key={footerLinks.id}
                  to={footerLinks.link}
                  className="custom-link"
                >
                  {footerLinks.name}
                </Link>
              ))}
            </Stack>
          </Stack>
        ))}
        <Stack spacing={1} width={"200px"} marginTop={"0.5rem!important"}>
          <Typography
            fontSize={{ sm: "1.4rem", xs: "1.2rem" }}
            fontWeight={"530"}
          >
            Contact Us
          </Typography>
          <Stack direction={"row"} spacing={"0.5rem"}>
            <Link to={"/"} className="custom-link">
              <InstagramIcon />
            </Link>
            <Link to={"/"} className="custom-link">
              <LinkedInIcon />
            </Link>
            <Link to={"/"} className="custom-link">
              <FacebookIcon />
            </Link>
            <Link to={"/"} className="custom-link">
              <TwitterIcon />
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
