"use client"

import React from "react";
import { motion } from "framer-motion";
import RevealLinks from "./LinksSocialMedia";

const FuzzyOverlayExample = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div id="contact" className="relative overflow-hidden md:h-[80vh] h-[60vh]  bg-green-400   p-0  ">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="   pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div  className="     w-full border-yellow-500 relative flex items-center justify-start h-full  space-y-6 p-4 md:p-8">
        <RevealLinks/>
    
    </div>
  );
};

export default FuzzyOverlayExample;