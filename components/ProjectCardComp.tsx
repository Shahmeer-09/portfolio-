"use client";

import React, { RefObject, useRef } from "react";
import { ArrowUpRightFromSquare, Braces, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialogproject } from "./ProjectDialogue";
export interface projectprop {
  title: string;
  about: string;
  images: string[];
  featuresdata: string[];
  link: string;
  code: string;
}
const ProjectCardComp = ({ project }: { project: projectprop }) => {
  return (
    <div className="card  md:h-[220px]  h-[400px] pb-2  border-b-2bo  shadow-md shadow-current   ">
      <div className=" wrapper flex  md:flex-row flex-col  h-full  gap-2 ">
        <Dialogproject project={project}>
          <div
            id="absolute"
            className=" relative cursor-pointer group overflow-hidden   rounded-md  w-full  md:w-[30%]   "
          >
            <Image
              alt="project Image"
              src={
                project && project?.images?.length > 0
                  ? project?.images[0]
                  : "/testImageProject.jpg"
              }
              height={1000}
              width={1000}
              className="  group-hover:scale-105  ease-linear transition h-full w-full object-fill rounded-md "
            />
            <div className=" absolute top-0 left-0 transform -translate-x-[100%]  h-full w-full transition duration-200  group-hover:translate-x-0 ease-out bg-zinc-800 opacity-40   flex items-center justify-center  ">
              <ArrowUpRightFromSquare className="  size-10  text-green-100 font-dark  group-hover:opacity-100 ease-linear transition " />
            </div>
          </div>
        </Dialogproject>

        <div className=" border-green-600 rounded-xl  md:px-4 w-full md:w-[70%]   ">
          <div className="justify-center h-full items-start flex-col flex gap-3   ">
            <h2 className=" text-green-400 uppercase text-lg sm:text-xl font-semibold   ">
              {project?.title}
            </h2>
            <p className=" text-zinc-400 sm:text-sm text-xs  ">
              {project?.about}
            </p>
            <div className=" flex gap-3 ">
              <button className=" self-start px-6 py-2 bg-green-400">
                <Link
                  href={project?.code}
                  className="  flex items-center gap-2 text-black  "
                >
                  <Braces className=" text-[12px] " />{" "}
                  <span className=" text-sm ">Code</span>
                </Link>
              </button>
              {project && project?.link !== "" && (
                <button className=" self-start px-6 py-[6px] border-green-400 border-2 text-green-400 ">
                  <Link
                    href={project?.link}
                    className=" flex items-center  gap-2  "
                  >
                    <Link2 className=" text-[12px] " />{" "}
                    <span className=" text-sm ">Demo</span>
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardComp;
