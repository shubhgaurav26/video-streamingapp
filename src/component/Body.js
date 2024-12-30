import React from "react";
import { Outlet } from "react-router-dom";

import Side from "./Side";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Side />
      <Outlet />
    </div>
  );
};

export default Body;
