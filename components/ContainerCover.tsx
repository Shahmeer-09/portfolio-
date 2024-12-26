import React from "react";
import { Cover } from "./Cover/cover";


export function CoverCont() {
  return (
    <div className=" bg-zinc-900  py-12 ">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-green-700  via-green-400 to-green-200 ">
        Build amazing websites that <br /> works at <Cover>warp speed</Cover>
      </h1>
    </div>
  );
}
