
"use client"
import React from "react";
import { motion } from "framer-motion";

const RevealLinks = () => {
  return (
    <section className=" gap-2 grid place-items-start   px-10 py-12 text-zinc-800">
      <FlipLink href="mailto:shahmeerweb@gmail.com?subject=Inquiry%20About%20Your%20Portfolio&body=Hello%20Shahmeer,%20I%20would%20like%20to%20know%20more%20about%20your%20work.">Email me</FlipLink>
      <FlipLink href="https://github.com/Shahmeer-09/">Github</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/shah-meer-a3b910215/">Linkedin</FlipLink>
      <FlipLink href="https://wa.me/03086989618">Whatsapp</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

  const FlipLink = ({ children, href }:any) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      whileTap="hovered"
      href={href}
      className="relative   block overflow-hidden whitespace-nowrap  font-black uppercase text-6xl sm:text-8xl xl:9xl "
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l:number, i:number) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
              
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l:number, i:number) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};


export default RevealLinks