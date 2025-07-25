import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { recentSearch } from "../data/data";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { addToCart } from "../utils/cartUtils";
import { useNavigate } from "react-router-dom";

const Likes = () => {
  const navigate = useNavigate();
  const handleAddCart = (product) => {
    addToCart(product);
  };
  return (
    <>
      {/* you might also like */}
      <Stack padding={{ xs: "3rem 1rem", sm: "3rem 2rem", md: "3rem 4rem" }}>
        <Typography
          variant="h3"
          textAlign={"center"}
          fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.2rem" }}
          fontWeight={"bold"}
        >
          You might also like
        </Typography>
        <Stack
          padding={"2rem 0rem 2rem 0rem"}
          display={"flex"}
          gap={"1rem"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
          className="top-sellers"
        >
          {recentSearch.slice(0, 4).map((data) => (
            <Stack className="card">
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
                  window.scrollTo(0, 0);
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
        </Stack>
      </Stack>
    </>
  );
};

export default Likes;
