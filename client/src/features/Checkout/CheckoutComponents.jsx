import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import countries from "world-countries";
import { State } from "country-state-city";
import Ordersummary from "./Ordersummary";
import { useState } from "react";
import { shipping } from "../../data/data";
import CreditCard from "./payments/CreditCard";
export const Information = ({ handleChange, Cart }) => {
  const [info, setInfo] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    province: "",
    postal_code: "",
    phone: 0,
  });
  const formatedCountries = countries.map((country) => ({
    label: country.name.common,
    value: country.cca2, // country code (like US, PK, etc.)
  }));
  const [selectedCountry, setSelectedCountry] = useState("");
  const [state, setState] = useState([]);
  const handleSelectedChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log({ EnventTargetedData____000: event.target.value });
    const statesData = State.getStatesOfCountry(event.target.value);
    console.log({ StatesData_________111: statesData });
    setState(statesData);
  };
  console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Stack
      direction={"row"}
      display={"flex"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={{ xs: "3rem", md: "0" }}
    >
      <Stack spacing={2} width={{ xs: "100%", sm: "80%", md: "50%" }}>
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            Contact Information
          </Typography>
          <Typography fontSize={"0.9rem"} color="#888">
            Already have an account? <a href="/">Log in</a>
          </Typography>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack spacing={1}>
            <TextField
              label="Your Email"
              name="email"
              required
              fullWidth
              // value={review.name}
              // onChange={handleChange}
              sx={{
                "& label.Mui-focused": {
                  color: "#6a5acd",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#6a5acd",
                  },
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "#6a5acd",
                    "&.Mui-checked": {
                      color: "#6a5acd", // checkbox tick color
                    },
                    marginLeft: "-0.8rem",
                  }}
                />
              }
              label="Email me with news and offers"
            />
          </Stack>
          <Stack spacing={4} marginTop={"2rem"}>
            <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
              Shipping Detail
            </Typography>
            <FormControl
              sx={{
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#6a5acd",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc", // default
                  },
                  "&:hover fieldset": {
                    borderColor: "#6a5acd",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6a5acd",
                  },
                },
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Country
              </InputLabel>

              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectedCountry}
                onChange={handleSelectedChange}
                label="Country"
              >
                {formatedCountries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Stack direction={"row"} spacing={2}>
              <TextField
                label="First Name"
                name="firstName"
                required
                fullWidth
                // value={review.name}
                // onChange={handleChange}
                sx={{
                  width: "49%",
                  "& label.Mui-focused": {
                    color: "#6a5acd",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#6a5acd",
                    },
                  },
                }}
              />
              <TextField
                label="Last Name"
                name="lastName"
                required
                // value={review.name}
                // onChange={handleChange}
                sx={{
                  width: "49%",
                  "& label.Mui-focused": {
                    color: "#6a5acd",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#6a5acd",
                    },
                  },
                }}
              />
            </Stack>
            <TextField
              label="Address"
              name="address"
              required
              fullWidth
              // value={review.name}
              // onChange={handleChange}
              sx={{
                "& label.Mui-focused": {
                  color: "#6a5acd",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#6a5acd",
                  },
                },
              }}
            />
            <TextField
              label="City"
              name="city"
              required
              fullWidth
              // value={review.name}
              // onChange={handleChange}
              sx={{
                "& label.Mui-focused": {
                  color: "#6a5acd",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#6a5acd",
                  },
                },
              }}
            />
            <FormControl
              sx={{
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#6a5acd",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc", // default
                  },
                  "&:hover fieldset": {
                    borderColor: "#6a5acd",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6a5acd",
                  },
                },
              }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Province
              </InputLabel>

              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={state}
                onChange={handleSelectedChange}
                label="Province"
              >
                {state.map((states) => (
                  <MenuItem key={states.value} value={states.isoCode}>
                    {states.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Postal code"
              name="postalcode"
              required
              fullWidth
              // value={review.name}
              // onChange={handleChange}
              sx={{
                "& label.Mui-focused": {
                  color: "#6a5acd",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#6a5acd",
                  },
                },
              }}
            />
            <TextField
              label="Phone"
              name="phone"
              required
              fullWidth
              // value={review.name}
              // onChange={handleChange}
              sx={{
                "& label.Mui-focused": {
                  color: "#6a5acd",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#6a5acd",
                  },
                },
              }}
            />
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  width: "150px",
                  height: "40px",
                  color: "#6a5acd",
                  borderColor: "#6a5acd",
                  "&:hover": {
                    backgroundColor: "#6a5acd",
                    color: "#fff",
                    borderColor: "#6a5acd",
                  },
                }}
                onClick={() => handleChange(null, "1")}
              >
                Return
              </Button>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  width: "150px",
                  height: "40px",
                  backgroundColor: "#6a5acd",
                  color: "#fff",
                  borderColor: "#6a5acd",
                  "&:hover": {
                    color: "#6a5acd",
                    borderColor: "#6a5acd",
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => handleChange(null, "3")}
              >
                Continue
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
      <Ordersummary handleChange={handleChange} value={"3"} Cart={Cart} />
    </Stack>
  );
};

