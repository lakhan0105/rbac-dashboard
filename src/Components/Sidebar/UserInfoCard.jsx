import React from "react";
import { FaUserCircle } from "react-icons/fa";

function UserInfoCard() {
  return (
    <article className="flex gap-3 items-center mb-14">
      {/* img container */}
      <div className="text-6xl">
        <FaUserCircle />
      </div>

      {/* admin/trainer info*/}
      <div className="flex flex-col justify-center">
        <h2 className="font-bold">Lakhan Kumar</h2>
        <p className="text-sm text-zinc-500">admin</p>
      </div>
    </article>
  );
}

export default UserInfoCard;
