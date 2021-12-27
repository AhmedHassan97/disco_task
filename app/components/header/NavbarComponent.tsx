import Link from "next/link";
import React from "react";
import useLogin from "../../hooks/useLogin";
const Navigation = [
  {
    name: "home",
    link: "/home",
  },
  {
    name: "archive",
    link: "/home",
  },
  {
    name: "books",
    link: "/home",
  },
  {
    name: "about",
    link: "/home",
  },
  {
    name: "contact",
    link: "/home",
  },
];
const NavbarComponent = () => {
  const { logout } = useLogin();
  return (
    <div className="flex flex-col space-y-10 pt-10">
      <div className="flex flex-row">
        <h1 className="text-4xl text-gray-600 ">blog</h1>
        <input
          className="w-1/4 border-2 border-black rounded-xl ml-auto"
          type="text"
        />
        <button
          className="btn bg-gray-400 text-black ml-2 hover:bg-slate-500"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
      <div className="flex flex-row mx-auto space-x-16 text-xl ">
        {Navigation.map((nav, index) => (
          <Link key={index} href={nav.link}>
            <a className="hover:text-gray-500 hover:underline">{nav.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarComponent;
