import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CheckIcon from "@mui/icons-material/Check";
import { Stack } from "@mui/material";
import Cart from "./Cart";
import {
  Information,
  Payment,
  Shipping,
} from "../features/Checkout/CheckoutComponents";
import { getCart, removeFromCart } from "../utils/cartUtils";

export default function Checkout() {
  const [value, setValue] = React.useState("1");
  const [refreshCart, setRefreshCart] = React.useState(getCart());

  const Refreshcarts = () => {
    setRefreshCart(getCart());
  };

  const handleRemove = (productId) => {
    removeFromCart(productId); // updates localStorage
    Refreshcarts(); // updates UI
  };

  // Simulate form completion
  const completedSteps = ["1"]; // add more like ['1', '2'] when more are completed
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Carts = getCart();
  const tabData = [
    { value: "1", label: "Cart" },
    { value: "2", label: "Information" },
    { value: "3", label: "Shipping" },
    { value: "4", label: "Payment" },
  ];

  return (
    <Box
      sx={{
        typography: "body1",
        padding: { xs: "1rem 0.5rem", sm: "1rem 2rem", md: "1rem 4rem" },
      }}
    >
      <TabContext value={value}>
        <Stack
          direction="row"
          // alignItems="center"
          // justifyContent="center"
          spacing={{ xs: "0.5rem", sm: 2 }}
          sx={{ position: "relative" }}
        >
          {tabData.map((tab, index) => (
            <React.Fragment key={tab.value}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                  // gap: "0.6rem",
                  justifyContent: "start",
                }}
              >
                <Tab
                  label={
                    <Box
                      sx={{
                        marginTop: "2rem",
                        width: { xs: 30, sm: 40 },
                        height: { xs: 30, sm: 40 },
                        borderRadius: "50%",
                        backgroundColor:
                          value === tab.value ? "#6a5acd" : "#e0e0e0",
                        color: value === tab.value ? "#fff" : "#333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {completedSteps.includes(tab.value) ? (
                        <CheckIcon fontSize="small" />
                      ) : (
                        tab.value
                      )}
                    </Box>
                  }
                  value={tab.value}
                  onClick={() => handleChange(null, tab.value)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    minWidth: "auto",
                    padding: 0,
                    "&.Mui-selected": {
                      color: "#6a5acd",
                    },
                  }}
                />
                {value === tab.value && (
                  <Box
                    sx={{
                      mt: 1,
                      color: "#6a5acd",
                      fontWeight: "bold",
                      fontSize: { xs: "0.8rem" },
                    }}
                  >
                    {tab.label}
                  </Box>
                )}
              </Box>

              {index !== tabData.length - 1 && (
                <Box
                  sx={{
                    height: 2,
                    width: { xs: 30, sm: 40 },
                    backgroundColor: "#6a5acd",
                    alignSelf: "center",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Stack>

        <Box mt={4}>
          <TabPanel value="1">
            <Cart
              handleChange={handleChange}
              Cart={refreshCart}
              Remove={handleRemove}
            />
          </TabPanel>
          <TabPanel value="2">
            <Information handleChange={handleChange} Cart={refreshCart} />
          </TabPanel>
          <TabPanel value="3">
            <Shipping handleChange={handleChange} Cart={refreshCart} />
          </TabPanel>
          <TabPanel value="4">
            <Payment handleChange={handleChange} Cart={refreshCart} />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
