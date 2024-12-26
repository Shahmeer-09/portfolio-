"use client";
import { useGSAP } from "@gsap/react";
import ProjectCardComp, { projectprop } from "./ProjectCardComp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
const ProjectCard = ({projectsdata}:{projectsdata:projectprop[]}) => {
  const wrapper = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elems: NodeList | undefined =
      wrapper?.current?.querySelectorAll(".card .wrapper");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top 100%",
        end: "bottom 80%",
        scrub: 1,
        // markers:true
      },
    });
    elems?.forEach((elem) => {
      tl.from([elem.firstChild, elem.firstChild?.nextSibling], {
        y: "30",
        opacity: 0,
        duration: 1,
        // stagger: 0.5,
        ease: "power4.Out",
      });
      //  "-=.5"
    });
  }, []);
  
  return (
    <section id="portfolio" className=" bg-zinc-900  ">
      <div
        className=" w-full pt-12  
            font-black uppercase text-green-400 tracking-tight text-6xl md:text-8xl   "
      >
        <h1 className=" md:place-self-start md:pl-16 place-self-center ">
          {" "}
          Portfolio{" "}
        </h1>
      </div>
      <div
        ref={wrapper}
        className="wrapper max-w-7xl flex flex-col gap-6  pt-20 pb-10  mx-auto px-10 md:px-20  "
      >
        { projectsdata && projectsdata?.map((project, index) => (
          <ProjectCardComp key={index} project={project as projectprop} />
        ))}
      </div>   
    </section>
  );
};

export default ProjectCard;
