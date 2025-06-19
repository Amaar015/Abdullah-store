import React from "react";
import {
  Divider,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Buttonss } from "../components/styled-components/Buttons";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import linkedIn from "../assets/icons/linkedIn.png";
import instagram from "../assets/icons/instagram.png";
import Support from "../components/Home/Support";

const Conatact = () => {
  return (
    <>
      <Stack
        padding={{
          xs: "3rem 0.5rem",
          sm: "3rem 1rem",
          lg: "3rem 4rem",
        }}
      >
        <Typography
          variant="span"
          textAlign={"center"}
          fontSize={{ xs: "1rem" }}
          color="#6a5acd"
        >
          Contact With Us
        </Typography>
        <Typography
          variant="h3"
          textAlign={"center"}
          fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.2rem" }}
          fontWeight={"bold"}
        >
          You can ask us questions
        </Typography>

        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"2rem"}
          paddingTop={"3rem"}
        >
          {/* Detail text */}
          <Stack
            width={{ xs: "95%", sm: "500px", md: "45%" }}
            spacing={2}
            padding={"1rem 1rem 2rem 1rem"}
          >
            <Stack>
              <Typography fontSize={"1.6rem"} fontWeight={"bold"}>
                Our Offices
              </Typography>
              <Typography fontSize={"16px"} color="#4B5563">
                On dekande mydurtad mora även om skurkstat. Semirade timaheten
                rena. Radiogen pasam inte loba även om prerade i garanterad
                traditionell specialitet till bebel. Ev is sönde. Tun gps-väst
                att epiligt. Diliga tresk dira. Ens biov dijevis.
              </Typography>
            </Stack>
            <Stack
              marginTop={"2rem!important"}
              direction={"row"}
              display={"flex"}
              gap={"1rem"}
              flexWrap={"wrap"}
              width={"100%"}
            >
              <Stack width={"48%"} spacing={2}>
                <Stack direction={"row"} spacing={1} alignItems={"start"}>
                  <LocationOnOutlinedIcon />
                  <Stack>
                    <Typography fontSize={"14px"}>Karachi</Typography>
                    <Typography fontSize={"18px"} fontWeight={"medium"}>
                      Pakistan Office
                    </Typography>
                    <Typography
                      marginTop={"0.2rem"}
                      fontSize={"14px"}
                      color="#4B5563"
                    >
                      205 Middle Road, 2nd Floor, New York
                    </Typography>
                    <Stack marginTop={"1.5rem"}>
                      <Typography
                        fontSize={"16px"}
                        color="#030712"
                        fontWeight={"550"}
                      >
                        +92 3023454589
                      </Typography>
                      <Typography fontSize={"14px"} color="#2563EB">
                        info@abdullah.store.com
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack width={"48%"}>
                <Stack direction={"row"} spacing={1} alignItems={"start"}>
                  <LocationOnOutlinedIcon />
                  <Stack>
                    <Typography fontSize={"14px"}>Karachi</Typography>
                    <Typography fontSize={"18px"} fontWeight={"medium"}>
                      Pakistan Office
                    </Typography>
                    <Typography
                      marginTop={"0.2rem"}
                      fontSize={"14px"}
                      color="#4B5563"
                    >
                      205 Middle Road, 2nd Floor, New York
                    </Typography>
                    <Stack marginTop={"1.5rem"}>
                      <Typography
                        fontSize={"16px"}
                        color="#030712"
                        fontWeight={"550"}
                      >
                        +92 3023454589
                      </Typography>
                      <Typography fontSize={"14px"} color="#2563EB">
                        info@abdullah.store.com
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Divider sx={{ marginTop: "2rem!important" }} />
            <Stack
              sx={{ marginTop: "2rem!important" }}
              direction={"row"}
              spacing={1}
              alignItems={"center"}
            >
              <Typography fontSize={"14px"} color="#4B5563">
                Follow us:
              </Typography>
              <Stack direction={"row"} spacing={"10px"}>
                <img src={facebook} alt="" style={{ cursor: "pointer" }} />
                <img src={twitter} alt="" style={{ cursor: "pointer" }} />
                <img src={instagram} alt="" style={{ cursor: "pointer" }} />
                <img src={linkedIn} alt="" style={{ cursor: "pointer" }} />
              </Stack>
            </Stack>
          </Stack>
          {/* contact form */}
          <Stack
            width={{ xs: "95%", sm: "500px", md: "45%" }}
            padding={"1rem 1rem 2rem 1rem"}
            spacing={4}
          >
            <Typography fontSize={"16px"} color="#6B7280">
              On dekande mydurtad mora även om skurkstat. Semirade timaheten
              rena. Radiogen pasam inte loba även om prerade i garanterad
              traditionell specialitet till bebel.
            </Typography>
            <Stack spacing={3} width={"100%"}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                <TextField
                  label="Your Name"
                  id="outlined-size-small"
                  size="small"
                  sx={{ width: "100%" }}
                />
                <TextField
                  label="Your Email"
                  id="outlined-size-small"
                  size="small"
                  sx={{ width: "100%" }}
                />
              </Stack>
              <TextField
                label="Subject"
                id="outlined-size-small"
                size="small"
              />
              <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                placeholder="Message"
                style={{
                  width: "97%",
                  border: "1px solid #D1D5DB",
                  padding: "0.5rem",
                  fontSize: "16px",
                  outline: "none",
                  borderRadius: "6px",
                  boxShadow: "none",
                }}
              />
              <Stack width={"240px"}>
                <Buttonss title={"Send Message"} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Support />
    </>
  );
};

export default Conatact;
