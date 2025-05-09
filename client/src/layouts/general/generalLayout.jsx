import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Top from "../../components/Top";

const GeneralLayout = () => {
  return (
    <>
      <Top />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default GeneralLayout;
