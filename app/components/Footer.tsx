"use client";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { expandVariant, staggerContainer } from "../utils/motion";

const Footer = () => {
  const isNotMobile = useMediaQuery("(min-width:768px)");

  const socialIcons = [
    "/icons/vuesaxlinearbe.svg",
    "/icons/vuesaxlinearfacebook.svg",
    "/icons/vuesaxlineardribbble.svg",
    "/icons/vuesaxlinearinstagram.svg",
  ];

  const links = ["Home", "About", "Services"];
  const quickLinks = ["Our Process", "Other Services", "Clients"];

  const SocialComp = () => (
    <div className="p-5 w-1/2 md:w-3/12 flex flex-col justify-center items-center gap-5 my-8  ">
      <Link className="my-3 block w-28 " href="/">
        <img src="/icons/logo.svg" alt="logo" className="w-full" />
      </Link>
      <div className="my-3 block">
        <div className="flex">
          {socialIcons.map((icon, index) => (
            <Link
              key={index}
              href="/"
              className="text-gray-300 hover:text-gray-400 cursor-pointer mr-4"
            >
              <Image
                src={icon}
                alt="logo"
                width="0"
                height="0"
                sizes="32vw"
                className="w-full h-auto"
              />
            </Link>
          ))}
        </div>
      </div>
      <span className="text-gray-400 text-sm">Let&lsquo;s build</span>
    </div>
  );

  return (
    <motion.footer
      id="about"
      initial="hidden"
      whileInView="show"
      // @ts-ignore
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.25 }}
      className="pt-10 sm:mt-10 relative"
    >
      <div className="absolute opacity-50 border border-white border-opacity-20 w-full"></div>
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center space-x-4 gap-y-8 relative">
        <motion.img
          variants={expandVariant("30%", 0.2, 1.5)}
          src="/icons/smallLine.svg"
          alt="icon"
          className="absolute h-16 w-auto top-16 right-72 z-20 "
        />
        <motion.img
          variants={expandVariant("30%", 0.2, 1.5)}
          src="/icons/smallLine.svg"
          alt="icon"
          className="absolute h-16 w-auto top-40 left-72 z-20 "
        />
        {!isNotMobile && <SocialComp />}

        <div className="p-5 w-1/2 md:w-3/12 flex flex-col justify-center items-center md:items-start gap-4 relative z-0">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6 ">
            Links
          </div>
          {links.map((link, index) => (
            <Link key={index} href="/" className="my-3 block">
              {link}
            </Link>
          ))}
        </div>

        {isNotMobile && <SocialComp />}

        <div className="p-5 w-1/2 md:w-3/12 flex flex-col justify-center items-center md:items-end relative z-0">
          <div className="flex flex-col justify-center items-center md:items-start gap-5">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6 text-left">
              Quick Links
            </div>
            {quickLinks.map((link, index) => (
              <Link key={index} href="/" className="my-3 block">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
