import React from "react";
import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <div>
      <h1>General Layout</h1>
      <Outlet />
    </div>
  );
};

export default GeneralLayout;
