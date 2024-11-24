import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

function Rootlayout() {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      <Navbar setHideSidebar={setHideSidebar} />
      <Outlet />
    </div>
  );
}

export default Rootlayout;
