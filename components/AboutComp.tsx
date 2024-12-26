"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import AboutTextcont from "./AboutTextcont";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { section } from "framer-motion/client";
import { aboutData } from "@/app/utils/aboutdata";

const AboutComp = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({  
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80% ",
        end: "bottom top",
      },
    });
    const elements = aboutRef.current?.querySelectorAll("#aboutdata #desc");
    elements?.forEach((elem) => {
      const text = elem.textContent?.split(" ");
      const wrappedText = text?.map((word) => `<span>${word}</span>`).join(" ");
      elem.innerHTML = wrappedText!;
      const words = elem.querySelectorAll("span");
      words.forEach((word) => {
        tl.from(word, {
          y:5,  
          opacity: 0,
          duration: .028,
          ease: "bounce.out",
        });
      });
    });
  }, []);

  return (
     <section className=" pt-0 p-10 md:pt-0 md:p-20 bg-zinc-900 z-30  " >

    <div
      id="profile"
      className=" relative rounded-lg lg:py-[70px] py-[50px] bg-zinc-100  max-w-[7xl]    "
      ref={aboutRef}
    >
      {/* <div className="absolute top-0 right-0  overflow-hidden opacity-10  " >
        <Image src={'/graphic1.png'} alt="about graphic image" width={100} height={100} className=" h-[200px] w-[200px] translate-x-[100px] rotate-180  " />
      </div>
      <div className="absolute bottom-0 left-0  overflow-hidden opacity-10  " >
        <Image src={'/graphic2.png'} alt="about graphic image" width={100} height={100} className=" h-[200px] w-[200px] -translate-x-[100px] rotate-180  " />
      </div> */}
      <div id="wrapper" className="mt-[60px] grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col items-center gap-8 px-[30px] md:px-[60px] ">
          <div className=" self-start ">
            <Image
              src={"/profile.jpg"}
              alt="profile"
              height={100}
              width={120}
              className=" rounded-xl w-[200px] h-[140px] object-cover object-top  "
            />
          </div>
          <AboutTextcont
            title={aboutData[0].title}
            description={aboutData[0].description}
          />
          <AboutTextcont
            title={aboutData[1].title}
            description={aboutData[1].description}
          />
        </div>
        <div className=" flex flex-col items-center gap-8 px-[30px] md:px-[60px]  ">
          <AboutTextcont
            title={aboutData[2].title}
            description={aboutData[2].description}
          />
          <AboutTextcont
            title={aboutData[3].title}
            description={aboutData[3].description}
          />
          <AboutTextcont
            title={aboutData[4].title}
            description={aboutData[4].description}
          />
        </div>
      </div>
    </div>
    </section>

  );
};

export default AboutComp;
