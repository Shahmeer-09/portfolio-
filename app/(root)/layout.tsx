import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";
const layout = async({ children }: { children: ReactNode }) => {

  return (
    <div className=" relative" >
      <Navbar/>
      {children}
    </div>
  );
};

export default layout;
