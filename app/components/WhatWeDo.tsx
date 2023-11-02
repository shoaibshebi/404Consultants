// @ts-nocheck
"use client";
import React from "react";
import { motion } from "framer-motion";

import SecBtn from "../Reusable/SecBtn";
import { planningData } from "../utils/data";
import { slideIn, staggerContainer } from "../utils/motion";

const WhatWeDo = () => {
  const numberOfStars = 5;

  const randomStyle = () => {
    return {
      position: "absolute",
      top: `${Math.random() * 100}%`,
      right: `-${Math.random() * 20}%`,
      width: `${Math.random() * 3 + 1}px`, // Random width between 1px and 4px
      height: "auto", // Keep the aspect ratio
      transform: `translate(-50%, -50%)`, // Center the star based on its top and left position
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

  const PlanningCard = ({ img, title, bclr }: any) => {
    return (
      <div
        className={`rounded-3xs flex flex-col justify-center items-center bg-rich-blacks-main box-border w-[135px] h-[136px] border-[3px] border-solid `}
        style={{ borderColor: bclr }}
      >
        <img className='relative w-[52px] h-[52px]' alt='' src={img} />
        <div className='relative leading-[24px] font-semibold'>{title}</div>
      </div>
    );
  };

  return (
    <motion.div
      id='whatwedo'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='flex flex-col justify-center items-center relative w-[80%] mx-auto mt-16'
    >
      {stars}
      <div className='mb-4 md:mb-16'>
        <SecBtn title='What we do' />
      </div>
      <div className='flex justify-center items-center relative my-16 w-full'>
        <div
          className='absolute w-[100%] h-[450px] md:h-[300px] bg-cover  z-0'
          style={{ backgroundImage: "url('/images/mesh.svg')" }}
        ></div>

        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          {planningData.map((x, i) => (
            <motion.div key={i} variants={slideIn("up", "tween", i * 0.1, 1)}>
              <PlanningCard {...x} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
