"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="h-[40vh] w-[2px] bg-zinc-300 flex items-end overflow-hidden">
      <motion.span
        initial={{ y: "0%" }} // Start position
        animate={{ y: "-170%" }} // Move up
        transition={{
          repeat: Infinity,
          duration: .4,
          ease:"circInOut",
          repeatType: "reverse", 
        }}
        className="h-[40%] w-full bg-zinc-700"
      ></motion.span>
    </div>
  );
};

export default Loader;
