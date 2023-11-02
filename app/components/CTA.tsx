// @ts-nocheck
"use client";
import React from "react";
import { motion } from "framer-motion";

import SecBtn from "../Reusable/SecBtn";
import PrimBtn from "../Reusable/PrimBtn";
import { slideIn, staggerContainer } from "../utils/motion";

export default function CTA() {
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
      src='/icons/star1.svg'
      alt='Star'
      className='tailwind-class'
      style={randomStyle()}
    />
  ));

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='flex flex-col justify-start items-center w-[80%] mx-auto relative'
    >
      {stars}
      <div className='mt-16 '>
        <SecBtn title="Let's Build Together" />
      </div>
      <div className=' relative my-8 pb-4'>
        <motion.div
          variants={slideIn("down", "tween", 0.2, 0.5)}
          className='absolute z-0 rounded-[64px] h-full w-full [background:linear-gradient(177.6deg,_rgba(161,_91,_207,_0.01),_rgba(90,_114,_226,_0.1)_41.67%,_#2f80ed_64.81%,_#39d0ff_86.13%)]  opacity-[0.4]'
        ></motion.div>

        <div className='text-center mt-4 relative z-10'>
          <h1 className='text-2xl md:text-21xl font-bold px-32 '>
            Ready to Transform your Digital Experience?
          </h1>
          <p className=' text-[#D2D2D2] font-normal w-[45%] mx-auto py-4'>
            Get in touch with our experts today and let&lsquo;s create something
            extraordinary together!
          </p>
          <div className='my-12 '>
            <PrimBtn title="Let's Build" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
