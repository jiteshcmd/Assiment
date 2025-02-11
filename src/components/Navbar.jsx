// import Link from "next/link";
import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
// import Image from "next/image";
import clsx from "clsx";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Collections",
      link: "#",
    },
    {
      labe: "Men",
      link: "#",
    },
    {
      labe: "About",
      link: "#",
    },
    {
      labe: "Contact",
      link: "#",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6   ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            {/* <span
              // href={"/"}
              className="text-4xl font-mono"
            >
              logo
            </span> */}
            <span>
              <HiOutlineBars3 size={25} />
            </span>
            <div className="relative">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-10" // Adjust padding to make space for the icon
              />
            </div>
          </section>
          {/* {navlinks.map((d, i) => (
            <span
              key={i}
              className="hidden lg:block  text-gray-400 hover:text-black"
              //   href={d.link}
            >
              {d.labe}
            </span>
          ))} */}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <span
                key={i}
                className="font-bold"
                //   href={d.link}
              >
                {d.labe}
              </span>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* cart icon */}
          {/* <AiOutlineShoppingCart className="text-3xl" /> */}
          <HiMiniQuestionMarkCircle className="text-3xl" />
          <IoMdNotifications className="text-3xl" />
          <CgProfile className="text-3xl" />
          <h2 className="text-sm font-medium">
            Aarohi Shah
            <br />
            <span className="text-xs font-normal text-[#898989]">
              Applicant
            </span>
          </h2>{" "}
          {/* <Image
            width={40}
            height={40}
            className="h-8 w-8 rounded-full "
            src="https://i.pravatar.cc/150?img=52"
            alt="avatar-img"
          /> */}
          {/* avtar img */}
        </section>
      </nav>
      <hr className=" " />
    </main>
  );
}
