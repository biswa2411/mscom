"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
// import IconButton from "@lib/button/IconButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IconButton from "@lib/button/IconButton";

export const Header = () => {
  const router = useRouter();

  const user = "biswajit-routray";
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Tutorials", path: "/tutorials" },
    { title: "Shop", path: "/shop" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="w-full mx-auto  bg-primary text-ms_white px-20 flex justify-between items-center py-4 fixed top-0 z-30">
      <button className="flex md:hidden" >
        <MenuIcon />
      </button>
      <button className=" relative cursor-pointer shadow-custom rounded-full" onClick={()=>router.push("/")}>
        <Image
          src={"/logo.svg"}
          alt="logo"
          height={60}
          width={60}
          objectFit="contain"
        />
      </button>
      <div className="hidden md:flex gap-10 bg-primary_lite  px-10 rounded-full shadow-custom ">
        {menuItems.map(({ title, path }, index) => (
          <button
            key={index}
            className="group relative inline-block overflow-hidden rounded  w-24 py-3 text-sm font-medium   "
          >
            <Link href={path} className="">
              {title}
            </Link>
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-ms_white transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-ms_white transition-all duration-200 group-hover:w-full"></span>
          </button>
        ))}
      </div>
      <div className="hidden md:flex gap-5">
        {/* <IconButton icon={Search} />
        <IconButton icon={ShoppingCart} onClick={()=>router.push("/cart")}/>
        <IconButton
          icon={Person}
          onClick={() => {
            router.push(`/${user}`);
          }}
        /> */}
      </div>
    </nav>
  );
};
