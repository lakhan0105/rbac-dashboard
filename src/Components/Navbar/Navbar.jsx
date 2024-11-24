import React from "react";
import { TbMenu2 } from "react-icons/tb";

function Navbar({ setHideSidebar }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-[60px] flex justify-between items-center px-5 md:hidden z-[10] bg-[#F8F8FF]">
      <h2 className="text-xl">logo</h2>

      <button
        onClick={() => {
          setHideSidebar((prev) => !prev);
        }}
      >
        <span className="text-3xl">
          <TbMenu2 />
        </span>
      </button>
    </div>
  );
}

export default Navbar;
