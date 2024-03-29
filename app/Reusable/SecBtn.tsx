import React from "react";
import { TypingText } from "./customTexts";

export default function SecBtn({ title }: any) {
  return (
    <div className="w-fit py-2 px-8 md:px-12  cursor-pointer flex justify-center items-center  bg-gradient-to-r from-[#3b82f61A] to-[#d946ef1A] rounded-[20px] border border-blue-500 border-opacity-10 shadow-blue-glow">
      <TypingText delay={0} title={title} textStyles="opacity-100" />
    </div>
  );
}
