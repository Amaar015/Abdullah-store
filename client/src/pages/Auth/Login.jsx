import { Stack, TextField, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import { Buttons, Buttonss } from "../../components/styled-components/Buttons";
import { Link } from "react-router-dom";

const Login = () => {
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
          Login
        </Typography>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1rem" }}
          textAlign={"center"}
        >
          If you have an account, sign in with your email address and password
        </Typography>
        <Stack
          spacing={"1.5rem"}
          justifyContent={"center"}
          alignItems={"center"}
        >
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
          Don't have an account?{" "}
          <Link style={{ textDecoration: "none", color: "#6a5acd" }}>
            Create Account
          </Link>
        </Typography>
      </Stack>
    </div>
  );
};

export default Login;
