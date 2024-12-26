import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CarouselProject } from "./Carousel";
import { projectprop } from "./ProjectCardComp";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Dialogproject({
  children,
  project,
}: {
  project: projectprop;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="   border-none sm:max-w-6xl text-zinc-200  bg-zinc-900 py-4 ">
        <DialogHeader>
          <DialogTitle className=" font-bold text-lg text-green-500 md:text-2xl  ">
            Project details
          </DialogTitle>
          <div className=" md:flex md:flex-row md:justify-between md:items-center gap-4 p-2 flex-col  ">
            <CarouselProject images={project.images} />
            <div className=" w-full  md:w-[50%]   md:place-self-start md:px-2 px-4 py-2  ">
              <h2 className=" font-semibold  text-lg md:text-xl  text-start    ">
                Project Features
              </h2>
              <ul
                style={{ listStyleType: "initial" }}
                className=" p-2 md:p-4 text-start  "
              >
                {project &&
                  project?.featuresdata?.map((line, i) => (
                    <li key={i} className=" text-xs md:text-sm  ">
                      {line}
                    </li>
                  ))}
              </ul>
              {project && project?.link!==""? (

                <Link href={project?.link} className=" w-full flex mt-4  ">
                <Button className=" bg-green-400   text-zinc-800 group  w-1/2 hover:bg-green-500 transition ease-linear ">
                  See live <ArrowRight className=" group-hover:translate-x-1 transition ease-linear " /> 
                </Button>
              </Link>
              ):(
                <Link href={project?.code} className=" w-full flex mt-4  ">
                <Button className=" bg-green-400   text-zinc-800 group  w-1/2 hover:bg-green-500 transition ease-linear ">
                  check code <ArrowRight className=" group-hover:translate-x-1 transition ease-linear " /> 
                </Button>
              </Link>
              ) }
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
