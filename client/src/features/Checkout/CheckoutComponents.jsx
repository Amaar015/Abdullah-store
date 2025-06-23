import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Ordersummary from "./Ordersummary";
import { useState } from "react";

export const Information = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
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
          <Stack spacing={2}>
            <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
              Contact Information
            </Typography>
          </Stack>
        </form>
      </Stack>
      <Ordersummary />
    </Stack>
  );
};
