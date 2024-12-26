"use client";

import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["48deg", "-48deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(
    scrollYProgress,
    [0, 1], // Added intermediate point for smoother start
    ["100vw", "-20000px"] // Text stays in place initially, then starts scrolling
  );
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section
      id="about"
      ref={targetRef}
      className=" h-[200vh] md:h-[500vh] lg:h-[700vh] bg-zinc-100 text-neutral-950"
    >
      <div className="sticky top-0 flex flex-col h-screen items-center overflow-hidden">
        <div className=" h-[60%] flex  justify-center items-end  ">
          <div className="  flex flex-col items-center mb-[30px] ">
            <div className="  h-[200px] ">
              <Image
                alt="image batman"
                src={"/dark.png"}
                height={1000}
                width={1000}
                className=" h-full w-full object-cover "
              />
            </div>
            <h2 className=" font-black text-lg md:text-xl  tracking-tighter text-zinc-800  ">
              My journey as a developer{" "}
            </h2>
          </div>
        </div>
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-4xl font-black uppercase leading-[0.85] md:text-6xl lg:text-8xl md:leading-[0.85] pl-[1600vw]  md:pl-[1300vw]  lg:pl-[1700vw] xl:pl-[1450vw] "
        >
          "Every journey begins with small steps," I am Shahmeer, a 23-year-old
          self-taught developer. Over two years, I`ve mastered skills from HTML
          to Docker, balancing backend and frontend expertise. Challenges tested
          me, but persistence guided my growth. The saying "Press On!" fuels my
          determination, turning effort into success. My journey reflects
          dedication to overcoming limits, learning, and building a future of
          growth and inspiration through technology".
        </motion.p>
      </div>
    </section>
  );
};
