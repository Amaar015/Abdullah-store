import React from "react";
import "./Home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Winterbanner = () => {
  return (
    <div className="winter-banner">
      <div className="winter-banner-text">
        <h1>
          New 2025 <br /> Winter collection
        </h1>
        <p>
          Appear, dry there darkness they're seas, day water things fly midst.
          Beast, above fly very green.
        </p>
        <button className="shop-now">
          Shop Now <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default Winterbanner;
