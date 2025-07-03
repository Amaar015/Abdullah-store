import { Divider, Radio, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { PriceRange, recentSearch } from "../../data/data";
import "./style.css";
import { Buttonss } from "../styled-components/Buttons";

export const DrawerContent = ({
  onCloseDrawer,
  width,
  filter,
  setFilter,
  products,
}) => {
  const handleReset = () => {
    setFilter({
      category: "",
      variety: "",
      size: "",
      color: "",
      priceMin: 0,
      priceMax: 9999,
    });
  };

  const extractUniqueValues = (products) => {
    const categories = new Set();
    const varieties = new Set();
    const colors = new Set();
    const sizes = new Set();

    products.forEach((product) => {
      if (product.category) categories.add(product.category);
      if (product.variety) varieties.add(product.variety);
      if (product.color) colors.add(product.color);
      if (Array.isArray(product.size)) {
        product.size.forEach((s) => sizes.add(s));
      } else if (product.size) {
        sizes.add(product.size);
      }
    });
    return {
      categories: Array.from(categories),
      varieties: Array.from(varieties),
      sizes: Array.from(sizes),
      colors: Array.from(colors),
    };
  };
  // usage
  const uniqueValues = extractUniqueValues(recentSearch);
  const convertToArrayOfObjects = (arr) => {
    return arr.map((item, index) => ({
      id: index + 1,
      title: item,
    }));
  };
  const categories = convertToArrayOfObjects(uniqueValues.categories);
  const varieties = convertToArrayOfObjects(uniqueValues.varieties);
  const size = uniqueValues.sizes;
  const colors = uniqueValues.colors;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        onCloseDrawer();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Stack
      width={width === "250px" ? "none" : width}
      spacing={2}
      padding={"1rem 2rem"}
      display={
        width === "250px"
          ? { xs: "inline", md: "none" }
          : { xs: "none", md: "inline" }
      }
    >
      {/* Filter Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
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

      {/* Department Filter */}
      <Divider
        sx={{ marginTop: "1rem", height: "1px", backgroundColor: "#888" }}
      />
      <Stack spacing={2}>
        <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
          Department
        </Typography>
        <ul>
          {categories.map((data) => (
            <li style={{ listStyle: "none" }} key={data.id}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center">
                  <Radio
                    checked={filter.category === data.title}
                    onChange={() =>
                      setFilter({ ...filter, category: data.title })
                    }
                    value={data.title}
                    name="department"
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

      {/* Category Filter */}
      <Divider
        sx={{ marginTop: "1rem", height: "1px", backgroundColor: "#888" }}
      />
      <Stack spacing={2}>
        <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
          Category
        </Typography>
        <ul>
          {varieties.map((data) => (
            <li style={{ listStyle: "none" }} key={data.id}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center">
                  <Radio
                    checked={filter.variety === data.title}
                    onChange={() =>
                      setFilter({ ...filter, variety: data.title })
                    }
                    value={data.title}
                    name="category"
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

      {/* Size Filter */}
      <Divider
        sx={{ marginTop: "1rem", height: "1px", backgroundColor: "#888" }}
      />
      <Stack spacing={2}>
        <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
          Size
        </Typography>
        <Stack
          direction="row"
          justifyContent="start"
          alignItems="center"
          flexWrap="wrap"
          gap="0.8rem"
        >
          {size.map((data) => (
            <button
              key={data}
              className={
                filter.size === data ? "size-btn selected" : "size-btn"
              }
              onClick={() => setFilter({ ...filter, size: data })}
            >
              {data}
            </button>
          ))}
        </Stack>
      </Stack>

      {/* Color Filter */}
      <Divider
        sx={{ marginTop: "1rem", height: "1px", backgroundColor: "#888" }}
      />
      <Stack spacing={2}>
        <Typography fontSize={"1.2rem"} color="#555" fontWeight={"550"}>
          Colors
        </Typography>
        <Stack
          direction="row"
          justifyContent="start"
          alignItems="center"
          flexWrap="wrap"
          gap="0.8rem"
        >
          {colors.map((data) => (
            <button
              key={data}
              className={
                filter.color === data ? "color-btn selected-color" : "color-btn"
              }
              style={{ background: data }}
              onClick={() => setFilter({ ...filter, color: data })}
            />
          ))}
        </Stack>
      </Stack>

      {/* Price Filter */}
      <Divider
        sx={{ marginTop: "1rem", height: "1px", backgroundColor: "#888" }}
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
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center">
                    <Radio
                      checked={
                        `${filter.priceMin}-${filter.priceMax}` === rangeValue
                      }
                      onChange={() =>
                        setFilter({
                          ...filter,
                          priceMin: data.minPrice,
                          priceMax: data.maxPrice,
                        })
                      }
                      value={rangeValue}
                      name="price"
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

      <Buttonss title="Apply Filter" />
    </Stack>
  );
};
