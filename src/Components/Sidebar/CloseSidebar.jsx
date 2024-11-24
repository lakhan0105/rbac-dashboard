import React from "react";
import { IoClose } from "react-icons/io5";

/* button to close the sidebar which is only shown in small screen & hides in the big screens */
function CloseSidebar({ setHideSidebar }) {
  return (
    <button
      className="absolute top-4 right-2 text-3xl md:hidden"
      onClick={() => {
        setHideSidebar(true);
      }}
    >
      <IoClose />
    </button>
  );
}

export default CloseSidebar;
