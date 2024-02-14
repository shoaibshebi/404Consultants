"use client";

import { motion } from "framer-motion";
import {
  textContainer,
  textContainerSpeedy,
  textVariant2,
} from "../utils/motion";

export const TypingText = ({ title, textStyles, isSpeedy }) => (
  <motion.p
    variants={isSpeedy ? textContainerSpeedy : textContainer}
    className={`${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
