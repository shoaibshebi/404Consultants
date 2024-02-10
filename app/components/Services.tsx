// @ts-nocheck
"use client";
import React from "react";
import { motion } from "framer-motion";

import { tilesData } from "../utils/data";
import { slideIn, staggerContainer, zoomIn } from "../utils/motion";
import { TypingText } from "../Reusable/customTexts";

export default function Services() {
  const numberOfStars = 10;

  const randomStyle = () => {
    return {
      position: "absolute",
      zIndex: 0,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`, // Random width between 1px and 4px
      height: "auto", // Keep the aspect ratio
      transform: `translate(-50%, -50%)`, // Center the star based on its top and left position
    };
  };

  // Create an array to hold each star's JSX
  const stars = Array.from({ length: numberOfStars }, (_, index) => (
    <img
      key={index}
      src="/icons/star1.svg"
      alt="Star"
      className="tailwind-class"
      style={randomStyle()}
    />
  ));

  const PlanningTile = ({ img, title }: any) => (
    <div className="rounded-xl w-full sm:w-fit p-4  [background:linear-gradient(93.65deg,_rgba(47,_128,_237,_0.1),_rgba(250,_13,_255,_0.1))] box-border h-[100px] flex flex-col items-start justify-center py-0 px-7 border-[1px] border-solid border-dodgerblue-200">
      <div className="flex flex-row items-center justify-start gap-[12px] rich-blacks-main relative z-20">
        <img className="relative w-14 h-14" alt="" src={img} />
        <div className="relative leading-[32px] font-semibold">{title}</div>
      </div>
    </div>
  );

  return (
    <motion.div
      id="services"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col justify-center relative w-[80%] mx-auto z-10 mb-10 2xl:max-w-[1280px] overflow-scroll"
    >
      {stars}
      <TypingText
        title="Other Services"
        textStyles="relative text-5xl leading-[32px] font-semibold py-8"
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col flex-wrap sm:flex-row gap-4 ">
          {tilesData.map((x, i) => {
            return (
              <motion.div
                key={i}
                className={`${i === 2 ? "ml-24" : ""} ${i === 4 ? "ml-4" : ""}`}
                variants={zoomIn(0.2 * i, 1)}
              >
                <PlanningTile {...x} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
