// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

import ProcessBox from "../Reusable/ProcessBox";
import SecBtn from "../Reusable/SecBtn";
import { data } from "../utils/data";
import {
  fadeIn,
  fadeInFromHidden,
  staggerContainer,
  zoomIn,
} from "../utils/motion";
export default function Process() {
  const isNotMobile = useMediaQuery("(min-width:768px)");
  const numberOfStars = 35;

  const randomStyle = () => {
    return {
      position: "absolute",
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: "auto",
      transform: `translate(-50%, -50%)`,
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

  function customPatternFunction(n) {
    // Ensure n is a positive integer
    if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
      throw new Error("Input must be a positive integer");
    }

    // Calculate the result based on the pattern
    return n % 3 === 1 ? 3 : n % 3 === 2 ? 2 : 1;
  }

  const dur = 0.5;
  return (
    <motion.div
      id="process"
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col justify-center items-center relative w-[80%] mx-auto my-16"
    >
      {stars}
      <div className="absolute h-32 w-32 top-[10%] right-[-25%] z-0 gradient-02 " />
      <div className="mt-16">
        <SecBtn title="Our Process" />
      </div>

      <h1 className="text-2xl md:text-21xl font-bold md:px-32 text-center mt-4">
        We Deliver with an End-to-End Approach
      </h1>

      <div className="grid grid-rows-9 md:grid-rows-3 gap-16 my-16 relative">
        {isNotMobile && (
          <motion.img
            variants={fadeIn("right", "spring", 1, 1)}
            src="/icons/Group 26.svg"
            alt="process icons"
            className="absolute top-20 right-[-8%] h-[349px]"
          />
        )}
        {isNotMobile && (
          <motion.img
            variants={fadeIn("left", "spring", 1.2, 2)}
            src="/icons/Group 27.svg"
            alt="process icons"
            className="absolute top-[45%] left-[-8%] h-[349px]"
          />
        )}
        <span className="absolute left-8 top-[-30px] text-base font-bold text-azure-main">
          Phase I
        </span>
        <span
          className={`absolute top-[33%] ${
            !isNotMobile ? "left-8" : "right-8"
          } md:top-[32%] text-base font-bold text-grape-purple-04`}
        >
          Phase II
        </span>
        <span className="absolute left-8 top-[67%] md:top-[68%] text-base font-bold text-steel-pink-main">
          Phase III
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16">
          {data.slice(0, 3).map((item, i) => {
            let ii = i + 1;
            return (
              <motion.div key={i} variants={zoomIn(0.2 * ii, dur)}>
                <ProcessBox
                  // key={i}
                  ind={i}
                  left={item.left}
                  phase={item.phase}
                  right={item.right}
                  isNotMobile={isNotMobile}
                  bdrclr={"border-azure-main"}
                  badgeIcon={"/icons/Group 48.svg"}
                  title={item.title}
                  desc={item.desc}
                  styles=""
                />
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16">
          <motion.div variants={zoomIn(1.2, dur)}>
            <ProcessBox
              // key={i}
              ind={0}
              left={data[3].left}
              phase={data[3].phase}
              right={data[3].right}
              isNotMobile={isNotMobile}
              bdrclr={"border-grape-purple-04"}
              badgeIcon={"/icons/Group 51.svg"}
              title={data[3].title}
              desc={data[3].desc}
              styles=""
            />
          </motion.div>
          <motion.div variants={zoomIn(1.0, dur)}>
            <ProcessBox
              // key={i}
              ind={1}
              left={data[4].left}
              phase={data[4].phase}
              right={data[4].right}
              isNotMobile={isNotMobile}
              bdrclr={"border-grape-purple-04"}
              badgeIcon={"/icons/Group 51.svg"}
              title={data[4].title}
              desc={data[4].desc}
              styles=""
            />
          </motion.div>
          <motion.div variants={zoomIn(0.8, dur)}>
            <ProcessBox
              // key={i}
              ind={2}
              left={data[5].left}
              phase={data[5].phase}
              right={data[5].right}
              isNotMobile={isNotMobile}
              bdrclr={"border-grape-purple-04"}
              badgeIcon={"/icons/Group 51.svg"}
              title={data[5].title}
              desc={data[5].desc}
              styles=""
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16">
          <motion.div variants={zoomIn(1.4, dur)}>
            <ProcessBox
              // key={i}
              ind={0}
              left={data[6].left}
              phase={data[6].phase}
              right={data[6].right}
              isNotMobile={isNotMobile}
              bdrclr={"border-steel-pink-main"}
              badgeIcon={"/icons/Group 52.svg"}
              title={data[6].title}
              desc={data[6].desc}
              styles=""
            />
          </motion.div>
          <motion.div variants={zoomIn(1.6, dur)}>
            <ProcessBox
              // key={i}
              ind={1}
              left={data[7].left}
              phase={data[7].phase}
              right={data[7].right}
              isNotMobile={isNotMobile}
              bdrclr={"border-steel-pink-main"}
              badgeIcon={"/icons/Group 52.svg"}
              title={data[7].title}
              desc={data[7].desc}
              styles=""
            />
          </motion.div>
          <motion.div variants={zoomIn(1.8, dur)}>
            <ProcessBox
              // key={i}
              ind={2}
              left={data[8].left}
              phase={data[8].phase}
              right={data[8].right}
              isNotMobile={isNotMobile}
              bdrclr={"border-steel-pink-main"}
              badgeIcon={"/icons/Group 52.svg"}
              title={data[8].title}
              desc={data[8].desc}
              styles=""
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
