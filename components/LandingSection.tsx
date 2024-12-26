"use client";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const LandingSection = () => {
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const mainref = useRef(null);
  const textRef2 = useRef(null);
  const introText1 = useRef<HTMLDivElement>(null);
  const introText2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: mainref.current,
        start: "bottom 90%",
        end: "bottom 40%",
        scrub: 1,
        // markers:true
      },
    });
    timeline1. to(mainref.current, {
      y: "80",
      duration: .5,  
      ease: "power3.Out",
    
    },0);
    const timeline = gsap.timeline();

    timeline.from([boxRef.current, boxRef2.current], {
      width: "0%",
      duration: 1,
      ease: "power3.out",
    });
    timeline.from([introText1.current, introText2.current], {
      width: "0px",
      duration: 0.3,
      ease: "power4.in",
      stagger: {
        amount: 0.3,
      },
    });

    timeline.from(
      [
        introText1?.current?.nextElementSibling,
        introText2?.current?.nextElementSibling,
      ],
      {
        opacity: 0,
        y: "20px",
        duration: 0.5,
        ease: "power3.out",
        stagger: {
          amount: 0.3,
        },
      },
      "-=0.3"
    );
    timeline.from(
      textRef2.current,
      {
        x: "-50px",
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
        },
      },
      "-=1"
    );
  
  }, []);

  return (
    <section id="main" ref={mainref} className="h-[100vh]  relative  landing  mx-auto overflow-hidden  ">
      <div className="introHeading -translate-x-[50%] flex flex-col gap-2 left-[50%] z-30 absolute md:top-[200px] top-[300px] md:w-[380px] w-[280px]   ">
        <div className=" relative   flex items-center justify-center  text-zinc-800  w-full  ">
          <span
            ref={introText1}
            className=" absolute top-0 left-0 bg-white   -z-10 h-full md:w-[380px] w-[280px]   "
          ></span>
          <h2 className=" text-lg md:text-2xl py-2 uppercase    ">
            Shahmeer ALi
          </h2>
        </div>
        <div className="  relative  flex items-center justify-center text-zinc-800 md:w-[380px] w-[280px]">
          <span
            ref={introText2}
            className=" absolute top-0 left-0 bg-white  w-full -z-10 h-full   "
          ></span>
          <h2 className=" text-sm md:text-xl  py-2 uppercase">
            FullStack Developer
          </h2>
        </div>
      </div>

      <div className=" flex flex-row h-full  ">
        <div className="right  overflow-hidden h-full w-[50%]      ">
          <div
            ref={boxRef}
            className="wrapper  bg-zinc-900  h-full w-full"
          ></div>
        </div>
        <div className="   translate-y-[300px]  md:translate-y-[200px]   absolute z-10 lg:-translate-y-[100px]     ">
          <h1
            ref={textRef2}
            className=" text-[43vw]  lg:translate-y-[200px] md:translate-y-[100px]  xl:translate-y-0  translate-y-[200px]  lg:rotate-0 rotate-90  font-bold text-zinc-800 "
          >
            CIAO
          </h1>
        </div>
        <div className=" z-20 h-full px-[.6px] bg-white  "></div>
        <div className="left  overflow-hidden h-full w-[50%]  ">
          <div
            ref={boxRef2}
            className="wrapper bg-zinc-900  w-full h-full"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
