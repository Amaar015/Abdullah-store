import { Divider, Radio, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  colors,
  category,
  departments,
  PriceRange,
  size,
} from "../../data/data";
import "./style.css";
import { Buttons, Buttonss } from "../styled-components/Buttons";
export const DrawerContent = ({ onCloseDrawer, width }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setselectedColor] = useState("");
  const [selectedRanges, setSelectedRanges] = useState("");
  const handleChange = (event) => {
    setSelectedDepartment(event.target.value);
  };
  const handleChangeRanges = (event) => {
    setSelectedRanges(event.target.value); // will be "100-200"
    const [min, max] = event.target.value.split("-").map(Number);
    filterProductsByPrice(min, max);
  };

  const filterProductsByPrice = (min, max) => {
    console.log(min, max);
  };

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleReset = () => {
    setSelectedDepartment("");
    setSelectedCategory("");
    setSelectedSize("");
    setselectedColor("");
    setSelectedRanges("");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        onCloseDrawer();
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stack
      width={width === "250px" ? "none" : width}
      spacing={2}
      // height={"100%"}
      padding={"1rem 2rem"}
      display={
        width === "250px"
          ? { xs: "inline", md: "none" }
          : { xs: "none", md: "inline" }
      }
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontSize={"1.2rem"}>Filter:</Typography>
        <button
          style={{
            fontSize: "1.2rem",
            textDecoration: "underline",
            color: "#6a5acd",
            background: "none",
            cursor: "pointer",
          }}
          onClick={handleReset}
        >
          Reset All
        </button>
      </Stack>
      {/* Show here filtered option components */}
      <Divider
        sx={{
          marginTop: "1rem",
          height: "1px",
          backgroundColor: "#888",
        }}
      />
      <Stack spacing={2}>
        <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
          Department
        </Typography>
        <ul>
          {departments.map((data) => (
            <li style={{ listStyle: "none" }} key={data.id}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack
                  //   spacing={"0.5rem"}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Radio
                    checked={selectedDepartment === `${data.title}`}
                    onChange={handleChange}
                    value={data.title}
                    name="radio-buttons"
                    slotProps={{ input: { "aria-label": `${data.title}` } }}
                  />
                  <Typography>{data.title}</Typography>
                </Stack>
                <Typography fontSize={"18px"} color="#777">
                  {data.totalCount}
                </Typography>
              </Stack>
            </li>
          ))}
        </ul>
      </Stack>
      {/* Category */}
      <Divider
        sx={{
          marginTop: "1rem",
          height: "1px",
          backgroundColor: "#888",
        }}
      />
      <Stack spacing={2}>
        <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
          Category
        </Typography>
        <ul>
          {category.map((data) => (
            <li style={{ listStyle: "none" }} key={data.id}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack
                  //   spacing={"0.5rem"}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Radio
                    checked={selectedCategory === `${data.title}`}
                    onChange={handleChangeCategory}
                    value={data.title}
                    name="radio-buttons"
                    slotProps={{ input: { "aria-label": `${data.title}` } }}
                  />
                  <Typography>{data.title}</Typography>
                </Stack>
                <Typography fontSize={"18px"} color="#777">
                  {data.totalCount}
                </Typography>
              </Stack>
            </li>
          ))}
        </ul>
      </Stack>
      {/* Size */}
      <Divider
        sx={{
          marginTop: "1rem",
          height: "1px",
          backgroundColor: "#888",
        }}
      />
      <Stack spacing={2}>
        <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
          Size
        </Typography>
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={"0.8rem"}
        >
          {size.map((data) => (
            <button
              className={
                selectedSize === data ? "size-btn selected" : "size-btn"
              }
              onClick={() => setSelectedSize(data)}
            >
              {data}
            </button>
          ))}
        </Stack>
      </Stack>
      {/* Colors */}
      <Divider
        sx={{
          marginTop: "1rem",
          height: "1px",
          backgroundColor: "#888",
        }}
      />
      <Stack spacing={2}>
        <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
          Colors
        </Typography>
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={"0.8rem"}
        >
          {colors.map((data) => (
            <button
              className={
                selectedColor === data
                  ? "color-btn selected-color"
                  : "color-btn"
              }
              style={{ background: `${data}` }}
              onClick={() => setselectedColor(data)}
            ></button>
          ))}
        </Stack>
      </Stack>
      {/* Price */}
      <Divider
        sx={{
          marginTop: "1rem",
          height: "1px",
          backgroundColor: "#888",
        }}
      />
      <Stack spacing={2}>
        <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
          Price
        </Typography>
        <ul>
          {PriceRange.map((data) => {
            const rangeValue = `${data.minPrice}-${data.maxPrice}`;
            return (
              <li style={{ listStyle: "none" }} key={data.id}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"} alignItems={"center"}>
                    <Radio
                      checked={selectedRanges === rangeValue}
                      onChange={handleChangeRanges}
                      value={rangeValue}
                      name="radio-buttons"
                      inputProps={{
                        "aria-label": `${data.minPrice}, ${data.maxPrice}`,
                      }}
                    />
                    <Typography>
                      ${data.minPrice} -{" "}
                      {data.minPrice > 200 ? "Up" : `$${data.maxPrice}`}
                    </Typography>
                  </Stack>
                  <Typography fontSize={"18px"} color="#777">
                    {data.totalCount}
                  </Typography>
                </Stack>
              </li>
            );
          })}
        </ul>
      </Stack>
      <Buttonss title={"Apply Filter"} />
    </Stack>
  );
};
