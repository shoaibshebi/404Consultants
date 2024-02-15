// @ts-nocheck
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../Reusable/customTexts";

const Banner = () => {
  const numberOfStars = 25;
  const isNotMobile = useMediaQuery("(min-width:768px)");

  // TODO: Move this to utils
  const randomStyle = () => {
    return {
      position: "absolute",
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`, // Random width between 1px and 4px
      height: "auto", // Keep the aspect ratio
      transform: `translate(-50%, -50%)`, // Center the star based on its top and left position
    };
  };

  const stars = Array.from({ length: numberOfStars }, (_, index) => (
    <img
      alt="Star"
      key={index}
      src="/icons/star1.svg"
      className="tailwind-class"
      style={randomStyle()}
    />
  ));

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.25 }}
      className="bg-gray-800 text-white py-8 relative mb-20 h-full"
    >
      {stars}
      {isNotMobile && (
        <img
          src="/icons/LeftRectLine.svg"
          alt="hero icon"
          className="absolute h-full w-auto top-16 z-0 "
        />
      )}
      <img
        src="/icons/RightLongLine.svg"
        alt="hero icon"
        className="absolute h-full w-auto top-16 right-32 z-0 "
      />
      <img
        src="/icons/RightLongLine.svg"
        alt="hero icon"
        className="absolute inset-x-0 h-16 w-64 mx-auto top-0 z-0 "
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex relative flex-col justify-center items-center py-16">
        <div className="flex relative justify-center items-center md:w-[464px] md:h-[215px] w-[250px] h-[130px]">
          <motion.img
            src="/icons/four.svg"
            alt="logo"
            className="h-full w-full"
          />
          <motion.img
            src="/icons/zero.svg"
            alt="logo"
            className="h-[200px] w-[350px] md:h-[330px] md:w-[500px]"
          />
          <motion.img
            src="/icons/four.svg"
            alt="logo"
            className="h-full w-full"
          />
        </div>
        <div>
          <TypingText
            title="You are not lost"
            textStyles="text-center text-2xl md:text-21xl font-bold"
          />
          <TypingText
            title="You are exactly where you are meant to be."
            textStyles="text-2xl md:text-21xl font-bold"
          />
          <img
            src="/icons/RightLongLine.svg"
            alt="hero icon"
            className="absolute inset-x-0 h-full w-64 mx-auto bottom-[-30%] z-0 "
          />
        </div>
      </div>

      <motion.div
        variants={fadeIn("lt", "spring", 0.3, 2)}
        className="max-w-7xl px-4 my-8 sm:px-6 lg:px-8 flex flex-col mt-16 w-full md:w-3/4 relative "
      >
        <div className="absolute h-[100%] w-[40%] bottom-[-70%] left-[-40%] z-0 gradient-01 " />
        {isNotMobile && (
          <img
            src="/icons/ArrowLine.svg"
            alt="hero icon"
            className="absolute h-3/4 w-auto mx-auto top-40 right-1/3 z-0 "
          />
        )}
        <TypingText
          title="one-stop software development"
          textStyles=" block   font-bold py-4 relative z-10"
        />
        <p className=" text-[#D2D2D2] font-normal py-4 relative z-10">
          Welcome to 404, the one-stop destination for all your software
          development, marketing, and design needs. Our team of experts is
          dedicated to creating tailor-made solutions that elevate your brand
          and drive measurable results. With a focus on innovation and quality,
          we provide end-to-end services that empower businesses to thrive in
          the digital landscape.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Banner;
