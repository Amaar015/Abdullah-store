import {
  Avatar,
  Divider,
  IconButton,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Comment } from "../data/data";
import { StarRating } from "../components/Home/Customer";

import { useNavigate } from "react-router-dom";
import Review from "../modals/Review";
import Likes from "../features/Likes";

const Comments = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(5);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleLoadmore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };
  const comments = Comment.slice(0, visibleCount);
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack padding={{ xs: "1rem", sm: "1rem 2rem", md: "1rem 3rem" }}>
      <Typography fontSize={{ xs: "1.5rem", sm: "2rem" }} fontWeight={"bold"}>
        Customer Reviews (34)
      </Typography>
      <Stack
        width={"100%"}
        direction={"row"}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={"2rem"}
        padding={"2rem 0rem"}
      >
        <Stack width={{ xs: "100%", sm: "100%", md: "46%" }}>
          {comments.map((data) => (
            <>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                display={"flex"}
                gap={"1rem"}
                padding={"1rem"}
              >
                <Avatar
                  alt={data.name}
                  src={"/image"}
                  sx={{ width: 50, height: 50 }}
                />
                <Stack spacing={"0.2rem"} width={{ xs: "95%", sm: "80%" }}>
                  <Stack>
                    <Typography fontSize={"16px"} fontWeight={"bold"}>
                      {data.name}
                    </Typography>
                    <Typography fontSize={"14px"} color="#888">
                      {data.data}
                    </Typography>
                  </Stack>
                  <StarRating ratting={data.rating} />
                  <Typography
                    padding={{
                      xs: "0rem 0rem 0rem 0rem",
                      sm: "0 2rem 0rem 0rem",
                    }}
                    fontSize={"16px"}
                    color="#666"
                  >
                    {data.comment}
                  </Typography>
                </Stack>
              </Stack>
              <Divider
                sx={{
                  height: "1px",
                  bgcolor: "#D1D5DB",
                  width: { xs: "100%", sm: "90%" },
                }}
              />
            </>
          ))}
          <button
            style={{
              width: "150px",
              height: "40px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "2rem",
              border: "2px solid #6a5acd",
              background: "transparent",
              color: "#666",
            }}
            onClick={handleLoadmore}
          >
            Load More
          </button>
        </Stack>

        <Stack
          width={{ xs: "100%", sm: "90%", md: "46%" }}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          }
          spacing={2}
          height={"100%"}
          padding={{ xs: "2rem 1rem 0rem 1rem", sm: "2rem 2rem 0rem 2rem" }}
        >
          <Typography fontSize={"16px"} fontWeight={"bold"}>
            Overall rating
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={"1.5rem"}>
            <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
              {" "}
              <span style={{ color: "gold" }}>★</span> 4.8
            </Typography>
            <Stack>
              <Typography fontSize={"16px"} fontWeight={"bold"}>
                30 out of 32 (98%)
              </Typography>
              <Typography fontSize={"14px"} color="#777">
                Customers recommended this product
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={1}>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <span style={{ color: "gold", fontSize: "1.6rem" }}>★</span>
                <Typography fontSize={"1.4rem"} marginTop={"0.5rem"}>
                  5
                </Typography>
              </Stack>
              <Stack
                marginTop={"0.5rem"}
                direction="row"
                alignItems="center"
                gap={2}
                width={{ xs: "100%", sm: "70%" }}
              >
                <Slider
                  value={27}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  min={0}
                  disabled
                  max={30}
                  step={1}
                  sx={{
                    flex: 1,
                    color: "#6a5acd",
                    "& .MuiSlider-thumb": {
                      color: "#6a5acd",
                    },
                    "& .MuiSlider-rail": {
                      color: "#ccc", // light grey rail
                    },
                    "&.Mui-disabled": {
                      color: "#6a5acd", // main track and thumb when disabled
                      "& .MuiSlider-thumb": {
                        color: "#6a5acd",
                      },
                      "& .MuiSlider-track": {
                        color: "#6a5acd",
                      },
                    },
                  }}
                />
                <Typography fontSize={"1.4rem"}>27</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <span style={{ color: "gold", fontSize: "1.6rem" }}>★</span>
                <Typography fontSize={"1.4rem"} marginTop={"0.5rem"}>
                  4
                </Typography>
              </Stack>
              <Stack
                marginTop={"0.5rem"}
                direction="row"
                alignItems="center"
                gap={2}
                width={{ xs: "100%", sm: "70%" }}
              >
                <Slider
                  value={18}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  min={0}
                  max={30}
                  disabled
                  step={1}
                  sx={{
                    flex: 1,
                    color: "#6a5acd",
                    "& .MuiSlider-thumb": {
                      color: "#6a5acd",
                    },
                    "& .MuiSlider-rail": {
                      color: "#ccc", // light grey rail
                    },
                    "&.Mui-disabled": {
                      color: "#6a5acd", // main track and thumb when disabled
                      "& .MuiSlider-thumb": {
                        color: "#6a5acd",
                      },
                      "& .MuiSlider-track": {
                        color: "#6a5acd",
                      },
                    },
                  }}
                />
                <Typography fontSize={"1.4rem"}>18</Typography>
              </Stack>
            </Stack>

            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <span style={{ color: "gold", fontSize: "1.6rem" }}>★</span>
                <Typography fontSize={"1.4rem"} marginTop={"0.5rem"}>
                  3
                </Typography>
              </Stack>
              <Stack
                marginTop={"0.5rem"}
                direction="row"
                alignItems="center"
                gap={2}
                width={{ xs: "100%", sm: "70%" }}
              >
                <Slider
                  value={10}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  min={0}
                  max={30}
                  disabled
                  step={1}
                  sx={{
                    flex: 1,
                    color: "#6a5acd",
                    "& .MuiSlider-thumb": {
                      color: "#6a5acd",
                    },
                    "& .MuiSlider-rail": {
                      color: "#ccc", // light grey rail
                    },
                    "&.Mui-disabled": {
                      color: "#6a5acd", // main track and thumb when disabled
                      "& .MuiSlider-thumb": {
                        color: "#6a5acd",
                      },
                      "& .MuiSlider-track": {
                        color: "#6a5acd",
                      },
                    },
                  }}
                />
                <Typography fontSize={"1.4rem"}>{10}</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <span style={{ color: "gold", fontSize: "1.6rem" }}>★</span>
                <Typography fontSize={"1.4rem"} marginTop={"0.5rem"}>
                  2
                </Typography>
              </Stack>
              <Stack
                marginTop={"0.5rem"}
                direction="row"
                alignItems="center"
                gap={2}
                width={{ xs: "100%", sm: "70%" }}
              >
                <Slider
                  value={0}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  min={0}
                  max={30}
                  disabled
                  step={1}
                  sx={{
                    flex: 1,
                    color: "#6a5acd",
                    "& .MuiSlider-thumb": {
                      color: "#6a5acd",
                    },
                    "& .MuiSlider-rail": {
                      color: "#ccc", // light grey rail
                    },
                    "&.Mui-disabled": {
                      color: "#6a5acd", // main track and thumb when disabled
                      "& .MuiSlider-thumb": {
                        color: "#6a5acd",
                      },
                      "& .MuiSlider-track": {
                        color: "#6a5acd",
                      },
                    },
                  }}
                />
                <Typography fontSize={"1.4rem"}>0</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <span style={{ color: "gold", fontSize: "1.6rem" }}>★</span>
                <Typography fontSize={"1.4rem"} marginTop={"0.5rem"}>
                  1
                </Typography>
              </Stack>
              <Stack
                marginTop={"0.5rem"}
                direction="row"
                alignItems="center"
                gap={2}
                width={{ xs: "100%", sm: "70%" }}
              >
                <Slider
                  value={0}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  min={0}
                  max={30}
                  step={1}
                  disabled
                  sx={{
                    flex: 1,
                    color: "#6a5acd",
                    "& .MuiSlider-thumb": {
                      color: "#6a5acd",
                    },
                    "& .MuiSlider-rail": {
                      color: "#ccc", // light grey rail
                    },
                    "&.Mui-disabled": {
                      color: "#6a5acd", // main track and thumb when disabled
                      "& .MuiSlider-thumb": {
                        color: "#6a5acd",
                      },
                      "& .MuiSlider-track": {
                        color: "#6a5acd",
                      },
                    },
                  }}
                />
                <Typography fontSize={"1.4rem"}>0</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            padding={"1rem 0rem"}
            direction={{ xs: "column", sm: "row" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={{ xs: "start", sm: "center" }}
          >
            <Stack marginBottom={{ xs: "1rem" }}>
              <Typography fontSize={"20px"} fontWeight={"bold"}>
                Review this product
              </Typography>
              <Typography fontSize={"16px"} color="">
                Share your thoughts with other customers
              </Typography>
            </Stack>
            <button
              style={{
                width: "150px",
                height: "40px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                border: "2px solid #6a5acd",
                background: "transparent",
                color: "#666",
              }}
              onClick={handleOpen}
            >
              Write a review
            </button>
            <Review handleClose={handleClose} open={open} />
          </Stack>
        </Stack>
      </Stack>
      <Divider
        sx={{
          height: "1px",
          bgcolor: "#D1D5DB",
          width: { xs: "100%", sm: "90%" },
        }}
      />
      <Likes />
    </Stack>
  );
};

export default Comments;
