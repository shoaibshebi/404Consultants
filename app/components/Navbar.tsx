"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import PrimBtn from "../Reusable/PrimBtn";
import DrawerBar from "../Reusable/DrawerBar";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const navbarItems = ["About", "Services", "Process", "Clients"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial="hidden"
      whileInView="show"
      // variants={navVariants}
      className="bg-transparent py-4 pt-10"
    >
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                className="w-auto"
                src="/icons/logo.svg"
                alt="Logo"
                priority
                width={64}
                height={64}
              />
            </Link>
          </div>
          <div className="ml-10 items-baseline space-x-4 px-6 py-2 hidden md:flex bg-gradient-to-r from-[#2f81ed]/5 to-[#fb0dff]/5 rounded-[10px] border border-[#2F80ED]/20">
            {navbarItems.map((link, index) => (
              <Link
                href={`#` + link.toLowerCase()}
                key={index}
                className=" text-[rgba(254, 254, 254, 1)] hover:text-white px-3 py-2 rounded-md text-sm font-normal"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <PrimBtn title="Let's Build" />
          </div>
          <div className="absolute h-[100%] w-[40%] top-[70%] right-1 z-0  gradient-01 " />
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <Image
                src="/icons/hamburger.svg"
                alt="menu"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>

      {isOpen ? <DrawerBar isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}
    </motion.nav>
  );
};

export default Navbar;
