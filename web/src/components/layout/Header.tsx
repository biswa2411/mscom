"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
import IconButton from "@lib/button/IconButton";
import Link from "next/link";

export const Header = () => {
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Tutorials", path: "/tutorials" },
    { title: "Shop", path: "/shop" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="w-full mx-auto  bg-primary text-ms_white px-20 flex justify-between items-center py-4 fixed top-0 z-30">
      <button className="flex md:hidden">
        <MenuIcon />
      </button>
      <div className=" relative cursor-pointer shadow-custom rounded-full">
        <Image
          src={"/logo.svg"}
          alt="logo"
          height={60}
          width={60}
          objectFit="contain"
        />
      </div>
      <div className="hidden md:flex gap-10 bg-primary_lite p-2 px-10 rounded-full shadow-custom">
        {menuItems.map(({ title, path }, index) => (
          <button key={index} className="hover:border-b-2  border-b-ms_white">
            <Link href={path} className="">
              {title}
            </Link>
          </button>
        ))}
      </div>
      <div className="hidden md:flex gap-5">
        <IconButton icon={Search} />
        <IconButton icon={ShoppingCart} />
        <IconButton icon={Person} />
      </div>
    </nav>
  );
};
