import React, { useState } from "react";
import Navlinks from "./Navlinks";
import UserInfoCard from "./UserInfoCard";
import CloseSidebar from "./CloseSidebar";

function Sidebar({ hideSidebar, setHideSidebar }) {
  if (!hideSidebar) {
    return (
      <section className="w-full md:w-[350px] fixed top-0 left-0 bottom-0 bg-[#F8F8FF] px-10 py-10 z-[100]">
        <UserInfoCard />
        <Navlinks />
        <CloseSidebar setHideSidebar={setHideSidebar} />
      </section>
    );
  }
}

export default Sidebar;
