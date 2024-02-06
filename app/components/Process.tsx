// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

import ProcessBox from "../Reusable/ProcessBox";
import SecBtn from "../Reusable/SecBtn";
import { data } from "../utils/data";
import { fadeIn, staggerContainer } from "../utils/motion";
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
      src='/icons/star1.svg'
      alt='Star'
      className='tailwind-class'
      style={randomStyle()}
    />
  ));

  return (
    <motion.div
      id='process'
      initial='hidden'
      whileInView='show'
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.25 }}
      className='flex flex-col justify-center items-center relative w-[80%] mx-auto my-16'
    >
      {stars}
      <div className='absolute h-32 w-32 top-[10%] right-[-25%] z-0 gradient-02 ' />
      <div className='mt-16'>
        <SecBtn title='Our Process' />
      </div>

      <h1 className='text-2xl md:text-21xl font-bold md:px-32 text-center mt-4'>
        We Deliver with an End-to-End Approach
      </h1>

      <div className='grid grid-rows-9 md:grid-rows-3 gap-16 my-16 relative'>
        {isNotMobile && (
          <motion.img
            variants={fadeIn("right", "spring", 1, 1)}
            src='/icons/Group 26.svg'
            alt='process icons'
            className='absolute top-20 right-[-8%] h-[349px]'
          />
        )}
        {isNotMobile && (
          <motion.img
            variants={fadeIn("left", "spring", 0.3, 2)}
            src='/icons/Group 27.svg'
            alt='process icons'
            className='absolute top-[45%] left-[-8%] h-[349px]'
          />
        )}
        <span className='absolute left-8 top-[-30px] text-base font-bold text-azure-main'>
          Phase I
        </span>
        <span
          className={`absolute top-[33%] ${
            !isNotMobile ? "left-8" : "right-8"
          } md:top-[32%] text-base font-bold text-grape-purple-04`}
        >
          Phase II
        </span>
        <span className='absolute left-8 top-[67%] md:top-[68%] text-base font-bold text-steel-pink-main'>
          Phase III
        </span>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16'>
          {data.slice(0, 3).map((item, index) => (
            <ProcessBox
              key={index}
              ind={index}
              left={item.left}
              phase={item.phase}
              right={item.right}
              isNotMobile={isNotMobile}
              bdrclr={"border-azure-main"}
              badgeIcon={"/icons/Group 48.svg"}
              title={item.title}
              desc={item.desc}
              styles=''
            />
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16'>
          {data.slice(3, 6).map((item, index) => (
            <ProcessBox
              key={index}
              ind={index}
              left={item.left}
              phase={item.phase}
              right={item.right}
              isNotMobile={isNotMobile}
              bdrclr={"border-grape-purple-04"}
              badgeIcon={"/icons/Group 51.svg"}
              title={item.title}
              desc={item.desc}
              styles=''
            />
          ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16'>
          {data.slice(6).map((item, index) => (
            <ProcessBox
              key={index}
              ind={index}
              left={item.left}
              phase={item.phase}
              right={item.right}
              isNotMobile={isNotMobile}
              bdrclr={"border-steel-pink-main"}
              badgeIcon={"/icons/Group 52.svg"}
              title={item.title}
              desc={item.desc}
              styles={index === 1 ? "mt-8" : ""}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
