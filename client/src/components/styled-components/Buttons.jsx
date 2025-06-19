import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
export const Buttons = ({ title }) => {
  return <button className="btn">{title}</button>;
};

export const Buttonss = ({ title, link }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <button onClick={handleClick} className="btn2">
      {title}
    </button>
  );
};
