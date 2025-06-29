import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useNavigate } from "react-router-dom";
const CreditCard = ({ handleChange }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Stack spacing={2}>
      <Typography fontSize={"1.4rem"} fontWeight={"bold"} color="#444">
        Credit Card
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name on card"
            name="name"
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
            label="Card Number"
            name="card_number"
            required
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CreditCardIcon sx={{ color: "#6a5acd" }} />
                </InputAdornment>
              ),
            }}
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
            <TextField
              label="Expiry Date"
              name="expiry_date"
              required
              // value={review.name}
              // onChange={handleChange}
              sx={{
                width: "48%",
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
              label="CSV"
              name="csv"
              required
              // value={review.name}
              // onChange={handleChange}
              sx={{
                width: "48%",
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
              onClick={() => handleChange(null, "3")}
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
              onClick={() => {
                handleChange(null, "3");
                navigate("/complete-order");
              }}
            >
              Pay
            </Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreditCard;
