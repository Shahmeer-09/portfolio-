"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const containerVariants = {
    hidden: {
      x: "100%",
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
    }, // Start off-screen to the right
    visible: {
      x: "0%", // Slide in
      borderTopLeftRadius: "0%",
      borderBottomLeftRadius: "0%",
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 15,
        duration: 0.6,
      },
    },
    exit: {
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
      x: "100%", // Slide out smoothly
      transition: { ease: "easeIn", duration: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        x: {
          type: "spring",
          damping: 4,
          stiffness: 100,
          delay: i * 0.1,
        },
      },
    }),
  };

  return (
    <>
      {/* Toggle Button */}
      <div
        onClick={() => setShowNav(true)}
        className="fixed top-10 right-10 z-50 cursor-pointer"
      >
        <motion.div
          transition={{ ease: "easeInOut", duration: 0.3 }}
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360, backgroundColor: "#dcfce7" }}
          whileTap={{ rotate: 360, backgroundColor: "#dcfce7" }}
          className="group p-4 bg-white   rounded-full"
        >
          <AlignJustify className="group-hover:text-green-600  transition ease-in-out size-6 text-zinc-800" />
        </motion.div>
      </div>

      {/* Navbar */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-green-500"
          >
            <div className="relative w-full h-full bg-transparent">
              {/* Close Button */}
              <X
                onClick={() => setShowNav(false)}
                className="absolute top-10 right-10 cursor-pointer size-8 text-green-900 hover:rotate-180 hover:text-green-700 transition-transform ease-linear duration-200"
              />

              {/* Navigation Links */}
              <div className="h-full flex flex-col justify-center pl-16">
                <ul className="flex flex-col gap-4 text-left">
                  {["Home", "profile","about" ,"Portfolio", "Contact"].map((link, i) => (
                    <motion.li
                      onClick={() => setShowNav(false)}
                      key={link}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <Link
                        href={`#${link.toLowerCase()}`}
                        className=" capitalize tracking-tighter font-sans hover:pl-2 ease-out  transition-all duration-200 md:text-6xl text-4xl font-black text-zinc-800 hover:text-zinc-700 "
                      >
                        {link}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
