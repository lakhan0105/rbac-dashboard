import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";

const navlinksData = [
  { id: 1, name: "overview", path: "/overview", icon: <RiHome5Line /> },
  {
    id: 2,
    name: "trainers",
    path: "/trainers",
    icon: <SlPeople />,
  },
];

function Navlinks() {
  return (
    <ul className="">
      {navlinksData?.map((link) => {
        const { id, name, icon, path } = link;

        return (
          <NavLink to={path} key={id}>
            <li className="flex items-end justify-start gap-3 mt-7 capitalize">
              <span className="text-3xl text-zinc-600">{icon}</span>
              <span className="text-sm pb-0.5 text-zinc-500">{name}</span>
            </li>
          </NavLink>
        );
      })}
    </ul>
  );
}

export default Navlinks;
