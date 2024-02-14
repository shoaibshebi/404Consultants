// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import React from "react";

import SecBtn from "../Reusable/SecBtn";
import { cards } from "../utils/data";
import { staggerContainer, zoomIn } from "../utils/motion";

interface CardProps {
  img: string;
  title: string;
  desc: string;
}
export default function About() {
  const Card = ({ img, title, desc }: CardProps) => (
    <div
      className="rounded-xl bg-rich-blacks-main transition-shadow ease-in	delay-100	 hover:shadow-slate-100/50 shadow-lg  box-border  h-auto  flex flex-col items-start justify-end p-6 gap-[24px] mt-3 border-[2px] border-solid border-whites-01
       
    "
    >
      <div className="w-[239px] h-[196px] overflow-hidden shrink-0 flex flex-col items-center justify-start no-scrollbar">
        <img
          className="relative rounded-3xs w-[239px] h-[196px] object-cover"
          alt=""
          src={img}
        />
        <div className="relative rounded-3xs bg-azure-main w-[239px] h-[196px] opacity-[0.3] mix-blend-hue mt-[-196px]" />
      </div>
      <div className="w-[234px] flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[32px] font-semibold inline-block w-[139.3px] h-[32.8px] shrink-0">
          {title}
        </div>
        <div className="relative text-base leading-[24px] text-whites-04 inline-block w-[241px]  shrink-0">
          {desc}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      id="about"
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col justify-center items-center relative w-[80%] mx-auto"
    >
      <img
        src="/icons/smallLine.svg"
        alt="hero icon"
        className="absolute h-32 w-auto top-16 right-0 z-0 "
      />
      <img
        src="/icons/smallLine.svg"
        alt="hero icon"
        className="absolute h-32 w-auto top-72 left-0 z-0 "
      />
      <img
        src="/icons/smallLine.svg"
        alt="hero icon"
        className="absolute h-20 w-4 bottom-32 inset-x-0 z-0 mx-auto"
      />

      <div className="mt-16">
        <SecBtn title="About" />
      </div>
      <div className="text-center mt-4">
        <h1 className="text-2xl md:text-21xl font-bold md:px-32 ">
          We innovate, create, and elevate your digital presence.
        </h1>
        <p className="text-2xl text-[#D2D2D2] font-normal  md:w-[37%] mx-auto py-4">
          Growing your brand value is the goal, as we build new strategies for
          your business.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center relative gap-4 my-16 w-full">
        <motion.div variants={zoomIn(0.2, 0.2)}>
          <Card {...cards[0]} />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className=" md:h-[800px] gap-[20px]"
        >
          <Card {...cards[1]} />
          <Card {...cards[2]} />
        </motion.div>
        <motion.div variants={zoomIn(0.4, 1)}>
          <Card {...cards[3]} />
        </motion.div>
        <motion.div variants={zoomIn(0.4, 1)} className="h-full md:mt-[-65%]">
          <Card {...cards[4]} />
        </motion.div>
      </div>
    </motion.div>
  );
}
