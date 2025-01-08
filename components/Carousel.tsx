import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselProject({ images }: { images: string[] }) {
  return (
    <Carousel className=" md:w-1/2 w-full rounded-md  ">
      <CarouselContent className="  ">
        {Array.from({ length: images.length }).map((_, index) => (
          <CarouselItem key={index}>
            <div className=" h-[40vh] md:h-[45vh]  w-[100%] bg-yellow-50 relative  rounded-md  ">
              <Image
                alt="caroucel image"
                src={images[index]}
                width={1000}
                height={1000}
                className="   w-full rounded-md object-fill h-full  "
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute text-zinc-600 top-1/2 left-1  " />
      <CarouselNext className=" absolute right-1 top-1/2  text-zinc-600 " />
    </Carousel>
  );
}
