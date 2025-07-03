import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
export const Buttons = ({ title, link }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <button className="btn" onClick={handleClick}>
      {title}
    </button>
  );
};

export const Buttonss = ({ title, link }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <button onClick={handleClick} className="btn2">
      {title}
    </button>
  );
};