export const Shipping = ({ handleChange, Cart }) => {
  const [selectedShipping, setSelectedShipping] = useState();
  return (
    <Stack
      direction={"row"}
      display={"flex"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={{ xs: "3rem", md: "0" }}
    >
      <Stack spacing={2} width={{ xs: "100%", sm: "80%", md: "50%" }}>
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            Contact Information
          </Typography>
        </Stack>
        <Stack>
          <RadioGroup
            value={selectedShipping}
            onChange={(e) => setSelectedShipping(e.target.value)}
          >
            {shipping.map((data) => (
              <FormControlLabel
                key={data.title}
                value={data.title}
                control={<Radio />}
                onChange={() => setSelectedShipping(data.title)}
                sx={{
                  width: "100%!important",
                  m: 0,
                  p: 0,
                  border: "1px solid #888",
                  borderRadius: "5px",
                  backgroundColor:
                    selectedShipping === data.title ? "#eee" : "transparent", // Set selected bg
                  transition: "background-color 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#eee", // Hover bg
                  },
                  "& .MuiFormControlLabel-label": {
                    flex: 1,
                  },
                }}
                label={
                  <Stack
                    direction="row"
                    // bgcolor={"green"}
                    display={"flex"}
                    justifyContent="space-between"
                    alignItems={"center"}
                    sx={{
                      // width: "100%",
                      padding: "1rem 1.5rem",
                      transition: "all 0.2s linear",
                    }}
                  >
                    <Stack>
                      <Typography fontSize={"1rem"} fontWeight={"bold"}>
                        {data.title}
                      </Typography>
                      <Typography color="#888">{data.delivery}</Typography>
                    </Stack>
                    <Typography fontSize={"1rem"} fontWeight={"bold"}>
                      {data.price}
                    </Typography>
                  </Stack>
                }
              />
            ))}
          </RadioGroup>

          {/* <RadioGroup>
            {shipping.map((data) => (
              <Stack
                sx={{
                  width: "100%",
                  border: "1px solid #888",
                  "&:hover": { bgcolor: "#eee" },
                }}
                direction={"row"}
                justifyContent={"space-between"}
                padding={"1rem 1.5rem"}
              >
                <FormControlLabel
                  value={data.title}
                  control={<Radio />}
                  label={
                    <Stack>
                      <Typography>{data.title}</Typography>
                      <Typography>{data.delivery}</Typography>
                    </Stack>
                  }
                ></FormControlLabel>
                <Typography>{data.price}</Typography>
              </Stack>
            ))}
          </RadioGroup> */}
        </Stack>
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={"2rem!important"}
        >
          <Button
            type="submit"
            variant="outlined"
            sx={{
              width: "150px",
              height: "40px",
              color: "#6a5acd",
              borderColor: "#6a5acd",
              "&:hover": {
                backgroundColor: "#6a5acd",
                color: "#fff",
                borderColor: "#6a5acd",
              },
            }}
            onClick={() => handleChange(null, "2")}
          >
            Return
          </Button>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              width: "150px",
              height: "40px",
              backgroundColor: "#6a5acd",
              color: "#fff",
              borderColor: "#6a5acd",
              "&:hover": {
                color: "#6a5acd",
                borderColor: "#6a5acd",
                backgroundColor: "transparent",
              },
            }}
            onClick={() => handleChange(null, "4")}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
      <Ordersummary handleChange={handleChange} value={"4"} Cart={Cart} />
    </Stack>
  );
};

export const Payment = ({ handleChange, Cart }) => {
  return (
    <Stack
      direction={"row"}
      display={"flex"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={{ xs: "3rem", md: "0" }}
    >
      <Stack width={{ xs: "100%", sm: "80%", md: "50%" }}>
        <CreditCard handleChange={handleChange} />
      </Stack>
      <Ordersummary Cart={Cart} />
    </Stack>
  );
};
