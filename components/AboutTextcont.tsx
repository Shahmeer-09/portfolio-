
import React from "react";

interface abtprops {
  title: string;
  description: string;
  className?:string

}

const AboutTextcont = ({ title, description , className}: abtprops) => {
   


  return (
    <div id="aboutdata" className={ ` ${className} flex flex-col gap-4`}>
      <h2  className="  text-sm font-bold flex items-center text-zinc-700 ">
        <span className=" w-[20px]  h-[1.5px] bg-green-400 mr-2 "></span> {title}
      </h2>
      <div id="desc" className=" text-sm md:text-[13px]   text-zinc-500  ">{description}</div>
    </div>
  );
};

export default AboutTextcont;
