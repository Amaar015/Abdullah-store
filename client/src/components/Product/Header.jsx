import React from "react";
import { Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Stack
      bgcolor={"#eee"}
      spacing={1}
      justifyContent={"center"}
      alignItems={"center"}
      padding={{ xs: "3rem 1rem", sm: "3rem 6rem" }}
    >
      <Typography
        textAlign={"center"}
        fontSize={{ xs: "1.2rem", sm: "1.8rem", md: "2.3rem" }}
        fontWeight={"bold"}
      >
        Timeless Favorites – Just for You
      </Typography>
      <Typography
        width={{ xs: "100%", sm: "75%", md: "65%", lg: "50%" }}
        textAlign={"center"}
        fontSize={{ sm: "1rem", md: "1.2rem" }}
        color="#666"
      >
        Discover the latest styles, always crafted to lofty standards you expect
        and infused with Emmable's inimtable character.
      </Typography>
    </Stack>
  );
};

export default Header;
