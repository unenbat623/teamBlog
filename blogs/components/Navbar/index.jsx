import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const isActive = usePathname();
  console.log("blog", isActive);

  return (
    <div className="h-24 mx-auto border-b">
      <div className="flex justify-between p-5 items-center">
        <a href="/">
          <img src="Logo.png" alt="logo" />
        </a>
        <div className="flex gap-12">
          {navigations.map((navigation, i) => (
            <Link
              className={`font-bold transition-all duration-75  ${
                isActive === navigation.path
                  ? "text-green-500"
                  : "hover:text-red-500 "
              }`}
              key={i}
              href={navigation.path}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <div className="flex  py-2 pr-4 pl-2 items-center gap-3 ">
          <input
            placeholder="Search"
            type="text"
            className="z-4 flex-col"
          ></input>
          <button type="submit">
            <img src="search-outline.svg" className="w-4 h-4 z-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
