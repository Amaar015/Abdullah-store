import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Buttonss } from "../../components/styled-components/Buttons";

const Register = () => {
  return (
    <div className="auth-form">
      <Stack
        padding={{ xs: "1rem", sm: "1rem 2rem" }}
        width={{ xs: "270px", sm: "400px" }}
        spacing={"1rem"}
      >
        <Typography
          variant="h3"
          fontSize={{ xs: "1.8rem", sm: "2.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
          color="#444"
        >
          Register
        </Typography>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1rem" }}
          textAlign={"center"}
        >
          There are many advantages to creating an account: the payment process
          is faster, shipment tracking is possible and much more.
        </Typography>
        <Stack
          spacing={"1.5rem"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TextField fullWidth label="Username" type="text" size="small" />
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            size="small"
          />
          <TextField fullWidth label="Password" type="password" size="small" />
          <Buttonss title={"Login"} />
        </Stack>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1rem" }}
          marginTop={"1.5rem"}
        >
          Already have an account?{" "}
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "#6a5acd" }}
          >
            Login
          </Link>
        </Typography>
      </Stack>
    </div>
  );
};

export default Register;
